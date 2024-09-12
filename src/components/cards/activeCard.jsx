import React from "react";
import { GetIconByName } from "../../config/icon";

const ActiveCard = (props) => {
  return (
    <div className="relative flex flex-col justify-between max-sm:w-[134px] max-sm:h-[136px] w-[114px] h-[116px] md:w-[164px] md:h-[162px] max-md:w-[174px] max-md:h-[176px] lg:w-[196px] lg:h-[194px] xl:w-[196px] xl:h-[194px]  ">
      <img
        src={props.imgUrl}
        className="w-auto h-auto"
        alt="active-image"
        srcset=""
      />

      <div
        className="absolute ml-[72%] z-40 mt-3 w-8 h-8 lg:w-10 lg:h-10 xl:w-10 lxl:h-10 cursor-pointer flex items-center justify-center text-[24px] lg:text-[32px] xl:text-[32px] bg-brand-accent-light text-brand-accent rounded-full
      hover:bg-opacity-90 focus:bg-opacity-95"
      >
        {GetIconByName("heart")}
      </div>
      <div className="flex flex-col justify-between">
        <div className="font-manrope font-bold text-14px lg:text-16px xl:text-16px text-grey-100">
          {props.title}
        </div>
        <div className="font-nunito font-normal text-12px lg:text-14px xl:text-14px text-grey-80">
          {props.subTitle}
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
