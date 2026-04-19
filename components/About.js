import React from "react";

// ABOUT SECTION
function About() {
  return (
    <section className="body-font text-gray-600 dark:text-gray-300 md:mt-10 sm:mt-2">
      <div className="container flex md:flex-row flex-col items-center ">
        <div className="lg:flex-grow flex flex-col md:items-start mb-16 md:mb-0 sm:text-center md:text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white ">
            Get list of random user&nbsp;
            <span className="inline-block text-indigo-700 dark:text-indigo-300">
              Testimonial data.
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Tired of copy and pasting lorem user's testimonial text which
            doesn't give the feel of authenticity, don't worry try testimonial
            API to get dummy testimonial data that includes user id, name,
            location, designation, avatar, message and rating .
          </p>
          <div className="flex justify-center">
            <a href="/api/v1">
              <button className="inline-flex rounded-lg border-0 bg-indigo-600 py-2 px-6 text-lg text-white hover:bg-indigo-700 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400">
                Get all testimonial JSON data
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full">
          <img
            className="object-contain object-center rounded mx-auto w-96"
            alt="dev"
            src="/img/dev.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
