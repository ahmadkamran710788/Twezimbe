import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-10 lg:py-20 bg-gray-50">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Achieve more with less. <br /> Empower your community.
          </h1>
          <p className="text-gray-500 mt-4 text-lg lg:pr-20 pr-10">
            Twezimbe makes managing groups, contributions, and events
            effortless— everything you need, all in one seamless platform.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start  gap-4 ">
            <button className="flex items-center justify-between w-46 bg-[#1170B2] text-white rounded-md font-semibold transition overflow-hidden">
              <span className="flex-1 px-4 py-3">Get Started</span>
              <span className="bg-[#4D94C54D] h-full flex items-center px-3">
                <Image
                  src="/arrowUp.png"
                  alt="Arrow Outward"
                  width={12}
                  height={12}
                  className="text-white"
                />
              </span>
            </button>

            <button className="flex items-center justify-between w-46 bg-[#1170B2] border border-blue-600 text-white rounded-md font-semibold transition overflow-hidden">
              <span className="flex-1 px-4 py-3">Book Demo</span>
              <span className="bg-[#4D94C54D] h-full flex items-center px-3">
                <Image
                  src="/arrowUp.png"
                  alt="Arrow Outward"
                  width={12}
                  height={12}
                  className="text-white"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center bg-white rounded-3xl p-5 relative ">
          <div className="bg-white rounded-3xl shadow-lg w-[486px] h-[486px] relative opacity-75 overflow-visible">
            <img
              src="community.jpeg"
              alt="Sample"
              className="w-full h-full object-cover rounded-md opacity-80"
            />

            <div className="absolute top-4 right-[-70px] bg-opacity-75 bg-white flex gap-3 items-center justify-between w-[197px] h-[68px] rounded-md p-2 shadow-md">
              <div className="bg-black text-white p-3 rounded-2xl">
                <img src="bell.png" alt="" className="w-16" />
              </div>

              <div className="text-gray-600 text-xs">
                James Just Contributed UGX10k to Bereavement Fund
              </div>
            </div>

            <div className="absolute bottom-36 left-[-70px] bg-opacity-75 bg-white flex items-center w-[197px] h-[68px] rounded-md p-4 shadow-md">
              <div className="bg-gray-300 w-12 h-12 rounded-full overflow-hidden absolute top-[-20px] left-[10px]">
                <img
                  src="user.jpeg"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="ml-12 text-gray-600 text-xs text-left">
                <span>Hi, Let’s build a community together</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-[-70px] bg-opacity-50 bg-white flex flex-col items-center w-[197px] h-[85px] rounded-md p-2 shadow-md">
              <div className="text-gray-600 text-xs font-normal text-center">
                10k+ Joined Fund raising
              </div>

              <div className="flex mt-1 -space-x-2">
                <img
                  src="user1.jpeg"
                  alt="User1"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="user2.jpeg"
                  alt="User2"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="user3.jpeg"
                  alt="User3"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="user2.jpeg"
                  alt="User4"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
