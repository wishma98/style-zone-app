import React from "react";

const NavigationComponent = (props) => {
  return (
    <>
      <div
        className="relative cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-125"
        onClick={props.onClick}
      >
        {!props.menuName && props.iconName && (
          <div className="text-black text-2xl hover:text-black">
            {props.iconName}
          </div>
        )}
        {!props.iconName && props.menuName && (
          <div
            className={`font-manrope font-bold text-center text-grey-80 ${
              props.isActive ? "text-grey-100" : ""
            } text-14px`}
          >
            {props.menuName}
          </div>
        )}
        {props.isActive && (
          <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-2xl text-black">
            •
          </span>
        )}
        {props.activeNotification && (
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </div>
    </>
  );
};

export default NavigationComponent;
