import React from "react";
import { TbBoltFilled } from "react-icons/tb";

function Community() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-10 lg:py-20">
        <div className="relative w-[302px] h-[593px] flex flex-col items-center lg:ml-32">
          <img
            src="fullScreen.png"
            alt="Phone"
            className="w-[302px] h-[593px]"
          />

          <div className="absolute top-[40px] left-[50%] transform -translate-x-[50%] w-[478px] h-[242px] bg-blue-700 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium">Group Balance</h3>
              <p className="text-3xl font-bold mt-2">$ 15,560.00</p>
            </div>
            <div className="flex gap-4 text-sm pb-4">
              <span>5282</span>
              <span>3000</span>
              <span>1445</span>
              <span>3286</span>
            </div>
          </div>

          <div className="absolute top-[300px] left-[50%] transform -translate-x-[50%] w-[478px] h-[106px] bg-white opacity-95 text-gray-600 rounded-xl p-4 shadow-md flex items-center justify-center text-center">
            <p className="text-sm">
              Agbenu Just Contributed $10k to Insurance Fund
            </p>
          </div>

          <div className="absolute top-[420px] left-[50%] transform -translate-x-[50%] w-[478px] h-[106px] bg-white opacity-95 text-gray-600 rounded-xl p-4 shadow-md flex items-center justify-center text-center">
            <p className="text-sm">
              Agbenu Just Contributed $10k to Insurance Fund
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 font-normal">
            <span className="text-4xl text-blue-700">
              <TbBoltFilled />
            </span>
            <span className="text-sm">Fast and Efficient</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mt-2">
            More ways to grow your community funds
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Effortlessly manage your Group Savings, Bereavement Funds, and
            Social Fundraising with Twezimbe.
          </p>
          <p className="text-gray-500 mt-2 text-lg">
            Streamline your operations, enhance transparency, and empower your
            community to achieve more. Take the first step.
          </p>
        </div>
      </div>
    </>
  );
}

export default Community;
