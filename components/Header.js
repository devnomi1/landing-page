import Image from "next/image";
import React from "react";
import APP_IMGS from "@/constants/appImages";

function Header() {
  const mobile = (
    <div className="py-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        
          <Image src={APP_IMGS.logoIcon} alt="Logo" className="flex-1" />
          <Image src={APP_IMGS.menuIcon} alt="Menu Icon" className=" block md:hidden" />
       
        <ul className="md:flex items-center space-x-10 hidden">
          <li>About Us</li>
          <li>How It work</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="md:flex items-center justify-between hidden">
        <button
          className="px-5 py-3 border-2 border-black transition hover:bg-black hover:text-white
        "
        >
          Login
        </button>
        <button className=" ml-4 px-5 py-3 bg-black text-white border-2 border-black transition hover:bg-white hover:text-black">
          Sign Up
        </button>
      </div>
    </div>
  );
  return (
    <div className="max-w-[1512px] mx-auto px-6 md:px-8 lg:10">{mobile}</div>
  );
}

export default Header;
