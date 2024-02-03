import React, { useState } from "react";
import logo from "/assets/Logo.svg";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="h-[60px] md:h-[90px]  flex items-center justify-between px-4 lg:px-10">
      <img src={logo} alt="" className="h-6 lg:h-8 md:z-12 cursor-pointer" />
      <RiMenu2Fill
        className="md:hidden cursor-pointer"
        size={25}
        onClick={() => settoggle(!toggle)}
      />
      <ul
        className={`${
          toggle ? " flex flex-col " : "hidden"
        } items-start bg-Primary bg-opacity-65 p-7 rounded-3xl justify-between gap-4 text-white w-[50%] absolute top-20 right-5`}
      >
        <li className="text-black cursor-pointer">Home</li>
        <li className="cursor-pointer">Portfolio</li>
        <li className="cursor-pointer">About me</li>
        <li className="cursor-pointer">Testimonials</li>
      </ul>
      <ul className="hidden md:flex items-center justify-between gap-8 text-Textcl">
        <li className="text-Primary cursor-pointer">Home</li>
        <li className="cursor-pointer">Portfolio</li>
        <li className="cursor-pointer">About me</li>
        <li className="cursor-pointer">Testimonials</li>
      </ul>
      <div className="hidden md:block border-2 px-5 py-2 rounded-md border-Primary cursor-pointer">
        <p>Contact Me</p>
      </div>
    </div>
  );
};

export default Navbar;
