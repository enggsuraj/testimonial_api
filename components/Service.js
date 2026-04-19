import React from "react";

function Service() {
  return (
    <section className="body-font text-gray-600 dark:text-gray-300">
      <div className="container mx-auto py-8">
        <div className="mt-5 mb-10 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
            Free Testimonials API Data for testing and prototyping.
          </h1>
          <p className="mx-auto max-w-2xl leading-relaxed text-base">
            Contain upto 10 users data, simple use a GET HTTP request on the
            link. Individual of one data can be fetch using respective ID.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <div className="card relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 text-center dark:border-gray-700 dark:bg-gray-900/50">
                <div className="mb-5">
                  <img
                    src="/img/setting.svg"
                    className="w-10 mx-auto"
                    alt="setting_icon"
                  />
                </div>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  REST API{" "}
                </h1>
                <p className="leading-relaxed">
                  Restful online API, publicly accessible via https get method.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2  p-4">
            <div className="flex relative">
              <div className="card relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 text-center dark:border-gray-700 dark:bg-gray-900/50">
                <div className="mb-5">
                  <img
                    src="/img/json.svg"
                    className="w-10 mx-auto"
                    alt="setting_icon"
                  />
                </div>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  JSON DATA{" "}
                </h1>
                <p className="leading-relaxed">
                  Contain neccessary data required to build testimonials.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2  p-4">
            <div className="flex relative">
              <div className="card relative z-10 w-full border-4 border-gray-200 bg-white px-8 py-10 text-center dark:border-gray-700 dark:bg-gray-900/50">
                <div className="mb-5">
                  <img
                    src="/img/clock.svg"
                    className="w-10 mx-auto"
                    alt="setting_icon"
                  />
                </div>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  24/7 uptime{" "}
                </h1>
                <p className="leading-relaxed">
                  Fast response time in your testing & developement phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
