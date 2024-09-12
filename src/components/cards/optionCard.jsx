import React from "react";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  return (
    <>
      <div
        className={`flex flex-row justify-between items-center hover:shadow-lg py-4 px-2 rounded-md gap-3 w-full`}
        onClick={props.onClick}
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className={`flex items-center justify-center text-xl text-grey-100 ${
              props.isLogout ? "text-[#FF3B3B]" : ""
            }`}
          >
            {GetIconByName(props.iconName)}
          </div>
          <div className="flex flex-col">
            <div
              className={`font-manrope font-bold text-[15px] text-grey-10 ${
                props.isLogout ? "text-[#FF3B3B]" : ""
              }`}
            >
              {props.title}
            </div>
            <div className="font-nunito font-normal text-10px text-grey-80">
              {props.subTitle}
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-center text-16px text-[#8F90A6] ${
            props.isLogout ? "text-[#FF3B3B]" : ""
          }`}
        >
          {GetIconByName("rightArrow")}
        </div>
      </div>
    </>
  );
};

export default Index;
