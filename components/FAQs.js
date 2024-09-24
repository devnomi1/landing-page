import React from "react";
import Image from "next/image";
import APP_IMGS from "@/constants/appImages";

function FAQs() {
  return (
    <section className="mt-48 px-6 md:px-8 lg:10  max-w-[1512px] mx-auto flex items-center justify-between">
      <div className="max-w-[554px]">
        <button className="px-5 py-3 border-2 border-black transition uppercase hover:bg-black hover:text-white mb-10">
          FAQS
        </button>
        <h2 className="text-5xl mb-5">Common Questions.</h2>
        <p className="text-lg mb-14 pr-5">
          The online form also provides links to a set of frequently asked
          questions, other information materials related to the financial
          disclosure programme.
        </p>
        <ul className="list-disc space-y-6">
          <li>Shared Cloud Libraries, for a single source of truth</li>
          <li>Prototype previews for user testing and research</li>
          <li>Easy organization with projects</li>
          <li>Free developer handoff, right inside the browser</li>
          <li>Two-factor authentication and SSO</li>
        </ul>
      </div>
      <Image
        src={APP_IMGS.faqsImg}
        alt="FAQs Image"
        className="hidden lg:block"
      />
    </section>
  );
}

export default FAQs;
