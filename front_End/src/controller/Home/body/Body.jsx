import React from "react";
import sideway_boy from "../../../../photos/sideway.png";
import slicepage_banner from "../../../../photos/slicepage.png";
// import standing_boy from "../../../../photos/standing.png";
import { FaArrowUp } from "react-icons/fa";
import Generate_AI_video from "../../../../photos/Video Project 4.mp4"

function Body() {
  const circleone =
    "absolute bg-[#FFFF] sm:w-[15px] sm:h-[15px] w-[10px] h-[10px] rounded-full shadow-black";
  const circle1 =
    "absolute bg-[#FFFF] sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] rounded-full shadow-black";
  const circletwo =
    "absolute bg-[#397ABF] sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] rounded-full shadow-white";
  const circle2 =
    "absolute bg-[#FFFF] sm:w-[46px] sm:h-[46px] w-[41px] [41px] rounded-full shadow-black";
  const circlethree =
    "absolute bg-[#397ABF] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] rounded-full shadow-white";

  return (
    <div className="w-full h-auto relative sm:mt-15 mt-0">
      <div className="w-full sm:h-[80vh] flex items-center relative">
        {/* 👇design section div page */}

        <div
          className={`${circleone} right-60 sm:top-35 shadow-2xl animate-bounce sm:flex`}
        ></div>
        <div
          className={`${circle1} sm:right-100 right-80 sm:bottom-24 bottom-10 shadow-2xl sm:animate-bounce sm:flex`}
        ></div>
        <div
          className={`${circleone} sm:left-14 left-20 sm:top-50 top-20 shadow-2xl sm:animate-bounce sm:flex`}
        ></div>
        <div
          className={`${circletwo} sm:bottom-1/3 left-30 bottom-0 shadow-2xl z-10 animate-float sm:flex`}
        ></div>
        <div
          className={`${circleone} sm:bottom-1/12 -bottom-30 sm:left-2/6 left-20 z-10 shadow-2xl animate-float sm:flex`}
        ></div>
        <div
          className={`${circle2} top-1/6 left-1/2 shadow-2xl animate-float sm:flex`}
        ></div>
        <div className={`${circletwo} sm:left-2/4 right-5 shadow-2xl sm:flex`}></div>
        <div className={`${circle2} bottom-1/7 sm:left-85 left-70 shadow-2xl z-10 sm:flex`}></div>
        <div
          className={`${circlethree} bottom-1/10 left-180 shadow-2xl animate-float hidden sm:flex z-10`}
        ></div>
        <div
          className={`${circlethree} -bottom-60 right-15 shadow-2xl animate-float z-10 sm:flex`}
        ></div>

        {/* under dive is a imge and contentent of the center body of the html page 👦 */}
        <div className="w-full h-[50vh] flex items-center sm:justify-evenly justify-center">
          <div className="flex flex-col gap-5">
            <div className="text-[15px] relative flex items-center w-55 h-11.5  text-[#56585a]">
              <img src={sideway_boy} alt="" className="w-4 absolute right-5" />
              <p>Your Success Is Our Priority</p>
              <div className="absolute bottom-0 right-0 flex gap-0.5 ">
                <div className=" w-0.75 h-0.75 bg-[#397ABF]"></div>
                <div className=" w-0.75 h-0.75 bg-[#397ABF]"></div>
                <div className=" w-0.75 h-0.75 bg-[#397ABF]"></div>
                <div className="w-20 h-0.75 bg-[#397ABF] rounded-r-2xl"></div>
              </div>
            </div>

            {/* under main content bold text */}
            <p className="sm:text-6xl text-4xl sm:leading-23 leading-14 sm:font-bold font-extrabold">
              Boosting Progress <br /> 001{" "}
              <span className="inline-block px-5 rounded-full font-extrabold text-[#F0F0F3] bg-[#397ABF] -rotate-12 shadow-lg text-[19px]">
                Technologies
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
      <div className="w-full h-auto flex gap-20 sm:items-end items-center justify-center relative">
        <div className="sm:flex flex-col items-center  sm:gap-5 sm:mb-25 sm:justify-end bg-ambe-50 absolute top-0 left-0 sm:relative z-10 hidden">
          <p className="inline-block sm:rotate-270 text-[12px]">
            Next-level digital innovation from the origin
          </p>
          <div className="w-35 h-16 flex  bg-white sm:rotate-270 ml-45 rounded-full text-[10px] items-center justify-center gap-11 shadow-lg relative">
            <div className="w-14 h-14 bg-[#397ABF] rounded-full rotate-90 flex items-center justify-center  text-[#F0F0F3] text-4xl animate-bounce absolute left-0 hover:scale-110">
              <FaArrowUp />
            </div>
            <p className="absolute right-3">WhatsApp</p>
          </div>
        </div>

        {/* right side boy and team details */}
        <div className="sm:h-160 h-auto min-w-fit flex items-end justify-center sm:px-0 px-10 relative">
          {/* <img
            src={standing_boy}
            alt=""
            className="sm:w-35 w-40 sm:top-10 sm:left-10 -top-20 absolute"
          /> */}
          <video src={Generate_AI_video} autoPlay loop muted className="sm:w-60 w-60  sm:left-10 -top-15 absolute"></video>
          <div className=" sm:w-200 w-full sm:mt-0 mt-100 sm:text-[16px] text-[15px] p-5 sm:h-80 h-auto gap-10 sm:gap-0 flex flex-col justify-between backdrop-blur-xs bg-white/30 border-b border-white/20 shadow-lg sm:px-5 sm:pb-5 z-10 rounded-4xl sm:animation-side">
            <div className="w-full flex items-center justify-center">
              <button className="px-5 py-3 rounded-full sm:text-2xl font-bold bg-[#F0F0F3] text-[#1C2024]  shadow-lg">
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
