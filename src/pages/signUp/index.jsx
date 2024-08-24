// SplashScreen.js
import React, { useState } from "react";
import { Button, Input, MobileNoInput } from "../../components";
// import { Input, Tooltip } from "antd";
import { GetIconByName } from "../../config/icon";

const SignIn = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  return (
    <div className={"bg-white h-full flex flex-col py-11 px-4 justify-between"}>
      <div>
        <div className="flex flex-col items-start">
          <div className="font-manrope font-bold text-grey-100 text-24px">
            Create an account,
          </div>
          <div className="font-nunito font-normal text-grey-80 text-14px">
            Please type full information bellow and we can create your account
          </div>
        </div>
        <div className="mt-[38px]">
          <Input
            placeholder={"Name"}
            className={"relative"}
            required={true}
            type="text"
            phoneNo={false}
            leftIcon={"user"}
            variant="normal"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder={"Email"}
            className={"relative mt-4"}
            required={true}
            type="text"
            phoneNo={false}
            leftIcon={"mail"}
            variant="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MobileNoInput
            placeholder={"Mobile number"}
            className={"relative mt-4"}
            required={true}
            type="text"
            value={email}
            optionValue={option}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onChangeOption={(e) => {
              setOption(e);
            }}
          />
          <Input
            placeholder={"Password"}
            className={"relative mt-4"}
            required={true}
            type="text"
            phoneNo={false}
            variant="normal"
            isPassword={true}
            leftIcon={"lock"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="font-nunito font-normal text-12px mt-8 text-grey-100 text-wrap text-start">
          By signing up you agree to our Term of use and privacy
          <span className="font-manrope font-bold text-12px pl-1 text-grey-100 text-center hover:underline cursor-pointer">
            Term of use and privacy{" "}
          </span>
          notice
        </div>
      </div>
      <div>
        <div className="w-full mt-4 bottom-0 lg:bottom-0 flex flex-col gap-3">
          <Button variant={"primary"}>Join Now</Button>
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-grey-40 flex-grow"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="border-t border-grey-40 flex-grow"></div>
          </div>
          <Button variant={"secondary"} iconNameLeft={"google"}>
            Join with Google
          </Button>
        </div>
        <div className="font-nunito font-normal text-14px mt-8 text-grey-100 text-wrap text-center">
          Don’t have an account?
          <span className="font-manrope font-semibold text-14px pl-1 text-grey-100 text-center hover:underline cursor-pointer">
            Join Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
