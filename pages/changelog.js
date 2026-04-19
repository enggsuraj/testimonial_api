import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";

const entries = [
  {
    date: "2026-04-19",
    title: "v1 API, OpenAPI, filters, and docs refresh",
    items: [
      "Added /api/v1 with pagination (limit, offset), minRating, q search, sort (asc, desc, random) and optional seed for deterministic random order.",
      "Added GET /api/v1/random for a random testimonial.",
      "Published GET /api/openapi with an OpenAPI 3 schema.",
      "Enriched testimonial objects with company, createdAt, social links, verified, locale, tags, stars, reviewSource, and avatarThumb.",
      "Legacy /api routes remain but emit Deprecation + Link successor headers pointing to /api/v1.",
      "CORS allows GET, HEAD, OPTIONS; responses include illustrative X-RateLimit-* headers.",
      "Site: dark mode, changelog & status pages, API reference with copy-to-clipboard for URLs, curl, and fetch.",
    ],
  },
  {
    date: "2021–2024",
    title: "Earlier releases",
    items: [
      "Initial public JSON API with 10 testimonials and marketing site.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Head>
        <title>Changelog — testimonialapi</title>
        <meta
          name="description"
          content="API and website changes for testimonialapi."
        />
      </Head>

      <Header />
      <main className="mx-auto max-w-3xl p-4 md:w-4/6">
        <h1 className="title-font text-3xl font-semibold text-gray-900 dark:text-white">
          Changelog
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Notable changes to the API and this site.
        </p>

        <div className="mt-10 space-y-12">
          {entries.map((entry) => (
            <section key={entry.date}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                {entry.date}
              </h2>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                {entry.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Message />
      <Footer />
    </>
  );
}
