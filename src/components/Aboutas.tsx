import React from "react";
import aboutmeimg from "/assets/aboutme.png";
const Aboutas = () => {
  return (
    <div className="bg-Herobg text-Textcl sm:h-[400px] overflow-hidden lg:h-[30vw] flex items-center justify-center lg:gap-10 md:px-10 max-sm:flex-col ">
      <div className="p-6 space-y-3 text-start sm:order-last sm:space-y-3 md:space-y-6 md:w-[50%]">
        <p className=" text-sm sm:text-xl font-semibold">About</p>
        <p className="text-2xl font-bold sm:text-6xl">About Me</p>
        <p className="text-sm xl:text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque. <br /> <br />
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
          eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
          risus .{" "}
        </p>
      </div>
      <div className="min-h-[330px] max-h-[714px] aspect-square flex items-center justify-center">
        <img
          src={aboutmeimg}
          alt=""
          className="min-h-[330px] max-md:h-[20vw] max-h-[354px]"
        />
      </div>
    </div>
  );
};

export default Aboutas;
