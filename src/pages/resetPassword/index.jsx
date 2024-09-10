import React, { useState } from "react";
import { Button, FormHeader, Input } from "../../components";

const SignIn = (props) => {
  const [password, setPassword] = useState("");
  return (
    <div className={"bg-white h-full flex flex-col py-11 px-4 justify-between"}>
      <div>
        <FormHeader
          title={"New password,"}
          subTitle={"Now, you can create new password and confirm it below"}
        />

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
          <Button size="lg" variant={"primary"}>
            Confirm New Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
