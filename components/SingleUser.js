import React from "react";

function SingleUser() {
  return (
    <section className="body-font py-8 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto flex flex-wrap items-center">
        <h2 className="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
          Get single user
        </h2>
        <p className="text-base leading-relaxed">
          IDs from 1 to 10 return one enriched testimonial. Odd IDs are
          male-presenting samples and even IDs are female-presenting (demo
          convention only).
        </p>
        <a href="/api/v1/1" className="py-5" aria-label="single user">
          <button className="inline-flex rounded-lg border-0 bg-indigo-600 py-2 px-6 text-lg text-white hover:bg-indigo-700 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400">
            GET https://testimonialapi.toolcarton.com/api/v1/1
          </button>
        </a>
        <img src="/img/one.png" alt="single user testimonial" />
      </div>
    </section>
  );
}

export default SingleUser;
