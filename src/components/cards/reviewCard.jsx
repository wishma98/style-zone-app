import { Avatar, Rate } from "antd";
import moment from "moment";
import React from "react";

const Index = (props) => {
  return (
    <>
      <div
        className={`flex flex-row items-start justify-between p-4 gap-3 w-full`}
      >
        <div className="flex flex-row justify-start">
          {props.imgUrl && (
            <img
              src={
                props && props.imgUrl
                  ? props.imgUrl
                  : require("../../assets/images/default_avatar.png")
              }
              className={`w-[48px] h-[48px] object-cover rounded-full`}
              alt=""
            />
          )}
          {!props.imgUrl && (
            <Avatar
              style={{
                backgroundColor: "#FF4945",
                whiteSpace: "pre-wrap",
                textAlign: "center",
              }}
              size="default"
            >
              {props.name.substring(0, 2)}
            </Avatar>
          )}
        </div>
        <div className="flex flex-col w-full ml-2">
          <div className={"flex flex-row justify-between items-center"}>
            <div className="font-nunito font-normal text-16px text-grey-100">
              {props.name}
            </div>
            <div className="font-nunito font-normal text-12px text-grey-60">
              {moment(props.createAt).startOf("day").fromNow()}
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Rate
              disabled
              allowHalf
              defaultValue={props.rate}
              className={"ant-rate"}
            />
          </div>

          <div className="mt-4 font-nunito font-normal text-14px text-grey-80 flex flex-wrap">
            {props.comment}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
