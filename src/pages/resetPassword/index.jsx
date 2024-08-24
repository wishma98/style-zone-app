// SplashScreen.js
import React, { useState } from "react";
import { Button, Input } from "../../components";
// import { Input, Tooltip } from "antd";
import { GetIconByName } from "../../config/icon";

const SignIn = (props) => {
  const [password, setPassword] = useState("");
  return (
    <div className={"bg-white h-full flex flex-col py-11 px-4 justify-between"}>
      <div>
        <div className="flex flex-col items-start">
          <div className="font-manrope font-bold text-grey-100 text-24px">
            New password,
          </div>
          <div className="font-nunito font-normal text-grey-80 text-14px">
            Now, you can create new password and confirm it below
          </div>
        </div>
        <div className="mt-[118px]">
          <Input
            placeholder={"Nw password"}
            className={"relative"}
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
          <Input
            placeholder={"Confirm new password"}
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
      </div>
      <div>
        <div className="w-full mt-44 bottom-0 lg:bottom-0 flex flex-col gap-3">
          <Button variant={"primary"}>Confirm New Password</Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
