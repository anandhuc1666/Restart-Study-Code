import sideway_boy from "../../../../photos/sideway.png";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import digital from "../../../../photos/Digital.svg";
import social from "../../../../photos/Social.svg";
import graphic from "../../../../photos/Graphic.svg";
import jumping_boy from "../../../../photos/jumping.png";
import { MdVerified } from "react-icons/md";
import { RiDiamondFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { HiMiniHandThumbDown } from "react-icons/hi2";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import hanging_boy from "../../../../photos/hunging_boy.png";
import { FaWhatsappSquare } from "react-icons/fa";

function SubBody() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20 sm:mt-0 mt-35">
      <div className="flex flex-col items-center justify-center gap-10 relative p-10">
        <img
          src={sideway_boy}
          alt=""
          className="w-10  absolute top-0 right-8 flex sm:hidden"
        />
        <p className="sm:font-bold font-extrabold sm:text-4xl text-2xl">
          Our Value Proposition
        </p>
        <p className="max-w-180 text-justify text-[16px] text-[#56585a] sm:animation-block">
          We are committed to delivering the highest quality service, built on
          trust, dedication, and results. When you choose to work with us, you
          gain a team that stands by your business every day focused on helping
          you grow, succeed, and lead in your industry.
        </p>
      </div>
      <div className="flex gap-5 relative">
        <img
          src={sideway_boy}
          alt=""
          className="w-60 absolute -left-40 -top-20 shadow-black drop-shadow-2xl sm:animation-pops sm:flex hidden"
        />

        <div className="sm:w-230 w-85 sm:p-0 p-10 sm:mt-20 h-auto backdrop-blur-xs bg-white/30 border-b border-white/20 shadow-lg rounded-3xl relative  gap-10 flex flex-col justify-between">
          <div className="w-full flex sm:justify-between justify-center">
            <button className="p-3 text-[18px] cursor-pointer flex items-center justify-center text-[#1C2024]  bg-[#F0F0F3] shadow-lg rounded-full">
              Our Service
            </button>
            <div className="w-25 h-10 rounded-full bg-[#F0F0F3] border border-[#1C2024] sm:flex hidden items-center">
              <div className="w-10 h-10 rounded-full bg-[#397ABF] flex items-center justify-center text-white">
                <FaArrowUp className="rotate-60" />
              </div>
              <p className="text-[15px] ml-3 text-[#56585a]">more</p>
            </div>
          </div>

          {/*👇 data add on the what are the feachers are providing and also the data should be fach on the (or) map on this section */}
          <div className="flex sm:flex-row flex-col sm:gap-5 gap-10 sm:overflow-x-auto items-center sm:overflow-y-hidden scrollbar-hide sm:p-4 px-20">
            {/* looping data flow under data flow  */}
            <div
              className="min-w-55 sm:h-80 h-60 bg-[#F0F0F3]  rounded-2xl border border-[#1C2024] 
              p-5 flex flex-col gap-1 justify-between hover:scale-90 transition duration-500 ease-in-out 
              hover:text-[#60646C] hover:bg-white/60 hover:border-[#397ABF]"
            >
              <div className="sm:min-w-55 w-w-50 sm:h-20 flex items-center justify-center">
                <img
                  src={digital}
                  alt=""
                  className="sm:h-20 h-20 object-cover"
                />
              </div>
              <div className="w-full flex items-center justify-center text-center flex-col text-[#56585a]">
                <p> Digital Ads Management</p>
                <br />
                <p className="text-[15px] text-[#397ABF]">
                  We are eager to provide you with the best service
                </p>
              </div>
              <button className="px-6 py-2 rounded-2xl text-white bg-[#397ABF] hover:text-[#60646C] hover:bg-[#F0F0F3] hover:border-[#397ABF] hover:border">
                View
              </button>
            </div>
            <div className="min-w-55 sm:h-80 h-60  bg-[#F0F0F3] rounded-2xl border border-[#1C2024] p-3 flex flex-col gap-1 justify-between hover:scale-90 transition duration-500 ease-in-out hover:text-[#60646C] hover:bg-white/60 hover:border-[#397ABF]">
              <div className="sm:min-w-55 w-w-50 sm:h-20 flex items-center justify-center">
                <img
                  src={graphic}
                  alt=""
                  className="sm:h-20 h-28 object-cover"
                />
              </div>
              <div className="w-full flex items-center justify-center text-center flex-col text-[#56585a]">
                <p> Graphic Design</p>
                <br />
                <p className="text-[15px] text-[#397ABF]">
                  We are eager to provide you with the best service
                </p>
              </div>
              <button className="px-6 py-2 rounded-2xl text-white bg-[#397ABF] hover:text-[#60646C] hover:bg-[#F0F0F3] hover:border-[#397ABF] hover:border">
                View
              </button>
            </div>
            <div className="min-w-55 sm:h-80 h-60  bg-[#F0F0F3] rounded-2xl border border-[#1C2024] p-5 flex flex-col gap-1 justify-between hover:scale-90 transition duration-500 ease-in-out hover:text-[#60646C] hover:bg-white/60 hover:border-[#397ABF]">
              <div className="sm:min-w-55 w-w-50 sm:h-20 flex items-center justify-center">
                <img
                  src={social}
                  alt=""
                  className="sm:h-20 h-20 object-cover"
                />
              </div>
              {/* <img src={social} alt="" className="w-70" /> */}
              <div className="w-full flex items-center justify-center text-center flex-col text-[#56585a]">
                <p>Social Media Management</p>
                <br />
                <p className="text-[15px] text-[#397ABF]">
                  We are eager to provide you with the best service
                </p>
              </div>
              <button className="px-6 py-2 rounded-2xl text-white bg-[#397ABF] hover:text-[#60646C] hover:bg-[#F0F0F3] hover:border-[#397ABF] hover:border">
                View
              </button>
            </div>
            <div className="min-w-55 sm:h-80 h-60 bg-[#F0F0F3] rounded-2xl border border-[#1C2024] p-5 flex flex-col gap-1 justify-between hover:scale-90 transition duration-500 ease-in-out hover:text-[#60646C] hover:bg-white/60 hover:border-[#397ABF]">
              <div className="sm:min-w-55 w-w-50 sm:h-20 flex items-center justify-center">
                <img
                  src={digital}
                  alt=""
                  className="sm:h-20 h-20 object-cover"
                />
              </div>
              <div className="w-full flex items-center justify-center text-center flex-col text-[#56585a]">
                <p> Digital Ads Management</p>
                <br />
                <p className="text-[15px] text-[#397ABF]">
                  We are eager to provide you with the best service
                </p>
              </div>
              <button className="px-6 py-2 rounded-2xl text-white bg-[#397ABF] hover:text-[#60646C] hover:bg-[#F0F0F3] hover:border-[#397ABF] hover:border">
                View
              </button>
            </div>
          </div>
        </div>
        <div className="w-40 h-130 sm:flex hidden items-center justify-center pr-6">
          <div className="flex items-center ">
            {/* Vertical Text */}
            <p className="rotate-270 whitespace-nowrap text-[15px] font-medium ml-15">
              We solve your first question
            </p>

            {/* Icon */}
            <div className="w-15 h-15 rounded-full flex items-center justify-center text-5xl bg-white shadow-md relative">
              <div className="w-3 h-3 bg-green-500 rounded-full absolute right-0 top-0"></div>
              <div className="w-3.5 h-3.5 bg-green-500 rounded-full absolute right-0 top-0 animate-ping"></div>
              <MdOutlineSupportAgent />
            </div>
          </div>
        </div>
      </div>

      {/* ............................................................next section start.................................................... */}

      <div className="w-full h-auto p-5 flex flex-col sm:gap-25 gap-30 relative">
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="text-center sm:text-4xl text-2xl font-bold">
            Discover the perfect solution tailored to your business needs.
          </p>
          <div className="flex sm:gap-16 gap-5">
            <div className="flex items-center justify-center gap-4 text-[18px] border px-3 py-1.5 rounded-full">
              <p>Meta AI</p>
              <MdVerified className="text-[#397ABF] text-[20px]" />
            </div>
            <div className="flex items-center justify-center gap-4 text-[18px] border px-3 py-1.5 rounded-full">
              <p>Premium</p>
              <RiDiamondFill className="text-[#397ABF] text-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-full sm:text-[16px] text-[8px] sm:flex">
          <div className="sm:w-260 sm:h-150 h-100  gap-10 flex flex-col ">
            <div className="w-full h-50 flex items-center pl-30 justify-center gap-5 sm:pl-60">
              <div className="sm:w-20 w-10 sm:h-43 h-25 bg-white rounded-full flex items-end">
                <div className="sm:w-20 w-10 sm:h-20 h-10 bg-[#397ABF] rounded-full"></div>
              </div>
              <p>Web Designer & Developer</p>
            </div>

            <div className="w-full h-50 flex items-center justify-evenly">
              <div className="flex items-center sm:gap-5">
                <div className="sm:w-20 w-10 sm:h-43 h-25 bg-white rounded-full flex items-end">
                  <div className="sm:w-20 w-10 sm:h-20 h-10 bg-[#397ABF] rounded-full"></div>
                </div>
                <p>Marketing Head -------</p>
              </div>
              <div className="sm:w-50 sm:h-50 w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <div className="sm:w-35 sm:h-35 w-15 h-15 sm:border-4 border-2 rounded-full border-[#397ABF] flex items-center justify-center text-[6px]">
                  Our specialist <br />
                  Team Members
                </div>
              </div>

              <div className="flex items-center sm:gap-5">
                <p>------- SEO Specialist</p>
                <div className="sm:w-20 w-10 sm:h-43 h-25 bg-white rounded-full flex items-end">
                  <div className="sm:w-20 w-10 sm:h-20 h-10 bg-[#397ABF] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-full h-50 flex items-center justify-center gap-5 sm:pr-45 pr-27">
              <p>Developer & Accountant</p>
              <div className="sm:w-20 w-10 sm:h-43 h-25 bg-white rounded-full flex items-end">
                <div className="sm:w-20 w-10 sm:h-20 h-10 bg-[#397ABF] rounded-full"></div>
              </div>
            </div>
          </div>
          <img
            src={jumping_boy}
            alt=""
            className="w-100 absolute right-6 top-28 sm:flex hidden"
          />
        </div>
        <div className="w-full text-justify flex justify-end z-10 sm:text-2xl text-[10px]">
          <p>
            “A truly valuable experience working with the team their <br />{" "}
            professionalism and quality delivery exceeded our expectations”
          </p>
        </div>
      </div>

      {/* ...............................................................Review section data fron the user side....................................... */}

      <div className="w-full  h-auto p-5 flex flex-col gap-5 sm:mt-20 mt-10 relative">
        <img
          src={hanging_boy}
          alt=""
          className="w-50 absolute ml-100 -top-18 hidden sm:flex"
        />
        <div className="w-full backdrop-blur-xs bg-white/30 border-b border-white/20 shadow-lg rounded-2xl sm:h-90 flex flex-col gap-3 relative ">
          <div className="w-full p-5">
            <button className="px-5 py-1.5 bg-[#F0F0F3] rounded-full shadow-lg text-[#56585a]">
              Review
            </button>
          </div>
          <div className=" flex gap-10 overflow-x-auto overflow-y-hidden scrollbar-hide p-4">
            {/* scrolling in the top system under the container */}

            <div className="sm:min-w-70 sm:h-60 bg-[#F0F0F3] rounded-2xl border border-[#3a3c3d]">
              <div className="sm:w-70 h-20">
                <div className="w-full h-15 p-2">
                  {/* user profile section */}
                  <div className="w-15 h-15 rounded-full bg-[#397ABF]"></div>
                </div>

                {/* customer review section */}
                <div className="w-full h-5 px-3 text-[10px] flex items-center justify-end gap-1.5">
                  <div className="flex gap-0.5">
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-[#FFCC00]" />
                    <FaStar className="text-white" />
                  </div>
                  <div className="w-8 h-4 bg-[#397ABF] rounded-[5px] text-white text-[10px] flex items-center justify-center">
                    3.5
                  </div>
                </div>
              </div>
              <div className="sm:w-70 w-60 sm:h-40 h-30 bg-[#3a3c3d] rounded-bl-2xl rounded-br-2xl flex flex-col p-3 text-white font-light text-[12px] text-justify">
                <div className="w-full h-40 overflow-scroll scrollbar-hide">
                  <p>
                    The demo was delivered professionally with great attention
                    to detail. The team understood our requirements well and
                    exceeded expectations. Looking forward to working together
                    again
                  </p>
                </div>

                {/* user like and more review like and dislike */}
                <div className="w-full h-6 flex text-[20px] gap-3 relative">
                  <HiMiniHandThumbUp

                  // className={`${count == 0 ? `text-white` : `text-[#397ABF] ${anime == false ? `animate-none` : `animate-bounce`}`}`}
                  />
                  <HiMiniHandThumbDown
                  // onClick={handleChangeThumbdoune}
                  // className={ `text-white`  `opacity-60`}
                  />
                  <div
                    className={`w-3 h-3 absolute top-4.5 rounded-full text-[13px] flex items-center justify-center text-white`}
                  >
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-90 flex mt-10">
          <div className="w-275 h-90 sm:border rounded-4xl flex items-center justify-between px-5 ">
            <div className="sm:w-162 w-full h-90 flex items-center sm:justify-start justify-center py-5 flex-col text-center gap-5 relative">
              <p className="sm:text-4xl text-3xl">
                Want to talk to the <br />
                experts?
              </p>
              <p className="sm:text-[17px] text-[15px] font-medium">
                We’d love to talk about your business. Are you ready to get
                started?
              </p>
              <FaWhatsappSquare className="text-7xl text-green-600" />
              <div className="">
                <div className="bg-white text-[#397ABF] text-[15px] px-5 py-3 sm:absolute rounded-full shadow animate-pulse">
                 <a href="https://wa.me/919074492490?text=Hello I want to enquire about your service" target="_blank" rel="noopener noreferrer">
                    Contact Us Now
                  </a>
                </div>
              </div>
            </div>
            <ul className="text-[16px] text-center sm:flex flex-col hidden">
              <li className="text-[12px] font-light">
                Dedicated effort. Proven results. Let’s take your business
                forward.
              </li>
              <li>Built on hard work. Driven by results.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubBody;
