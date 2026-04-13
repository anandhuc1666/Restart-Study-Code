import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import { BsSuitClubFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#1C2024] w-full h-[40vh] mt-25 flex font-Nunito">
      <div className="w-137 h-[40vh] text-white flex flex-col gap-4 justify-center">
        <ul className="pl-5">
          <li className="text-[23px] font-bold">001</li>
          <li className="text-[15px] font-semibold">
            Digital Marketing Agency
          </li>
        </ul>
        <ul className="pl-5">
          <li className="text-[20px] font-semibold">
            Built on hard work. Driven by results.
          </li>
          <li className="text-[12px] font-light">
            We help businesses grow through design, development, and digital
            marketing solutions.
          </li>
        </ul>
        <div className="flex items-center gap-1 pl-3 font-semibold text-[20px]">
          <BsSuitDiamondFill className="text-[#397ABF]" />
          <p>Contact Info</p>
        </div>
        <ul className="text-[13px] pl-5">
          <li>Kerala, India</li>
          <li>001digitalmarketingagentcy@email.com</li>
          <li>+91 XXXXX XXXXX</li>
        </ul>
      </div>
      <div className="w-137 h-[40vh] text-white flex justify-between px-3 py-5 relative">
        <ul className="flex flex-col gap-1">
          <div className="flex items-center gap-1 font-semibold text-[20px]">
            <BsSuitClubFill className="text-[#397ABF]" />
            <li className="text-[17px] font-bold">Quick Links</li>
          </div>
          <li className="pl-6 text-[14px] font-semibold">Home</li>
          <li className="pl-6 text-[14px] font-semibold">About Us</li>
          <li className="pl-6 text-[14px] font-semibold">Services</li>
          <li className="pl-6 text-[14px] font-semibold">Projects</li>
          <li className="pl-6 text-[14px] font-semibold">Contact</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <div className="flex items-center gap-1 font-semibold text-[20px]">
            <BsFillSuitSpadeFill className="text-[#397ABF]" />
            <li className="text-[17px] font-bold">Services</li>
          </div>
          <li className="pl-6 text-[14px] font-semibold">Web Design</li>
          <li className="pl-6 text-[14px] font-semibold">Web Development</li>
          <li className="pl-6 text-[14px] font-semibold">Meta Ads</li>
          <li className="pl-6 text-[14px] font-semibold">Google Ads</li>
          <li className="pl-6 text-[14px] font-semibold">Branding</li>
        </ul>
        <p className="absolute bottom-2 text-[12px]">© 2026 001. All Rights Reserved.</p>
      </div>
      <div className="min-w-min h-[40vh] flex items-center justify-center font-Nunito text-white">
        <p>Let’s build something great together.</p>
      </div>
    </div>
  );
}

export default Footer;
