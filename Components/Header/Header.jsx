"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="py-4 px-6 sm:px-9 bg-white shadow-md">
        <div className="flex justify-between items-center sm:px-8">
          <div className="flex items-center">
            <img className="w-36 h-auto" src="Logo.png" alt="Logo" />
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 text-black text-sm xl:text-md">
              <li className="cursor-pointer hover:text-[#378fcb]">About</li>
              <li className="cursor-pointer hover:text-[#378fcb]">Contact</li>
              <li className="cursor-pointer hover:text-[#378fcb]">Features</li>
              <li className="cursor-pointer hover:text-[#378fcb]">FAQ's</li>
            </ul>

            <div className="flex gap-4">
              <button className="bg-transparent hover:bg-[#378fcb] text-[#1170B2] font-normal hover:text-white py-2 px-6 border border-[#378fcb] hover:border-transparent rounded">
                Sign In
              </button>
              <button className="bg-[#1170B2] hover:bg-[#378fcb] text-white font-bold py-2 px-4 border rounded">
                Create Free Account
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden flex flex-col items-center mt-4 space-y-4">
            <ul className="flex flex-col gap-4 text-black text-sm">
              <li className="cursor-pointer hover:text-blue-500">About</li>
              <li className="cursor-pointer hover:text-blue-500">Contact</li>
              <li className="cursor-pointer hover:text-blue-500">Features</li>
              <li className="cursor-pointer hover:text-blue-500">FAQ's</li>
            </ul>

            <div className="flex flex-col gap-4 w-full px-6">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded w-full">
                Sign In
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded w-full">
                Create Free Account
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
