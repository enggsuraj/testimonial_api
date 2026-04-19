const rawData = require("../data/data.");

const BASE = "https://testimonialapi.toolcarton.com";

const COMPANIES = {
  1: "Acme Retail Ltd",
  2: "Northbyte Systems",
  3: "Pinnacle Ventures",
  4: "Studio Lutz",
  5: "DevStack GmbH",
  6: "Wordcraft Media",
  7: "Harbor Logistics",
  8: "Brightwave Marketing",
  9: "Apex Sales Co",
  10: "Forma Design LLC",
};

const LOCALES = {
  1: "en-GB",
  2: "sv-SE",
  3: "en-US",
  4: "fr-FR",
  5: "de-DE",
  6: "en-US",
  7: "en-AU",
  8: "en-US",
  9: "en-US",
  10: "es-ES",
};

const TAGS = {
  1: ["b2b", "support", "onboarding"],
  2: ["product", "ux", "saas"],
  3: ["growth", "analytics"],
  4: ["branding", "freelance"],
  5: ["developer", "delivery"],
  6: ["content", "design"],
  7: ["logistics", "scale"],
  8: ["marketing", "roi"],
  9: ["sales", "reliability"],
  10: ["events", "design"],
};

function socialFor(id) {
  const slug = (n) => `user-${n}`;
  return {
    twitter: `https://twitter.com/${slug(id)}`,
    linkedin: `https://www.linkedin.com/in/${slug(id)}`,
  };
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a += 0x6d2b79f5;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleDeterministic(items, seed) {
  const arr = [...items];
  const rnd = mulberry32(Number(seed) || 1);
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleRandom(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function enrichTestimonial(raw) {
  const stars = Math.min(5, Math.max(1, Math.round(Number(raw.rating))));
  const id = raw.id;
  return {
    ...raw,
    designation: String(raw.designation).trim(),
    company: COMPANIES[id] ?? "Example Corp",
    createdAt: new Date(Date.UTC(2023, 0, id, 12, 0, 0)).toISOString(),
    social: socialFor(id),
    verified: id % 3 !== 0,
    locale: LOCALES[id] ?? "en-US",
    tags: TAGS[id] ?? ["mock"],
    stars,
    reviewSource: "mock",
    avatarThumb: `${BASE}/avatar/thumb/${id}.jpg`,
  };
}

function getAllEnriched() {
  return rawData.map(enrichTestimonial);
}

function getById(id) {
  const n = parseInt(String(id), 10);
  if (Number.isNaN(n)) return null;
  const row = rawData.find((x) => x.id === n);
  return row ? enrichTestimonial(row) : null;
}

function getRandomOne() {
  const all = getAllEnriched();
  return all[Math.floor(Math.random() * all.length)];
}

function matchesQuery(item, q) {
  if (!q) return true;
  const needle = String(q).toLowerCase();
  const hay = [
    item.name,
    item.message,
    item.designation,
    item.company,
    item.location,
    ...(item.tags || []),
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(needle);
}

function parseListQuery(query) {
  const limitRaw = query.limit;
  const offsetRaw = query.offset;
  const minRatingRaw = query.minRating;
  const q = query.q;
  const sort = query.sort;
  const seedRaw = query.seed;

  let limit = limitRaw === undefined ? 10 : parseInt(String(limitRaw), 10);
  let offset = offsetRaw === undefined ? 0 : parseInt(String(offsetRaw), 10);
  const minRating =
    minRatingRaw === undefined || minRatingRaw === ""
      ? null
      : parseFloat(String(minRatingRaw));

  if (Number.isNaN(limit) || limit < 1) limit = 10;
  if (limit > 50) limit = 50;
  if (Number.isNaN(offset) || offset < 0) offset = 0;

  let minOk = true;
  if (minRating !== null && Number.isNaN(minRating)) minOk = false;

  const sortOk = !sort || ["asc", "desc", "random"].includes(String(sort));

  let seedNum = 1;
  if (seedRaw !== undefined) {
    seedNum = parseInt(String(seedRaw), 10);
    if (Number.isNaN(seedNum)) seedNum = 1;
  }

  return {
    limit,
    offset,
    minRating: minOk ? minRating : NaN,
    q: q ? String(q) : "",
    sort: sort ? String(sort) : "asc",
    seed: seedNum,
    valid: minOk && sortOk,
  };
}

function listTestimonials(query) {
  const parsed = parseListQuery(query);
  if (!parsed.valid) {
    return { error: "invalid_query", parsed };
  }

  let items = getAllEnriched().filter((t) => {
    if (parsed.minRating !== null && t.rating < parsed.minRating) return false;
    return matchesQuery(t, parsed.q);
  });

  if (parsed.sort === "desc") {
    items = [...items].sort((a, b) => b.id - a.id);
  } else if (parsed.sort === "random") {
    const hasSeed =
      query.seed !== undefined && String(query.seed).length > 0;
    items = hasSeed
      ? shuffleDeterministic(items, parsed.seed)
      : shuffleRandom(items);
  } else {
    items = [...items].sort((a, b) => a.id - b.id);
  }

  const total = items.length;
  const page = items.slice(parsed.offset, parsed.offset + parsed.limit);

  const hasSeedInQuery =
    query.seed !== undefined && String(query.seed).length > 0;

  return {
    data: page,
    meta: {
      total,
      limit: parsed.limit,
      offset: parsed.offset,
      sort: parsed.sort,
      ...(parsed.sort === "random" && hasSeedInQuery
        ? { seed: parsed.seed }
        : {}),
    },
  };
}

module.exports = {
  enrichTestimonial,
  getAllEnriched,
  getById,
  getRandomOne,
  listTestimonials,
  parseListQuery,
  rawCount: rawData.length,
};
