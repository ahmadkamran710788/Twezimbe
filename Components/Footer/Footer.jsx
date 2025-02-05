import React from "react";

import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

function Footer() {
  return (
    <>
      <footer className="bg-white text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left text-black mt-8">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-4 dark:border-white/10 lg:justify-between"></div>

        <div className="mx-6 md:py-20 md:px-28 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img src="Logo.png" alt="Logo" className="w-32 mb-4" />
              <p className="text-gray-400 text-sm text-center md:text-left">
                Your all-in-one platform for SACCO & Bereavement Fund Efficiency
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-[#1170B2] hover:text-blue-400">
                  <RiFacebookFill />
                </a>
                <a href="#" className="text-[#1170B2] hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-[#1170B2] hover:text-blue-400">
                  <AiFillInstagram />
                </a>
                <a href="#" className="text-[#1170B2] hover:text-blue-400">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-[#1170B2] hover:text-blue-400">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h6 className="mb-4 font-semibold uppercase">Product</h6>
              <p className="mb-2 mt-7 text-gray-400">
                <a href="#">Features</a>
              </p>
              <p className="mb-2 text-gray-400">
                <a href="#">Pricing</a>
              </p>
              <p className="mb-2 text-gray-400">
                <a href="#">Reviews</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 font-semibold uppercase">Company</h6>
              <p className="mb-2 mt-7 text-gray-400">
                <a href="#">About</a>
              </p>
              <p className="mb-2 text-gray-400">
                <a href="#">Contact us</a>
              </p>
              <p className="mb-2 text-gray-400">
                <a href="#">Careers</a>
              </p>
              <p className="mb-2 text-gray-400">
                <a href="#">Blogs</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 font-semibold uppercase">Support</h6>
              <p className="mb-2 mt-7 text-gray-400">
                <a href="#">FAQs</a>
              </p>
              <p className="text-gray-400">
                <a href="#">Report a Bug</a>
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h6 className="mb-4 font-semibold uppercase">Contact Us</h6>
              <p className="mb-2 mt-7 text-gray-400 flex items-center">
                <MdOutlineEmail className="mr-2 text-black text-lg" />
                Support@twezimbe.com
              </p>
              <p className="mb-2 text-gray-400 flex items-center">
                <FiPhone className="mr-2 text-black text-lg" />
                +256-782-610333
              </p>
              <p className="mb-2 text-gray-400 flex items-center text-center md:text-left">
                <SlLocationPin className="mr-2 text-black text-3xl" />
                4th floor Block B, Ntinda Complex, Kampala-Uganda
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col md:flex-row items-center justify-between px-6 md:px-28 text-center md:text-left gap-4">
          <h5 className="text-gray-500">Copyright © 2025 Twezimbe</h5>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <p className="text-gray-400">All rights reserved</p>
            <a
              className="underline border-l-2 border-gray-300 pl-2 text-blue-400"
              href="#"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="underline border-l-2 border-gray-300 pl-2 text-blue-400"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
