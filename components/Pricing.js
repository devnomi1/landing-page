import React from "react";
import Image from "next/image";
import APP_IMGS from "@/constants/appImages";

function Pricing() {
  return (
    <section className="mt-48 max-w-[1512px] mx-auto px-6 md:px-8 lg:10">
      <div className="w-full flex flex-col-reverse  lg:flex-row items-center justify-between mb-14">
        <Image src={APP_IMGS.pricingImg} alt="Pricing Image" />
        <div className="max-w-[740px] lg:text-right">
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
        <div className="p-10 border-2 border-black flex flex-col justify-between">
          <div>
            <div className="mb-14">
              <div className="mb-5">
                $ <span className="text-6xl">49</span> per month
              </div>
              <p>A pay-once license, just for you</p>
            </div>
            <ul className="space-y-6">
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
          </div>
          <button
            type="button"
            className="w-full py-3 px-9 bg-black text-white text-lg"
          >
            Join
          </button>
        </div>
        <div className="p-10 border-2 border-black bg-black text-white">
          <div className="mb-14">
            <div className="mb-5">
              $ <span className="text-6xl">99</span> per month
            </div>
            <p>A pay-once license, just for you</p>
          </div>
          <ul className="space-y-6">
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">The Mac app — yours to keep</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">One year of Mac app updates</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">One year of saving to Cloud</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">A personal Cloud workspace</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">All tools, just for you </span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-12 w-full py-3 px-9 bg-white text-black text-lg"
          >
            Join
          </button>
        </div>
        <div className="p-10 border-2 border-black">
          <div className="mb-14">
            <div className="mb-5">
              $ <span className="text-6xl font-bold">299</span> per month
            </div>
            <p>A pay-once license, just for you</p>
          </div>
          <ul className="space-y-6">
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">Access to the Mac app for all</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">A shared Cloud workspace</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">Free Cloud access for unlim</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">Easy team management</span>
            </li>
            <li className="flex items-center">
              <Image src={APP_IMGS.icon} alt="Icon" />
              <span className="ml-3">No license key required</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-12 w-full py-3 px-9 bg-black text-white text-lg"
          >
            Join
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
