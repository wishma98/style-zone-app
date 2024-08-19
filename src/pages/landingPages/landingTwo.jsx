// SplashScreen.js
import React from "react";
import { Button } from "../../components";

const LandingTwo = (props) => {
  return (
    <div className={"w-full h-full "}>
      <div className="w-full h-auto lg:h-[812px] md:h-dvh max-sm:h-dvh max-md:h-dvh ">
        <img
          className=" w-full h-full object-cover"
          src={require("../../assets/images/boarding3.png")}
          alt="landing"
        />
      </div>
      <div className="absolute w-full h-auto lg:h-[812px] lg:top-0 max-md:min-w-full top-[30%] bottom-0 left-0 right-0 z-[9999] bg-overlay container flex flex-col justify-center items-center">
        <div className="text-white text-24px font-bold font-manrope">
          Meet Our Specialists
        </div>
        <div className="font-nunito font-normal text-16px mt-4 text-white text-wrap text-center">
          There are many best stylists from all the best salons ever
        </div>
        <div className="grid grid-flow-col gap-2 mt-11">
          <div className={`h-2 w-2 bg-white rounded-full dot`} />
          <div
            className={`h-2 ${
              props.isActive
                ? "bg-brand-secondary-100 w-[30px] rounded-md slider"
                : "w-2 bg-white rounded-full"
            }`}
          />
          <div className={`h-2 w-2 bg-white rounded-full dot`} />
        </div>
        <div className="w-full mt-20 bottom-[10%] lg:bottom-0">
          <Button variant={"primary"} onClick={props.onClick}>
            Next
          </Button>
        </div>
        <div className="font-nunito font-normal text-14px mt-8 text-white text-wrap text-center">
          Already have an account?
          <span className="font-manrope font-semibold text-14px pl-1 text-brand-secondary-100 text-center hover:underline cursor-pointer">
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingTwo;
