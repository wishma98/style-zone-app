import cn from "classnames";
import React from "react";
import { GetIconByName } from "../../config/icon";

const index = (props) => {
  const rootClassName = cn(
    ` w-full group text-[16px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded-[50px] placeholder-white focus-visible:outline-none focus:outline-none `,
    {
      "h-auto bg-brand-primary-100 text-white tracking-widest hover:text-white hover:bg-brand-primary-100/80 ":
        props.variant === "primary",
      "h-auto bg-white text-grey-100 tracking-widest border border-grey-100 hover:bg-grey-100/80 hover:text-white":
        props.variant === "secondary",
      "h-auto bg-brand-accent text-white tracking-widest hover:text-white hover:bg-brand-accent/70":
        props.variant === "btn-brown",
      "h-12 md:h-14 bg-brand-light text-brand-dark border border-border-four tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4":
        props.variant === "border",
      " bg-grey-100 text-white rounded-full font-manrope hover:bg-opacity-70 focus:bg-opacity-85":
        props.variant === "iconButton",
      " bg-white text-brand-secondary border border-brand-secondary rounded-full font-manrope hover:bg-opacity-70 focus:bg-opacity-85":
        props.variant === "iconButton-secondary",
      "cursor-not-allowed hover:cursor-not-allowed bg-opacity-50 hover:bg-opacity-50":
        props.disabled,
    }
  );

  return (
    <button
      aria-pressed={props.active}
      data-variant={props.variant}
      ref={props.ref}
      className={
        props.size === "sm"
          ? rootClassName + " px-2 py-2 "
          : props.size === "md"
          ? rootClassName + " px-3 py-3 "
          : rootClassName + " px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 "
      }
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {!props.loading && (
        <div className={"flex flex-row items-center"}>
          {props.iconNameLeft && (
            <div className={"mr-3"}>{GetIconByName(props.iconNameLeft)}</div>
          )}
          {props.children}
          {props.iconName && (
            <div className={"ml-3"}>{GetIconByName(props.iconName)}</div>
          )}
          {props.iconNameRight && (
            <div className={"ml-3"}>{GetIconByName(props.iconNameRight)}</div>
          )}
        </div>
      )}
      {props.loading && (
        <div className={"text-white font-archivo font-semibold text-sm"}>
          Loading...
        </div>
      )}
    </button>
  );
};

export default index;
