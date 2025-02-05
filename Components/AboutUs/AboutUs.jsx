import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="bg-[#F3F7F8CC] px-4 sm:px-6 md:px-16 lg:px-32 py-8 md:py-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-[500px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/aboutus.png"
              alt="About Us"
              fill
              className="rounded-lg object-contain"
              priority
            />
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h2 className="text-3xl pl-10 pr-10 md:pl-0 md:pr-0 sm:text-4xl md:text-5xl font-extrabold text-[#000000]">
            About Us
          </h2>

          <div className="space-y-4 mt-4 pl-10 pr-10 md:pl-0 md:pr-0 md:mt-6">
            <p className="text-[#505050]  text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
              Twezimbe is your all-in-one platform for simplifying the
              management of Saving Groups, Bereavement Funds, and Social
              Fundraising. We provide tools to streamline operations, enhance
              transparency, and empower your community to achieve more.
            </p>

            <p className="text-[#505050] text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
              Our user-friendly design ensures managing contributions, loans,
              and social funding is quick, easy, and effective. Plus, explore
              your heritage with our Family Tree feature—ever wonder who your
              great-great-grandfather was?
            </p>

            <p className="text-[#505050] text-sm sm:text-base md:text-sm lg:text-base ">
              Ready to transform your community?
            </p>
          </div>

          <button className="mt-6 md:mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-fit">
            Download Brochure →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
