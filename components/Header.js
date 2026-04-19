import React from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="mx-auto w-full bg-indigo-600 text-white shadow-sm dark:bg-indigo-950 dark:shadow-indigo-950/40">
      <header className="body-font mx-auto text-white md:w-4/6 sm:w-full">
        <div className="container flex flex-col gap-3 p-3 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex title-font items-center justify-center font-medium md:justify-start"
          >
            <img src="/img/testimonial.svg" alt="" className="h-8 w-8" />
            <span className="ml-3 text-xl">testimonial API</span>
          </Link>

          <nav
            className="flex flex-wrap items-center justify-center gap-2 md:justify-end"
            aria-label="Site"
          >
            <Link
              href="/changelog"
              className="rounded-lg px-2 py-1 text-sm text-white/90 hover:bg-white/10"
            >
              Changelog
            </Link>
            <Link
              href="/status"
              className="rounded-lg px-2 py-1 text-sm text-white/90 hover:bg-white/10"
            >
              Status
            </Link>
            <a
              href="/api/openapi"
              className="rounded-lg px-2 py-1 text-sm text-white/90 hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAPI
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
