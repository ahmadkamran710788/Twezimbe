import Image from "next/image";
import React from "react";

function Button({ title }) {
  return (
    <>
      <button className="flex items-center justify-between w-46 bg-[#1170B2] border border-blue-600 text-white rounded-md font-semibold transition overflow-hidden">
        <span className="flex-1 px-4 py-3">{title}</span>
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
    </>
  );
}

export default Button;
