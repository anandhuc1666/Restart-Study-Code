import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import { BsSuitClubFill } from "react-icons/bs";

function Footer() {
  return (
   <div className="bg-[#1C2024] w-full text-white font-Nunito mt-20">
  <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    
    {/* LEFT SECTION */}
    <div className="flex flex-col gap-4">
      <ul>
        <li className="text-2xl font-bold">001</li>
        <li className="text-sm font-semibold">
          Digital Marketing Agency
        </li>
      </ul>

      <ul>
        <li className="text-lg font-semibold">
          Built on hard work. Driven by results.
        </li>
        <li className="text-xs font-light">
          We help businesses grow through design, development, and digital
          marketing solutions.
        </li>
      </ul>

      <div className="flex items-center gap-2 font-semibold text-lg">
        <BsSuitDiamondFill className="text-[#397ABF]" />
        <p>Contact Info</p>
      </div>

      <ul className="text-sm">
        <li>Kerala, India</li>
        <li>001digitalmarketingagentcy@email.com</li>
        <li>+91 XXXXX XXXXX</li>
      </ul>
    </div>

    {/* MIDDLE SECTION */}
    <div className="flex flex-col sm:flex-row justify-between gap-10">
      
      {/* Quick Links */}
      <ul className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <BsSuitClubFill className="text-[#397ABF]" />
          <li className="font-bold">Quick Links</li>
        </div>
        <li className="pl-5 text-sm">Home</li>
        <li className="pl-5 text-sm">About Us</li>
        <li className="pl-5 text-sm">Services</li>
        <li className="pl-5 text-sm">Projects</li>
        <li className="pl-5 text-sm">Contact</li>
      </ul>

      {/* Services */}
      <ul className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <BsFillSuitSpadeFill className="text-[#397ABF]" />
          <li className="font-bold">Services</li>
        </div>
        <li className="pl-5 text-sm">Web Design</li>
        <li className="pl-5 text-sm">Web Development</li>
        <li className="pl-5 text-sm">Meta Ads</li>
        <li className="pl-5 text-sm">Google Ads</li>
        <li className="pl-5 text-sm">Branding</li>
      </ul>
    </div>

    {/* RIGHT SECTION */}
    <div className="flex items-center justify-center text-center">
      <p className="text-lg">
        Let’s build something great together.
      </p>
    </div>

  </div>

  {/* FOOTER BOTTOM */}
  <div className="text-center text-xs pb-5">
    © 2026 001. All Rights Reserved.
  </div>
</div>
  );
}

export default Footer;
