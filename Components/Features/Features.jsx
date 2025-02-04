import { featureCardsData } from "@/Data/FeatureCardsData";
import React from "react";
import FeatureCard from "../common/FeatureCard/FeatureCard";

function Features() {
  return (
    <>
      <div className="bg-[#F3F7F8CC] w-full p-5">
        <h2 className="flex justify-center font-bold text-2xl">
          Bring Your Vision to Life with Twezimbe.
        </h2>
        <h2 className="flex justify-center font-bold text-2xl">
          Create a Group to Connect with Your Friends and Family
        </h2>
        <h3 className="text-[#969696] text-base font-medium flex justify-center mt-3">
          An All-in-One Platform. Empower your community,
        </h3>
        <h3 className="text-[#969696] text-base font-medium flex justify-center">
          streamline operations, and build stronger connections—all in one
          place.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-gray-100">
          {featureCardsData.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
