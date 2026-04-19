import Head from "next/head";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";

export default function StatusPage() {
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () => setNow(new Date().toISOString());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Head>
        <title>Status — testimonialapi</title>
        <meta
          name="description"
          content="Operational status for the testimonial API service."
        />
      </Head>

      <Header />
      <main className="mx-auto max-w-3xl p-4 md:w-4/6">
        <h1 className="title-font text-3xl font-semibold text-gray-900 dark:text-white">
          Status
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Public mock API — no authentication required.
        </p>

        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/60 dark:bg-emerald-950/30">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
            <span className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
              All systems operational
            </span>
          </div>
          <p className="mt-3 text-sm text-emerald-900/90 dark:text-emerald-100/90">
            The static dataset and read-only routes are served from the Next.js app.
            If you see issues, retry — there is no authenticated control plane for this
            demo.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900/40">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            Last checked
          </h2>
          <p className="mt-2 font-mono text-sm text-gray-700 dark:text-gray-300">
            {now || "…"}
          </p>
        </div>
      </main>
      <Message />
      <Footer />
    </>
  );
}
