import APP_IMGS from "@/constants/appImages";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="mt-48 px-6 md:px-8 lg:10  max-w-[1512px] mx-auto flex items-center justify-between">
      <Image src={APP_IMGS.aboutImg} alt="About Image" />
      <div className="max-w-[750px]">
        <button className="px-5 py-3 border-2 border-black transition uppercase hover:bg-black hover:text-white mb-10">
          About Us
        </button>
        <h2 className="text-5xl mb-5">
          Faster, friendlier feedback loops make life easier.
        </h2>
        <p className="text-lg mb-14">
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It’s up to you. Stakeholders
          can check out designs in their web browser, test prototypes and leave
          feedback for free.
        </p>
        <ul className="list-disc space-y-6">
          <li>Shared Cloud Libraries, for a single source of truth</li>
          <li>Prototype previews for user testing and research</li>
          <li>Easy organization with projects</li>
          <li>Free developer handoff, right inside the browser</li>
          <li>Two-factor authentication and SSO</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
