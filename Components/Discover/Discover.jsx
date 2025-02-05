import Image from "next/image";
import React from "react";

function Discover() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-6 md:p-12 rounded-lg">
      <div className="md:w-1/2 w-full relative overflow-hidden">
        <Image
          src="/discover.png"
          alt="Family Heritage"
          width={600}
          height={200}
          className="w-full lg:h-[400px] object-cover lg:object-contain  "
        />
        <Image
          src="/Blob.png"
          alt="Blob Overlay"
          width={200}
          height={200}
          className="absolute -bottom-0 -right-24 w-[60%] h-auto object-contain pointer-events-none rotate-[270deg]"
        />
      </div>

      <div className="md:w-1/2 w-full flex flex-col md:justify-center md:text-left">
        <h2 className="text-4xl pl-10 pr-10 md:pl-0 md:pr-0  md:text-5xl font-extrabold text-[#000000]">
          Discover your roots.
        </h2>
        <p className="text-[#505050] pl-10 pr-10 md:pl-0 md:pr-0 font-normal mt-4 leading-relaxed lg:pr-44">
          Connect with your past. Build your family tree and preserve your
          heritage for generations.
        </p>
        <button className="mt-4 px-5 py-2 flex items-center gap-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Discover;
