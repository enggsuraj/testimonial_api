import React from "react";

// TESTIMONIAL SECTION
function Testimonial() {
  // USING PURE JS OR USE REF
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  // MALE AUDIO PAUSE
  const pauseAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.pause();
  };

  const playAudiofemale = () => {
    const audioElfemale = document.getElementsByClassName(
      "audio-element-female"
    )[0];
    audioElfemale.play();
  };

  const pauseAudiofemale = () => {
    const audioElfemale = document.getElementsByClassName(
      "audio-element-female"
    )[0];
    audioElfemale.pause();
  };

  return (
    <section className="body-font text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-2 py-8">
        <h1 className="title-font mb-12 text-center text-3xl font-medium text-gray-900 dark:text-white">
          Testimonials Data Example
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full rounded-lg bg-gray-100 p-8 dark:bg-gray-900/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                We have been using product for last one year, and I have to say
                that it has transformed the way we do business. Communication
                with team and support is brilliant. Thank you for awesome
                service.
              </p>
              <div className="flex flex-col gap-4 border-t border-gray-200/80 pt-6 dark:border-gray-700/80 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <img
                    alt="testimonial"
                    src="/avatar/1.jpg"
                    className="h-12 w-12 shrink-0 rounded-full object-cover object-center"
                  />
                  <div className="min-w-0">
                    <div className="title-font font-medium text-gray-900 dark:text-white">
                      Lance Jarvis
                    </div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      General manager
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                  <button
                    type="button"
                    onClick={playAudio}
                    className="inline-flex rounded-lg border-0 bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    Play
                  </button>
                  <audio className="audio-element">
                    <source src="/audio/1.mp3" />
                  </audio>
                  <button
                    type="button"
                    onClick={pauseAudio}
                    className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                  >
                    Pause
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full rounded-lg bg-gray-100 p-8 dark:bg-gray-900/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                It has changed the way I used the website. Product lets you
                create anything you envision and it does it so easy and
                flawless. I can't imagine not working with the service.
              </p>
              <div className="flex flex-col gap-4 border-t border-gray-200/80 pt-6 dark:border-gray-700/80 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <img
                    alt="testimonial"
                    src="/avatar/2.jpg"
                    className="h-12 w-12 shrink-0 rounded-full object-cover object-center"
                  />
                  <div className="min-w-0">
                    <div className="title-font font-medium text-gray-900 dark:text-white">
                      Juliet Wright
                    </div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Technical writer
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                  <button
                    type="button"
                    onClick={playAudiofemale}
                    className="inline-flex rounded-lg border-0 bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    Play
                  </button>
                  <audio className="audio-element-female">
                    <source src="/audio/2.mp3" />
                  </audio>
                  <button
                    type="button"
                    onClick={pauseAudiofemale}
                    className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                  >
                    Pause
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
