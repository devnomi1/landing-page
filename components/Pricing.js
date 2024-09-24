import React from "react";
import Image from "next/image";
import APP_IMGS from "@/constants/appImages";

function Pricing() {
  return (
    <section className="mt-48 max-w-[1512px] mx-auto px-6 md:px-8 lg:10">
      <div className="w-full flex items-center justify-between mb-14">
        <Image src={APP_IMGS.pricingImg} alt="Pricing Image" />
        <div className="max-w-[740px] text-right">
          <button className="px-5 py-3 border-2 border-black transition uppercase hover:bg-black hover:text-white mb-10">
            Pricing
          </button>
          <h2 className="text-5xl mb-5">
            Select a membership level the right price for you.
          </h2>
          <p className="text-lg">
            Prices listed in USD. Taxes may apply. By using program you agree to
            our terms and policies.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-10 border-2 border-black">
          <div className="mb-14">
            <p>A pay-once license, just for you</p>
          </div>
          <ul>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">The Mac app — yours to keep</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">Beautiful White_level</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">One year of saving to Cloud</span>
            </li>
          </ul>
          <button
            type="button"
            className="w-full py-3 px-9 bg-black text-white text-lg"
          >
            Join
          </button>
        </div>
        <div className="p-10 border-2 border-black">
          <div className="mb-14">
            <p>A pay-once license, just for you</p>
          </div>
          <ul>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">The Mac app — yours to keep</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">Beautiful White_level</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">One year of saving to Cloud</span>
            </li>
          </ul>
          <button
            type="button"
            className="w-full py-3 px-9 bg-black text-white text-lg"
          >
            Join
          </button>
        </div>
        <div className="p-10 border-2 border-black">
          <div className="mb-14">
            <p>A pay-once license, just for you</p>
          </div>
          <ul>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">The Mac app — yours to keep</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">Beautiful White_level</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">One year of saving to Cloud</span>
            </li>
          </ul>
          <button
            type="button"
            className="w-full py-3 px-9 bg-black text-white text-lg"
          >
            Join
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
