import cn from "classnames";
import React from "react";
import { GetIconByName } from "../../config/icon";

const index = (props) => {
  const rootClassName = cn(
    ` w-full group text-[16px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded-[50px] placeholder-white focus-visible:outline-none focus:outline-none `,
    {
      "h-auto bg-brand-primary-100 text-white tracking-widest px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-brand-primary-100/80 ":
        props.variant === "primary",
      "h-auto bg-white text-grey-100 tracking-widest border border-grey-100 px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:bg-grey-100/80 hover:text-white":
        props.variant === "secondary",
      "h-12 md:h-14 bg-white text-brand border border-brand tracking-widest p-[12px] md:px-6 lg:px-6 md:py-3.5 lg:py-4 hover:bg-brand hover:text-white dark:bg-dark-secondary-bg dark:text-white dark:border-border-dark hover:dark:bg-brand/40":
        props.variant === "primary-border",
      "h-12 md:h-14 bg-brand-light text-brand-dark border border-border-four tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4":
        props.variant === "border",
      "px-3 py-3 bg-grey-100 text-white rounded-full font-manrope hover:bg-opacity-70 focus:bg-opacity-85":
        props.variant === "iconButton",
      "bg-brand h-auto text-font-white rounded-sm border-[1px] border-solid border-brand hover:bg-indigo-800/90":
        props.variant === "secondary-fill",
      "cursor-not-allowed hover:cursor-not-allowed bg-opacity-50 hover:bg-opacity-50":
        props.disabled,
    }
  );

  return (
    <button
      aria-pressed={props.active}
      data-variant={props.variant}
      ref={props.ref}
      className={rootClassName}
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
