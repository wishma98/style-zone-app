import React from "react";

const Index = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 px-[14px] py-3 rounded-full text-brand-secondary bg-brand-primary-light cursor-pointer hover:bg-opacity-90"
        onClick={props.onClick}
      >
        <img
          className="w-full h-full text-brand-secondary"
          alt=""
          src={props.iconName}
        />
      </div>
      <div className="font-manrope font-semibold text-14px text-brand mt-2">
        {props.menuName}
      </div>
    </div>
  );
};

export default Index;
