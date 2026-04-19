/** @jest-environment node */

const {
  getById,
  listTestimonials,
  getAllEnriched,
} = require("../lib/testimonials");

describe("testimonials lib", () => {
  it("enriches records with required keys", () => {
    const all = getAllEnriched();
    expect(all.length).toBe(10);
    const first = all[0];
    expect(first).toMatchObject({
      id: 1,
      company: expect.any(String),
      createdAt: expect.any(String),
      verified: expect.any(Boolean),
      locale: expect.any(String),
      tags: expect.any(Array),
      stars: expect.any(Number),
      reviewSource: "mock",
      avatarThumb: expect.stringContaining("/avatar/thumb/"),
      social: {
        twitter: expect.any(String),
        linkedin: expect.any(String),
      },
    });
  });

  it("returns testimonial by id", () => {
    const t = getById(2);
    expect(t.id).toBe(2);
    expect(t.name).toContain("Juliet");
  });

  it("lists with pagination", () => {
    const r = listTestimonials({ limit: "2", offset: "0", sort: "asc" });
    expect(r.error).toBeUndefined();
    expect(r.data).toHaveLength(2);
    expect(r.meta.total).toBe(10);
    expect(r.meta.limit).toBe(2);
    expect(r.meta.offset).toBe(0);
  });

  it("filters by minRating and search", () => {
    const r = listTestimonials({
      minRating: "4.8",
      q: "manager",
      sort: "desc",
    });
    expect(r.error).toBeUndefined();
    expect(r.data.every((t) => t.rating >= 4.8)).toBe(true);
  });

  it("rejects invalid query", () => {
    const r = listTestimonials({ minRating: "nope", sort: "asc" });
    expect(r.error).toBe("invalid_query");
  });

  it("deterministic random uses seed", () => {
    const a = listTestimonials({ sort: "random", seed: "7" });
    const b = listTestimonials({ sort: "random", seed: "7" });
    expect(a.data.map((x) => x.id)).toEqual(b.data.map((x) => x.id));
  });
});
