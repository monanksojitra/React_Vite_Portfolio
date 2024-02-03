import React from "react";
import start from "/assets/star.png";
const Customer = () => {
  const arraydata = [
    {
      id: 1,
      comment:
        "`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`",
      avtarsrc: "https://xsgames.co/randomusers/avatar.php?g=female",
      username: "Dianne Russell",
      company: "Starbucks",
      reating: [1, 1, 1, 1, 1],
    },
    {
      id: 2,
      comment:
        "`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`",
      avtarsrc: "https://xsgames.co/randomusers/avatar.php?g=male",
      username: "Kristin Watson",
      company: "Louis Vuitton",
      reating: [1, 1, 1, 1, 1],
    },
    {
      id: 3,
      comment:
        "`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`",
      avtarsrc: "https://xsgames.co/randomusers/avatar.php?g=female",
      username: "Kathryn Murphy",
      company: "McDonald's",
      reating: [1, 1, 1, 1, 1],
    },
  ];
  return (
    <div className=" text-Textcl flex px-8   lg:gap-5 py-2  lg:py-10 flex-col bg-Herobg ">
      <div className=" p-6 text-start space-y-2  ">
        <p className=" text-sm sm:text-xl font-semibold">Clients Feedback</p>
        <p className="text-2xl font-bold md:text-4xl xl:text-6xl">
          Customer testimonials
        </p>
      </div>

      <div className="  flex flex-col sm:flex-row sm:flex-wrap  py-3 gap-y-5 gap-x-4 mx-auto sm:mx-5">
        {arraydata.map((item) => (
          <div
            key={item.id}
            className="border-2 border-cardborder rounded-md px-4 xl:px-6 py-5 xl:py-8 space-y-5 max-w-[340px] xl:max-w-[370px]"
          >
            <div className="flex gap-1">
              {item.reating.map((item) => (
                <img src={start} alt="" className="h-4 lg:h-5" />
              ))}
            </div>
            <p className="text-xs lg:text-sm">{item.comment}</p>
            <div className="flex gap-4 items-center ">
              <img
                src={item.avtarsrc}
                alt=""
                className="h-10 xl:h-14 rounded-full"
              />
              <div className="">
                <p className="text-base font-semibold xl:text-lg">
                  {item.username}
                </p>
                <p className="text-xs xl:text-base font-medium">
                  {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
