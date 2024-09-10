import React from "react";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  return (
    <div className="flex flex-row justify-between items-center py-4 border-b cursor-pointer bg-white hover:bg-grey-40/30">
      <div className="text-grey-100 text-14px font-nunito font-normal">
        {props.itemName}
      </div>
      <div className="text-grey-80 text-16px cursor-pointer">
        {GetIconByName("cross")}
      </div>
    </div>
  );
};

export default Index;
