import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="body-font border-t border-white/10 bg-gray-800 text-white dark:bg-black/80">
      <div className="mx-auto w-full px-4 py-8 sm:w-full md:w-4/6 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-4 text-center lg:max-w-md lg:text-left">
            <p className="text-sm leading-relaxed text-gray-100">
              © 2021 testimonialapi —{" "}
              <a
                className="font-medium text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                href="mailto:info.blogtheorem@gmail.com"
              >
                info.blogtheorem@gmail.com
              </a>
            </p>
            <nav
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-200 lg:justify-start"
              aria-label="Footer"
            >
              <Link className="hover:text-white hover:underline" href="/changelog">
                Changelog
              </Link>
              <Link className="hover:text-white hover:underline" href="/status">
                Status
              </Link>
              <a
                className="hover:text-white hover:underline"
                href="/api/openapi"
                target="_blank"
                rel="noreferrer"
              >
                OpenAPI
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div
              className="flex items-center justify-center gap-5"
              aria-label="Social links"
            >
              <a
                className="rounded-lg p-1 text-gray-200 transition hover:bg-white/10 hover:text-white"
                href="https://twitter.com/blogtheorem"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="rounded-lg p-1 text-gray-200 transition hover:bg-white/10 hover:text-white"
                href="https://instagram.com/blogtheorem"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </div>

            <div className="flex w-full max-w-xl flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:max-w-none lg:justify-end">
              <a
                className="inline-flex justify-center"
                href="https://www.producthunt.com/posts/testimonialapi?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-testimonialapi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Product Hunt"
              >
                <img
                  className="h-10 w-auto max-w-44 object-contain sm:max-w-none"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=286062&theme=dark"
                  alt="testimonialapi on Product Hunt"
                  width={176}
                  height={40}
                />
              </a>
              <a
                className="inline-flex justify-center"
                href="https://rapidapi.com/info.blogtheorem/api/testimonial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RapidAPI"
              >
                <img
                  className="mx-auto h-8 w-auto max-w-32 object-contain opacity-90 sm:mx-0"
                  src="/img/rapidapi-logo.png"
                  alt="RapidAPI"
                  width={120}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
