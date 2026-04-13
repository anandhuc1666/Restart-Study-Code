import React, { useState } from "react";
import banner_han from "../../../photos/contact han.png";

function Nav() {
  const [About, setAbout] = useState(false);
  const [Services, setService] = useState(false);
  const [team, setTeam] = useState(false);
  const [policy, setPolicy] = useState(false);

  return (
    <div className="w-[85%] h-20 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg px-5 rounded-4xl sm:flex hidden items-center justify-between font-bold text-[18px] fixed z-30 top-10">
      <div className="w-18 h-18 rounded-full bg-[#D9D9D9]"></div>
      <div className="flex gap-20 items-center">
        <ul className="flex gap-7">
          <li
            className={`hover:text-[#397ABF] ${About === true ? `text-[#397ABF] border-b-3 border-[#397ABF]` : `text-black`}`}
            onClick={() => {
              (setAbout(!About),
                setService(false),
                setTeam(false),
                setPolicy(false));
            }}
          >
            About Us
          </li>
          <li
            className={`hover:text-[#397ABF] ${Services === true ? `text-[#397ABF] border-b-3 border-[#397ABF]` : `text-black`}`}
            onClick={() => {
              (setAbout(false),
                setService(!Services),
                setTeam(false),
                setPolicy(false));
            }}
          >
            Services{" "}
          </li>
        </ul>
        <ul className="flex gap-7 items-center">
          <li
            className={`hover:text-[#397ABF] ${team === true ? `text-[#397ABF] border-b-3 border-[#397ABF]` : `text-black`}`}
            onClick={() => {
              (setAbout(false),
                setService(false),
                setTeam(!team),
                setPolicy(false));
            }}
          >
            Team
          </li>
          <li
            className={`hover:text-[#397ABF] ${policy === true ? `text-[#397ABF] border-b-3 border-[#397ABF]` : `text-black`}`}
            onClick={() => {
              (setAbout(false),
                setService(false),
                setTeam(false),
                setPolicy(!policy));
            }}
          >
            Policy
          </li>
          <div className="relative h-auto w-35 flex items-center justify-center">
            <img
              src={banner_han}
              alt="banner_han"
              className="w-25 absolute drop-shadow drop-shadow-[#FFFF]"
            />
            <button className="p-2 bg-white/40  backdrop-blur-md border border-[#60646C] rounded-full text-[#397ABF] hover:text-[#60646C] hover:bg-white/60 hover:border-[#397ABF] z-10">
              Contact
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
