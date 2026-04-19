import React from "react";

function Introduction() {
  return (
    <section className="body-font py-2 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto flex flex-wrap items-center">
        <h2 className="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
          Introduction
        </h2>
        <p className="text-lg">
          Use <span className="font-mono text-sm">GET</span> to fetch JSON. The
          current API lives under{" "}
          <span className="font-mono text-sm">/api/v1</span> and supports query
          parameters for pagination and filtering (see the API reference below).
        </p>
        <a href="/api/v1" className="pt-4 ">
          <button className="inline-flex rounded-lg border-0 bg-indigo-600 py-2 px-6 text-lg text-white hover:bg-indigo-700 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400">
            GET https://testimonialapi.toolcarton.com/api/v1
          </button>
        </a>
      </div>
    </section>
  );
}

export default Introduction;
