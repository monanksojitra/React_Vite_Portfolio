import React from "react";
import Socialicon from "/assets/Socialicon.png";
import arrow from "/assets/arrowimg.png";
import portfolioimg1 from "/assets/portfoliocard1.png";
import portfolioimg2 from "/assets/portfoliocard2.png";
import portfolioimg3 from "/assets/portfoliocard3.png";
const Portfolio = () => {
  const arraydata = [
    { id: 1, src: portfolioimg1, titel: "Ahuse" },
    { id: 2, src: portfolioimg2, titel: "App Dashboard" },
    { id: 3, src: portfolioimg3, titel: "Easy Rent" },
  ];
  return (
    <div className=" text-Textcl flex lg:gap-5 md:px-10 lg:py-10 flex-col ">
      <div className="flex w-full items-center justify-between p-6 text-start   ">
        <div className="space-y-2 xl:space-y-4">
          <p className=" text-sm sm:text-xl font-semibold">Recent Projects</p>
          <p className="text-2xl font-bold sm:text-6xl">My Portfolio</p>
        </div>
        <div className="bg-Dribble rounded-full sm:rounded-lg flex items-center justify-center gap-2 py-2 px-2 cursor-pointer">
          <img src={Socialicon} alt="" className="h-4" />
          <p className="hidden sm:block text-white">Visit My Dribbble</p>
        </div>
      </div>
      <div className="  flex max-sm:mx-auto  flex-col sm:flex-row sm:overflow-x-scroll no-scrollbar gap-y-2 gap-x-4">
        {arraydata.map((item) => (
          <div className="m-3 rounded-md space-y-3 pb-6 shadow-md min-w-[330px] w-[28vw]">
            <img src={item.src} alt="" className=" object-center" />
            <div className="mx-4 space-y-2 xl:space-y-3">
              <p className="text-xl font-bold xl:text-2xl">{item.titel}</p>
              <p className="text-xs xl:tetx-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-2 items-center border-b-[1.5px] font-medium w-fit border-Primary cursor-pointer">
                <p>View In Dribbble</p>
                <img src={arrow} alt="" className="h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
