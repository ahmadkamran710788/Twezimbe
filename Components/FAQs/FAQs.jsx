"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FcNext } from "react-icons/fc";
import { faqs } from "@/Data/FAQsData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-6 mt-5 text-center">
        Frequently Asked Questions
      </h1>
      <input
        className="w-full border border-[#000000] max-w-[500px] flex justify-center p-3 rounded-md "
        type="text"
        placeholder="Search"
        name="search"
        id=""
      />
      <div className="w-full max-w-2xl mt-5">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white  rounded-lg shadow p-2">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center p-4  cursor-pointer rounded-lg"
            >
              <h2 className="text-lg font-medium text-gray-800">
                {faq.question}
              </h2>
              {openIndex === index ? (
                <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full shadow">
                  <IoIosArrowDown size={20} className="text-[#4A3AFF]" />
                </div>
              ) : (
                <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full shadow">
                  <FcNext size={18} className="text-[#4A3AFF]" />
                </div>
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-screen pl-4 rounded-b-lg"
                  : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <p className="text-gray-700">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
