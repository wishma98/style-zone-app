import React from "react";

const Index = (props) => {
  return (
    <div className="flex flex-col items-start">
      <div className="font-manrope font-bold text-grey-100 text-24px">
        {props.title}
      </div>
      <div className="font-nunito font-normal text-grey-80 text-14px">
        {props.subTitle}
      </div>
    </div>
  );
};

export default Index;
