import React from "react";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  return (
    <div className="flex flex-row items-center">
      <div className="text-grey-100 text-24px">
        {GetIconByName("leftArrow")}
      </div>
      <h5 className="font-manrope font-bold text-grey-100 text-16px my-0 mx-auto">
        {props.title}
      </h5>
    </div>
  );
};

export default Index;
