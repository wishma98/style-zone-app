import React from "react";

const Index = (props) => {
  return (
    <div
      className={`py-12px px-16px border-1 w-full min-w-[90px] rounded-[50px] text-grey-100 ${
        props.isActive ? " bg-grey-100 text-white" : " bg-grey-20"
      } text-12px lg:text-14px xl:text-14px font-semibold font-manrope`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};
export default Index;
