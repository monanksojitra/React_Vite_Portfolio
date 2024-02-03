import React from "react";
import img1 from "/assets/product-chain-1.png";
import img2 from "/assets/tag-2.png";
import img3 from "/assets/feather-pen-3.png";
import img4 from "/assets/feather-pen-4.png";

const MyExpertise = () => {
  const data = [
    {
      id: 1,
      icon: img1,
      titel: "Strategy & Direction",
      subtitel:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      icon: img2,
      titel: "Branding & Logo",
      subtitel:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 3,
      icon: img3,
      titel: "UI & UX Design",
      subtitel:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 4,
      icon: img4,
      titel: "Webflow Development",
      subtitel:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <div className="text-Heading   space-y-3 px-4 my-4 xl:my-10 xl:mx-10">
      <p className=" text-sm sm:text-xl font-semibold">My Skills</p>
      <p className="text-2xl font-bold sm:text-6xl">My Expertise</p>
      <div className="space-y-2 sm:flex overflow-x-scroll py-3 xl:py-8 no-scrollbar">
        {data.map((item) => (
          <div
            key={item.id}
            className="mx-2 bg-[#F5FCFF] space-y-1 sm:space-y-4 px-3 xl:px-5 py-4 rounded-md xl:rounded-xl min-w-[300px] w-fit max-w-[350px]"
          >
            <div className="h-10 aspect-square rounded-sm flex items-center shadow-lg justify-center bg-white">
              <img src={item.icon} alt="" className="h-7" />
            </div>
            <p className="text-lg sm:text-3xl font-bold">{item.titel}</p>
            <p className="text-sm sm:text-xl font-normal">{item.subtitel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExpertise;
