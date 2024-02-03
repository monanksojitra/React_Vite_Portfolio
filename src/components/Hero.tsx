import React from "react";
import heroimg from "/assets/hero-img.png";

const Hero = () => {
  return (
    <div className="bg-Herobg text-Textcl md:h-[50vw] flex items-center md:px-10 max-sm:flex-col">
      <div className="p-6 space-y-3 text-start max-sm:order-last sm:space-y-4 md:space-y-6 md:w-[50%]">
        <p className="text-base md:text-[2vw] font-semibold">
          Hey, I am Monank
        </p>
        <p className="text-4xl sm:text-[5vw] leading-none font-bold">
          I create <span className="text-Primary">product design</span> and
          brand experience
        </p>
        <p className="text-base sm:text-[1.4vw] font-normal leading-snug md:w-[40vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>

        <div className="bg-Primary py-3 px-5 md:px-6 text-xs md:py-4 md:text-lg w-fit rounded-lg text-white cursor-pointer">
          <p>Get In Touch</p>
        </div>
      </div>
      <div className="">
        <img src={heroimg} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
