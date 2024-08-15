// SplashScreen.js
import React from "react";

const SplashScreen = () => {
  return (
    <div
      className={
        " fixed top-0 left-0 w-full h-full flex flex-col justify-center container " +
        " mt-o mb-0 ml-auto mr-auto pt-[97px] pb-[97px] pr-[52px] pl-[52px] bg-black z-[999] animate-reversPing "
      }
    >
      <div className=" text-center font-bold text-white text-2xl">
        The style zone
      </div>
    </div>
  );
};

export default SplashScreen;
