import APP_IMGS from "@/constants/appImages";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="mt-28 px-6 md:px-8 lg:10  max-w-[1512px] mx-auto flex items-center justify-between">
      <div className="max-w-[574px]">
        <h1 className="text-5xl leading-[70px] mb-5">
          Always Track & Analyze Your Business Statistics To Succeed.
        </h1>
        <p className="text-lg">
          A better way to manage your sales, team, clients & marketing — on a
          single platform. Powerful, affordable & easy.
        </p>
        <div className="mt-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-4 pl-5 w-full text-lg text-black"
            />
            <button className="absolute right-0 top-0 ml-4 px-5 py-4 bg-black text-white border-2 border-black transition hover:bg-white hover:text-black">
              Get Started
            </button>
          </div>
          <div className="flex space-x-6 mt-20">
            <Image src={APP_IMGS.visaIcon} alt="Visa Icon" />
            <Image src={APP_IMGS.mastercardIcon} alt="Mastercard Icon" />
            <Image src={APP_IMGS.paypallIcon} alt="Paypall Icon" />
          </div>
        </div>
      </div>
      <Image
        src={APP_IMGS.heroImg}
        alt="Hero Image"
        className="hidden lg:block"
      />
    </section>
  );
}

export default Hero;
