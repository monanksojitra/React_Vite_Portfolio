import React from "react";
import logo from "/assets/Logo.svg";
import fb from "/assets/Facebook.png";
import insta from "/assets/Instagram.png";
import twit from "/assets/Twitter.png";
import linkd from "/assets/LinkedIn.png";

const Footer = () => {
  return (
    <div className="md:h-[90px] md:pb-20  w-full px-5 md:px-12 text-Textcl">
      <div className="flex max-lg:flex-col gap-y-2 md:gap-y-4 items-center justify-between py-6 md:py-10">
        <img src={logo} alt="" className="cursor-pointer h-6 md:h-12" />
        <ul className="flex flex-wrap items-center justify-between max-sm:mt-4 gap-3 md:gap-8 ">
          <li className="cursor-pointer">
            <a href="">Home </a>
          </li>
          <li className="cursor-pointer">
            <a href="">Portfolio </a>
          </li>
          <li className="cursor-pointer">
            <a href="">About me </a>
          </li>
          <li className="cursor-pointer">
            <a href="">Contact </a>
          </li>
          <li className="cursor-pointer">
            <a href="">Testimonials </a>
          </li>
          <li className="cursor-pointer">
            <a href="">Portfolio </a>
          </li>
        </ul>
        <ul className="flex  items-center justify-between gap-5 max-sm:mt-4 md:gap-3">
          <li className="cursor-pointer">
            <a href="">
              {" "}
              <img src={fb} alt="" className="h-7 aspect-square" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="">
              {" "}
              <img src={insta} alt="" className="h-7 aspect-square" />{" "}
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="">
              {" "}
              <img src={twit} alt="" className="h-7 aspect-square" />{" "}
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="">
              {" "}
              <img src={linkd} alt="" className="h-7 aspect-square" />{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="h-[2px] bg-black"></div>
      <div className="md:flex justify-between items-center py-4 text-sm">
        <p className="text-center">
          Made with 💖 by <a href="">Monank Sojitra</a>
        </p>
        <ul className="flex max-sm:mt-3 items-center justify-between md:gap-5">
          <a href="">
            {" "}
            <li className="cursor-pointer">Privacy Policy</li>
          </a>
          <a href="">
            {" "}
            <li className="cursor-pointer">Terms of Service</li>
          </a>
          <a href="">
            {" "}
            <li className="cursor-pointer">Cookies Settings</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
