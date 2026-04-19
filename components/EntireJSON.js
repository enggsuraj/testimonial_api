import React, { useCallback, useState } from "react";
import Link from "next/link";

const PUBLIC_BASE = "https://testimonialapi.toolcarton.com";

const v1Examples = [
  {
    href: "/api/v1",
    path: "/api/v1",
    caption: "Paginated list · supports query params",
  },
  {
    href: "/api/v1?limit=3&offset=0&minRating=4.5&q=design&sort=desc",
    path: "/api/v1?limit=3&offset=0&minRating=4.5&q=design&sort=desc",
    caption: "Example: limit, offset, minRating, search, sort",
  },
  {
    href: "/api/v1?sort=random&seed=42",
    path: "/api/v1?sort=random&seed=42",
    caption: "Deterministic random order (seeded)",
  },
  {
    href: "/api/v1/random",
    path: "/api/v1/random",
    caption: "One random testimonial",
  },
];

const legacyExamples = [
  { href: "/api", path: "/api", caption: "Legacy · all testimonials (deprecated)" },
  { href: "/api/1", path: "/api/1", caption: "Legacy · single by id (deprecated)" },
];

const singleSamples = [1, 5, 10];

function CopyButton({ label, text }) {
  const [ok, setOk] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(() => setOk(false), 1600);
    } catch {
      setOk(false);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className="shrink-0 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-semibold text-gray-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-indigo-500 dark:hover:text-indigo-200"
    >
      {ok ? "Copied" : label}
    </button>
  );
}

function EndpointRow({ href, fullUrl, caption, showCopy }) {
  const curl = `curl -s "${fullUrl}"`;

  return (
    <div className="rounded-xl border border-gray-200/90 bg-white p-4 shadow-sm ring-1 ring-black/5 dark:border-gray-700 dark:bg-gray-900/40">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
              GET
            </span>
            <code className="break-all font-mono text-sm text-gray-800 dark:text-gray-100">
              {fullUrl}
            </code>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{caption}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href={href}
              className="inline-flex rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Open
            </Link>
            {showCopy ? (
              <>
                <CopyButton label="Copy URL" text={fullUrl} />
                <CopyButton label="Copy curl" text={curl} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function EntireJSON() {
  const fetchSnippet = `const res = await fetch("${PUBLIC_BASE}/api/v1?limit=5&sort=asc");\nconst json = await res.json();\nconsole.log(json.data, json.meta);`;

  return (
    <section className="body-font text-gray-600 dark:text-gray-300">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="title-font text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
            API reference
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Versioned endpoints under <code className="font-mono text-sm">/api/v1</code> support
            pagination, filtering, search, and deterministic random ordering. Legacy{" "}
            <code className="font-mono text-sm">/api</code> routes remain but send{" "}
            <code className="font-mono text-sm">Deprecation</code> headers.
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-3xl rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 text-sm text-indigo-950 dark:border-indigo-900/60 dark:bg-indigo-950/30 dark:text-indigo-100">
          <p className="font-semibold">CORS &amp; limits</p>
          <p className="mt-1 text-indigo-900/90 dark:text-indigo-100/90">
            <code className="font-mono">GET</code>, <code className="font-mono">HEAD</code>, and{" "}
            <code className="font-mono">OPTIONS</code> are allowed from any origin (
            <code className="font-mono">*</code>). Responses include illustrative{" "}
            <code className="font-mono">X-RateLimit-*</code> headers for client testing.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            OpenAPI
          </h3>
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900/40">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Machine-readable schema (JSON):
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="inline-flex rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                href="/api/openapi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET /api/openapi
              </a>
              <CopyButton label="Copy URL" text={`${PUBLIC_BASE}/api/openapi`} />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            v1 · recommended
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {v1Examples.map(({ href, path, caption }) => (
              <EndpointRow
                key={path}
                href={href}
                fullUrl={`${PUBLIC_BASE}${path}`}
                caption={caption}
                showCopy
              />
            ))}
            {singleSamples.map((n) => (
              <EndpointRow
                key={`v1-${n}`}
                href={`/api/v1/${n}`}
                fullUrl={`${PUBLIC_BASE}/api/v1/${n}`}
                caption={`Single testimonial · id ${n} (supported range 1–10)`}
                showCopy
              />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Legacy (deprecated)
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {legacyExamples.map(({ href, path, caption }) => (
              <EndpointRow
                key={path}
                href={href}
                fullUrl={`${PUBLIC_BASE}${path}`}
                caption={caption}
                showCopy
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
              Example · curl
            </h3>
            <pre className="overflow-x-auto rounded-xl border border-gray-200 bg-gray-950 p-4 text-xs text-gray-50 dark:border-gray-700">
              {`curl -s "${PUBLIC_BASE}/api/v1?limit=2&offset=0&sort=asc"`}
            </pre>
            <div className="mt-2">
              <CopyButton
                label="Copy"
                text={`curl -s "${PUBLIC_BASE}/api/v1?limit=2&offset=0&sort=asc"`}
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
              Example · fetch
            </h3>
            <pre className="overflow-x-auto rounded-xl border border-gray-200 bg-gray-950 p-4 text-xs text-gray-50 dark:border-gray-700">
              {fetchSnippet}
            </pre>
            <div className="mt-2">
              <CopyButton label="Copy" text={fetchSnippet} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EntireJSON;
