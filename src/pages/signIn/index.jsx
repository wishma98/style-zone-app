// SplashScreen.js
import React, { useState } from "react";
import { Button, Input } from "../../components";
// import { Input, Tooltip } from "antd";
import { GetIconByName } from "../../config/icon";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={"bg-white h-full flex flex-col py-11 px-4 justify-between"}>
      <div>
        <div className="flex flex-col items-start">
          <div className="font-manrope font-bold text-grey-100 text-24px">
            Welcome back,
          </div>
          <div className="font-nunito font-normal text-grey-80 text-14px">
            Glad to meet you again!, please login to use the app.
          </div>
        </div>
        <div className="mt-[118px]">
          <Input
            placeholder={"Email"}
            className={"relative"}
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
        <div className="text-grey-100 cursor-pointer text-12px font-normal font-nunito float-end mt-4">
          Forget password?
        </div>
      </div>
      <div>
        <div className="w-full mt-44 bottom-0 lg:bottom-0 flex flex-col gap-3">
          <Button variant={"primary"}>Sign In</Button>
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
