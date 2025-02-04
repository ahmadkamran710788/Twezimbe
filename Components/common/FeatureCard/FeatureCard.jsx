import React from "react";

const FeatureCard = ({
  heading,
  subheading,
  linkText,
  primaryColor,
  iconColor,
}) => {
  return (
    <div
      className="bg-white rounded-lg h-[360px] flex flex-col transition-all duration-300 relative overflow-hidden group"
      style={{ "--primary-color": primaryColor, "--icon-color": iconColor }}
    >
      <div
        className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: primaryColor }}
      ></div>

      <div className="relative z-10 p-6 transition-colors duration-300">
        <h2
          className="text-2xl font-bold transition-colors duration-300"
          style={{
            color: "var(--primary-color)",
          }}
        >
          <span className="group-hover:text-white inline-block">{heading}</span>
        </h2>

        <p className="text-[#767676] text-sm mt-4 transition-colors duration-300 group-hover:text-white">
          {subheading}
        </p>
      </div>

      <div className="mt-auto relative z-10 p-6">
        <a
          href="#"
          className="flex items-center font-medium hover:underline transition-colors duration-300"
          style={{
            color: "var(--primary-color)",
          }}
        >
          <span
            className="transition-colors duration-300"
            style={{
              color: "var(--icon-color)",
            }}
          >
            <span className="group-hover:text-white inline-block">▶</span>
          </span>
          <span className="ml-2 group-hover:text-white inline-block text-sm">
            {linkText}
          </span>
        </a>
      </div>

      <img
        src="/phone.png"
        alt="Phone"
        className="absolute right-2 bottom-0  w-[90px] sm:w-[160px] md:w-[120px] lg:w-[160px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />
    </div>
  );
};

export default FeatureCard;
