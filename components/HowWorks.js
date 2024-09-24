import React from "react";
import Image from "next/image";
import APP_IMGS from "@/constants/appImages";

function HowWorks() {
  return (
    <section className="mt-48 px-6 md:px-8 lg:10  max-w-[1512px] mx-auto flex justify-between">
      <div className="max-w-[750px]">
        <button className="px-5 py-3 border-2 border-black transition uppercase hover:bg-black hover:text-white mb-10">
          HOW IT WORKS
        </button>
        <h2 className="text-5xl mb-5">
          Building the best space for collaboration.
        </h2>
        <p className="text-lg mb-14">
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It’s up to you. Stakeholders
          can check out designs in their web browser, test prototypes and leave
          feedback for free.
        </p>
        <ul className="space-y-12">
          <li className="flex items-center">
            <Image src={APP_IMGS.icon1} />
            <div className="ml-5">
              <h3 className="text-2xl mb-4">Shared Cloud Libraries</h3>
              <span>
                Navigate to the Your work panel in the left sidebar. Select the
                library you want to share. Select the Share icon in the upper
                right to share the library.
              </span>
            </div>
          </li>
          <li className="flex items-center">
            <Image src={APP_IMGS.icon2} />
            <div className="ml-5">
              <h3  className="text-2xl mb-4">Free developer handoff, right inside</h3>
              <span>
                Cloud Inspector makes it easy for developers to get the
                information they need to turn pixels into code — all in the
                browser and, most importantly, for free.
              </span>
            </div>
          </li>
          <li className="flex items-center">
            <Image src={APP_IMGS.icon3} />
            <div className="ml-5">
              <h3  className="text-2xl mb-4">Real-time collaborative editing</h3>
              <span>
                Room Service helps you build real-time collaborative features.
                Add real-time data sync! Let users edit the same data at the
                same time.
              </span>
            </div>
          </li>
          <li className="flex items-center">
            <Image src={APP_IMGS.icon4} />
            <div className="ml-5">
              <h3  className="text-2xl mb-4">Integrations with the Cloud API</h3>
              <span>
                Unlocking that value requires an iPaaS that delivers the
                transformative power of APIs and integration.
              </span>
            </div>
          </li>
        </ul>
      </div>
      <Image src={APP_IMGS.howItWorkImg} alt="About Image"/>
    </section>
  );
}

export default HowWorks;
