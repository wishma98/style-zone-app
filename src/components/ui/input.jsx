import React, { useState } from "react";
import cn from "classnames";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const classes = {
    root: "  px-4 py-3 lg:px-6 xl:px-6 lg:py-5 xl:py-5 w-full border-grey-20 appearance-none transition duration-150 ease-in-out text-input text-13px lg:text-sm font-body placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark dark:grey-100-border-default focus:ring-0 focus:dark:text-grey-100 active:dark:grey-100-border-default active:dark:text-grey-100 dark:text-grey-100 focus:dark:grey-100-border-default",
    normal:
      "font-nunito font-normal text-14px text-grey-100 bg-grey-20 border border-solid border-grey-20 rounded-full hover:border-grey-100 hover:bg-white focus:shadow focus:text-grey-100 focus:border-grey-100 active:text-grey-100 active:bg-white focus:bg-white",
    solid:
      "text-brand-dark border-gray-300 border grey-100-secondary-bg dark:border-grey-100 focus:border-2 focus:outline-none focus:border-brand h-11 md:h-12 focus:dark:text-grey-100 focus:dark:border-grey-100 active:dark:text-grey-100 dark:text-grey-100",
    outline:
      "border-gray-300 dark:border-grey-100 focus:border-brand focus:dark:border-grey-100",
    shadow: "focus:shadow",
    phoneNo: "pl-12",
  };
  const rootClassName = cn(
    classes.root,
    {
      [classes.normal]: props.variant === "normal",
      [classes.solid]: props.variant === "solid",
      [classes.outline]: props.variant === "outline",
    },
    {
      [classes.shadow]: props.shadow,
      [classes.phoneNo]: props.phoneNo,
    },
    props.inputClassName
  );

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={props.className}>
      {props.label && (
        <label
          htmlFor={props.name}
          className={`block font-manrope font-regular text-10px leading-none mb-3                
                ${props.labelClassName || "text-font dark:text-white"}`}
        >
          {props.label}

          {props.required && (
            <span
              className={
                " ml-1 font-manrope text-grey-80 text-12px font-normal"
              }
            >
              (required)
            </span>
          )}
          {props.optional && (
            <span
              className={
                " ml-1 font-manrope text-grey-80 text-12px font-normal"
              }
            >
              (optional)
            </span>
          )}
        </label>
      )}

      <input
        id={props.name}
        name={props.name}
        type={
          props.isPassword ? (passwordShown ? "text" : "password") : props.type
        }
        ref={props.ref}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.leftIcon ? rootClassName + " pl-9" : rootClassName}
        autoComplete="off"
        spellCheck="false"
        aria-invalid={props.error ? "true" : "false"}
        {...props.rest}
      />
      {props.phoneNo && (
        <p className={"absolute top-10 left-4 text-[14px]"}>+94</p>
      )}
      {props.leftIcon && (
        <p
          className={
            "absolute top-4 lg:top-6 xl:top-6 left-4 text-16px text-grey-60 active:text-grey-100 focus:text-grey-100"
          }
        >
          {GetIconByName(props.leftIcon)}
        </p>
      )}
      {props.value && props.isPassword && (
        <>
          <p
            className={`absolute top-6 right-6 text-16px text-grey-60 active:text-grey-100 focus:text-grey-100  ${
              passwordShown ? " text-grey-100" : ""
            }`}
            onClick={togglePassword}
          >
            {GetIconByName(!passwordShown ? "eye" : "eyeOff")}
          </p>
        </>
      )}
      {props.error && (
        <p className="my-2 text-13px text-brand-danger text-opacity-70">
          {props.error}
        </p>
      )}
    </div>
  );
};

export default Index;
