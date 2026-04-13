import React from "react";
import sideway_boy from "../../../../photos/sideway.png";
import slicepage_banner from "../../../../photos/slicepage.png";
import standing_boy from "../../../../photos/standing.png";
import { FaArrowUp } from "react-icons/fa";

function Body() {
  const circleone =
    "absolute bg-[#FFFF] w-[15px] h-[15px] rounded-full shadow-black";
  const circle1 =
    "absolute bg-[#FFFF] w-[30px] h-[30px] rounded-full shadow-black";
  const circletwo =
    "absolute bg-[#397ABF] w-[25px] h-[25px] rounded-full shadow-white";
  const circle2 =
    "absolute bg-[#FFFF] w-[46px] h-[46px] rounded-full shadow-black";
  const circlethree =
    "absolute bg-[#397ABF] w-[60px] h-[60px] rounded-full shadow-white";

  return (
    <div className="w-full sm:h-auto p-5 relative mt-15">
      <div className="w-full h-[80vh] flex items-center relative ">
        {/* 👇design section div page */}

        <div
          className={`${circleone} right-60 sm:top-35 shadow-lg sm:animate-bounce`}
        ></div>
        <div
          className={`${circle1} sm:right-100 right-60 sm:bottom-24 shadow-lg sm:animate-bounce`}
        ></div>
        <div
          className={`${circleone} sm:left-14 left-20 top-50 shadow-lg sm:animate-bounce`}
        ></div>
        <div className={`${circletwo} bottom-1/3 left-30 shadow-lg z-10 animate-float`}></div>
        <div className={`${circleone} bottom-1/12 left-2/6 shadow-lg animate-float`}></div>
        <div className={`${circle2} top-1/6 left-1/2 shadow-lg animate-float`}></div>
        <div className={`${circletwo} left-2/4 shadow-lg`}></div>
        <div className={`${circle2} bottom-1/7 left-85 shadow-lg`}></div>
        <div
          className={`${circlethree} bottom-1/10 left-180 shadow-lg animate-float`}
        ></div>
        <div className={`${circlethree} bottom-1/4 right-5 shadow-lg animate-float`}></div>

        {/* under dive is a imge and contentent of the center body of the html page 👦 */}
        <div className="w-full h-[50vh] flex items-center sm:justify-evenly justify-center">
          <div className="flex flex-col gap-5">
            <div className="text-[15px] relative flex items-center w-55 h-11.5  text-[#1C2024]">
              <img src={sideway_boy} alt="" className="w-4 absolute right-5" />
              <p>Your Success Is Our Priority</p>
              <div className="absolute bottom-0 right-0 flex gap-0.5 ">
                <div className=" w-0.75 h-0.75 bg-[#1C2024]"></div>
                <div className=" w-0.75 h-0.75 bg-[#1C2024]"></div>
                <div className=" w-0.75 h-0.75 bg-[#1C2024]"></div>
                <div className="w-20 h-0.75 bg-[#1C2024] rounded-r-2xl"></div>
              </div>
            </div>

            {/* under main content bold text */}
            <p className="text-6xl leading-23 font-bold">
              Boosting Progress <br /> 001{" "}
              <span className="inline-block px-6 rounded-full font-medium text-white bg-[#397ABF] -rotate-12 shadow-lg">
                Digital
              </span>{" "}
              <br /> <span className="sm:ml-16">Marketing</span> Agency
            </p>
          </div>

          {/* image add in half slice paper */}
          <div className="sm:flex hidden">
            <img
              src={slicepage_banner}
              alt=""
              className="w-125 rounded-tr-[200px] rounded-br-3xl"
            />
          </div>
        </div>
      </div>

      {/* detail of our sub body */}
      <div className="w-full h-auto flex gap-20 sm:items-end items-center justify-center">
        <div className="sm:flex flex-col items-center sm:gap-5 sm:mb-25 justify-end bg-ambe-50 absolute sm:relative z-10 left-16 sm:left-0">
          <p className="inline-block sm:rotate-270 text-[12px]">
            Next-level digital innovation from the origin
          </p>
          <div className="w-35 h-16 flex  bg-white sm:rotate-270 ml-45 rounded-full text-[10px] items-center justify-center gap-11 shadow-lg relative">
            <div className="w-14 h-14 bg-[#397ABF] rounded-full rotate-90 flex items-center justify-center text-white text-4xl animate-bounce absolute left-0 hover:scale-110">
              <FaArrowUp />
            </div>
            <p className="absolute right-3">WhatsApp</p>
          </div>
        </div>

        {/* right side boy and team details */}
        <div className="sm:h-160 h-240  min-w-fit flex items-end justify-center sm:px-0 px-10 relative">
          <img
            src={standing_boy}
            alt=""
            className="sm:w-35 w-56 sm:top-10 sm:left-10 -top-20 sm:animation-pops absolute"
          />
          <div className=" sm:w-200 w-full sm:text-[16px] text-[20px] sm:h-80 h-auto gap-10 sm:gap-0 flex flex-col justify-between backdrop-blur-xs bg-white/30 border-b border-white/20 shadow-lg sm:px-5 px-15 pb-5 z-10 rounded-4xl animation-side">
            <div className="w-full flex items-center justify-center">
              <button className="px-5 py-3 rounded-full text-2xl font-bold bg-[#F0F0F3] shadow-lg">
                Our Team
              </button>
            </div>

            <div className="">
              <p>
                {" "}
                Teamwork and hard work are the foundation of success in digital
                marketing. In a fast-changing digital world, no single person
                can handle all aspects of marketing effectively. It requires a
                team of skilled individuals such as content creators, SEO
                specialists, designers, developers, and analysts working
                together toward a common goal.
              </p>
              <br />
              <p>
                Hard work is equally important in digital marketing. Success
                does not come overnight. It takes continuous effort, testing,
                and learning. Marketers must regularly analyze data, track
                performance, and improve strategies. Running ads, managing
                social media, and creating quality content require dedication
                and consistency. Even small improvements can lead to significant
                results over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
