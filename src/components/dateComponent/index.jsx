import React from "react";

const Date = (props) => {
  return (
    <div
      className={`flex flex-col min-w-[55px] rounded-[50px] text-grey-100 ${
        props.isActive ? " bg-grey-100 text-white" : " bg-grey-20"
      } p-12px items-center`}
      onClick={props.onClick}
    >
      <div className="font-nunito text-10px lg:text-12px xl:text-12px">
        {props.dayName}
      </div>
      <div className="font-manrope text-16px lg:text-24px xl:text-24px font-bold">
        {props.date}
      </div>
    </div>
  );
};
export default Date;
