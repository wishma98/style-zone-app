import React from "react";
import { GetIconByName } from "../../config/icon";

const ActiveCard = (props) => {
  return (
    <div className="relative flex flex-col justify-between w-auto h-auto min-w-[196px] min-h-[194px]">
      <img src={props.imgUrl} alt="active-image" srcset="" />

      <div
        className="absolute ml-[73%] z-40 mt-3 w-10 h-10 cursor-pointer flex items-center justify-center text-[32px] bg-brand-accent-light text-brand-accent rounded-full
      hover:bg-opacity-90 focus:bg-opacity-95"
      >
        {GetIconByName("heart")}
      </div>
      <div className="flex flex-col justify-between">
        <div className="font-manrope font-bold text-16px text-grey-100">
          {props.title}
        </div>
        <div className="font-nunito font-normal text-14px text-grey-80">
          {props.subTitle}
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
