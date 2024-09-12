import cn from "classnames";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  const classes = {
    root: "w-auto h-auto bg-brand-secondary/20 font-manrope font-bold text-10px lg:text-12px xl:text-12px text-brand-secondary px-2 py-1 rounded-[50px]",
    default:
      "bg-[#F0F4F3] text-font-child3 dark:border-dark-border-default dark:bg-dark-secondary-bg dark:text-dark-font-child1",
    white:
      "bg-white text-brand border border-brand dark:border-dark-border-default dark:bg-dark-secondary-bg dark:text-dark-font-child1",
  };
  const rootClassName = cn(
    classes.root,
    {
      [classes.white]: props.variant === "white",
      [classes.default]: props.variant === "default",
    },
    {
      "p-2": props.size === "sm",
      "p-3": props.size === "md",
      "p-4 text-[14px]": props.size === "lg",
    }
  );
  return (
    <div
      className={
        rootClassName &&
        `${
          props.iconName
            ? " transition ease-in-out duration-300 cursor-pointer hover:bg-brand hover:text-white " +
              rootClassName
            : " cursor-auto " + rootClassName
        }`
      }
      onClick={props.onClick}
    >
      <div className={`flex flex-row items-center gap-2`}>
        {props.iconName && (
          <div className={`text-12px text-brand-secondary`}>
            {GetIconByName(props.iconName)}
          </div>
        )}
        <>{props.tagName}</>
      </div>
    </div>
  );
};

export default Index;
