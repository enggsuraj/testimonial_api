import React from "react";
import Link from "next/link";

const PUBLIC_BASE = "https://testimonialapi.toolcarton.com";

const endpoints = [
  { href: "/api", path: "/api", caption: "All 10 testimonials" },
  ...Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    return {
      href: `/api/${n}`,
      path: `/api/${n}`,
      caption: `Single user · ID ${n}`,
    };
  }),
];

function EntireJSON() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="title-font text-2xl font-semibold text-gray-900 sm:text-3xl">
            Entire JSON API
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
            Click a row to open the response in your browser. Use these URLs in
            your app — they match production when deployed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {endpoints.map(({ href, path, caption }) => {
            const fullUrl = `${PUBLIC_BASE}${path}`;
            return (
              <Link
                key={href}
                href={href}
                className="group flex min-h-18 items-stretch rounded-xl border border-gray-200/90 bg-white p-4 shadow-sm ring-1 ring-black/5 transition duration-200 hover:border-indigo-200 hover:bg-indigo-50/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <span className="inline-flex w-fit shrink-0 items-center rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
                    GET
                  </span>
                  <div className="min-w-0 flex-1">
                    <code className="block break-all text-left font-mono text-sm leading-snug text-gray-800 group-hover:text-indigo-900">
                      {fullUrl}
                    </code>
                    <span className="mt-1 block text-xs text-gray-500">
                      {caption}
                    </span>
                  </div>
                </div>
                <span
                  className="ml-3 hidden shrink-0 self-center text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-500 sm:inline"
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EntireJSON;
