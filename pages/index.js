import Head from "next/head";

import About from "../components/About";
import Coffee from "../components/Coffee";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";
import Message from "../components/Message";
import Response from "../components/Response";
import EntireJSON from "../components/EntireJSON";
import SingleUser from "../components/SingleUser";
import Testimonial from "../components/Testimonial";
import Introduction from "../components/Introduction";
import DifferentJSON from "../components/DifferentJSON";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          testimonialapi - A public list of free user customer testimonials API
        </title>

        {/* SEO */}

        <meta
          name="title"
          content="testimonialapi - A public list of free user customer testimonials API."
        />
        <meta
          name="description"
          content="Get free user/customer testimonials data for testing and prototyping. JSON data with Name, ID, Designation, Message, LoremText, and Rating."
        />
        <meta
          name="keywords"
          content="customer testimonials, user testimonials, testimonial API"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="blogtheorem" />
        <link rel="canonical" href="testimonialapi.toolcarton.com" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/testimonial.svg"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US"></meta>

        <meta
          property="og:url"
          content="https://testimonialapi.toolcarton.com"
        />
        <meta
          property="og:title"
          content="testimonialapi - A public list of free user customer testimonials API."
        />
        <meta
          property="og:description"
          content="Get free user/customer testimonials data for testing and prototyping. JSON data with Name, ID, Designation, Message, LoremText, and Rating."
        />
        <meta
          property="og:image"
          content="https://testimonialapi.toolcarton.com/img/banner.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://testimonialapi.toolcarton.com"
        />
        <meta
          property="twitter:title"
          content="testimonialapi - A public list of free user customer testimonials API."
        />
        <meta
          property="twitter:description"
          content="Get free user/customer testimonials data for testing and prototyping. JSON data with Name, ID, Designation, Message, LoremText, and Rating."
        />
        <meta
          property="twitter:image"
          content="https://testimonialapi.toolcarton.com/img/banner.png"
        />

        {/* GOOGLE ANALYTICS */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WXFE0XNSZQ"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-WXFE0XNSZQ');`,
          }}
        />
      </Head>

      {/*  MAIN CODE PAGE */}

      <Header />
      <div className="md:w-4/6 sm:w-full mx-auto p-4">
        <About />
        <Service />
        <Introduction />
        <Response />
        <SingleUser />
        <DifferentJSON />
        <EntireJSON />
        <Testimonial />
        <Coffee />
      </div>
      <Message />
      <Footer />
    </>
  );
}
