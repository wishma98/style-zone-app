import React from "react";
import { Input, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { GetIconByName } from "../../config/icon";

const { Option } = Select;

const Index = (props) => {
  const getFlag = (value) => {
    let flag = "";
    switch (value) {
      case "+01":
        flag = require("../../assets/images/flags/usa.png");
        break;
      case "+94":
        flag = require("../../assets/images/flags/sl.png");
        break;

      default:
        flag = require("../../assets/images/flags/usa.png");
        break;
    }
    return flag;
  };
  return (
    <div
      className={`flex items-center px-6 py-4 bg-grey-20 focus:bg-white active:bg-white rounded-full ${props.className}`}
    >
      <img
        src={getFlag(props.optionValue)}
        alt="flag"
        className="w-6 h-6 rounded-full mr-2"
      />
      <Select
        defaultValue="+01"
        bordered={false}
        suffixIcon={GetIconByName("chevronDown")}
        className="text-grey-100 ml-1"
        onChange={props.onChangeOption}
        value={props.optionValue}
        dropdownStyle={{ backgroundColor: "#fff" }}
      >
        <Option key={"+01"} value="+01">
          +01
        </Option>
        <Option key={"+94"} value="+94">
          +94
        </Option>
      </Select>
      <div className="h-6 border-l border-gray-300 mx-2"></div>
      <Input
        placeholder={props.placeholder}
        bordered={false}
        className="flex-grow text-grey-20 bg-transparent focus:bg-white active:bg-white"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Index;
