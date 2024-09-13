import React from "react";
import { GetIconByName } from "../../config/icon";

const Specialist = (props) => {
  return (
    <div className={`flex flex-col`} onClick={props.onClick}>
      <div
        className={`w-[72px] h-[72px] flex items-center justify-center cursor-pointer relative`}
      >
        {props.isActive && (
          <div
            className={
              "absolute flex w-full h-full items-center justify-center text-[42px]" +
              " bg-white/65 z-[90] text-grey-100 border-2 border-grey-100 rounded-full"
            }
          >
            {GetIconByName("check")}
          </div>
        )}
        <img
          src={props.imageUrl}
          alt="active-image"
          className="rounded-full object-cover w-full h-full z-20"
        />
      </div>
      <div className="flex flex-col text-center text-sm font-semibold text-[#111111]">
        {props.name}
      </div>
    </div>
  );
};
export default Specialist;
