import React, { useState } from "react";
import { Button, FormHeader, Input } from "../../components";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  return (
    <div className={"bg-white h-full flex flex-col py-11 px-4 justify-between"}>
      <div>
        <FormHeader
          title={"Forgot password,"}
          subTitle={
            "Please type your email below and we will give you a OTP code"
          }
        />
        <div className="mt-[118px]">
          <Input
            placeholder={"Email address"}
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
        </div>
        <div className="text-grey-100 cursor-pointer text-12px font-normal font-nunito float-end mt-4">
          Use phone number?
        </div>
      </div>
      <div>
        <div className="w-full mt-44 bottom-0 lg:bottom-0 flex flex-col gap-3">
          <Button variant={"primary"}>Send Code</Button>
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
