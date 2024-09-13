import moment from "moment";
import React from "react";
import { GetIconByName } from "../../config/icon";
import { Button, TagComponent } from "..";

const Index = (props) => {
  return (
    <>
      <div
        className={`flex flex-row justify-between rounded-[8px] shadow-custom gap-3 w-full ${
          props.isActive ? "opacity-55" : ""
        }`}
      >
        <div className="flex flex-row w-full">
          <div className="flex flex-row justify-start h-[114px] w-full max-w-[114px]">
            <img
              src={
                props && props.imgUrl
                  ? props.imgUrl
                  : require("../../assets/images/default_avatar.png")
              }
              className={`w-[114px] h-[114px] object-cover rounded-s-[8px]`}
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-between max-w-full py-4 pl-4">
            <div className={"flex flex-row justify-between items-center"}>
              <div className="font-manrope font-normal text-[13px] lg:text-14px xl:text-14px text-grey-100">
                {props.title}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {!props.closeDate && (
                <>
                  <div className="font-manrope font-bold text-12px lg:text-16px xl:text-16px text-grey-100">
                    {props.price}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#C4C4C4]" />
                  <div className="font-nunito font-normal text-10px lg:text-12px xl:text-12px text-grey-80">
                    {moment(props.createAt).startOf("day").fromNow()}
                  </div>
                </>
              )}
              {props.closeDate && (
                <>
                  <div className="font-manrope font-bold text-12px lg:text-16px xl:text-16px text-grey-100">
                    {props.closeDate}
                  </div>
                  <div className="font-nunito font-normal text-10px lg:text-12px xl:text-12px text-grey-80">
                    {props.closeTime}
                  </div>
                </>
              )}
            </div>
            <p
              className={
                "flex flex-wrap font-nunito font-normal text-10px lg:text-12px xl:text-12px text-grey-80"
              }
            >
              {props.description}
            </p>
          </div>
        </div>
        {props.type !== "closed" && (
          <div className="flex flex-col justify-between items-end py-4 pr-4">
            {props.tagName && (
              <div className="flex">
                <TagComponent iconName={"tag"} tagName={props.tagName} />
              </div>
            )}
            {!props.tagName && <div className="flex" />}
            <div className="flex justify-end">
              <Button
                variant={
                  props.isActive ||
                  props.type === "pending" ||
                  props.type === "cancel" ||
                  props.type === "confirmed"
                    ? "iconButton-secondary"
                    : "iconButton"
                }
                size={
                  props.type === "pending" ||
                  props.type === "cancel" ||
                  props.type === "confirmed"
                    ? "sm"
                    : "md"
                }
                onClick={props.onClick}
              >
                {GetIconByName(
                  props.isActive
                    ? "minus"
                    : props.type === "pending"
                    ? "info"
                    : props.type === "cancel"
                    ? "cross"
                    : props.type === "confirmed"
                    ? "users"
                    : "plus"
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
