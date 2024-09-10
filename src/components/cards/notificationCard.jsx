import React from "react";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  return (
    <>
      <div
        className={`flex flex-row justify-between items-center border-b py-4 gap-3 w-full`}
      >
        <div className="flex flex-row gap-3">
          <div className="flex items-center justify-center bg-brand-primary-light text-2xl text-brand-secondary w-12 h-12 min-w-12 rounded-full">
            {GetIconByName(props.iconName)}
          </div>
          <div className="font-manrope font-medium text-14px text-grey-100 max-w-[200px]">
            {props.message}
          </div>
        </div>
        <div className="flex flex-col w-auto justify-start items-end gap-2 py-4 pr-4">
          {props.time && (
            <div className="font-nunito font-normal text-12px text-grey-80">
              {props.time}
            </div>
          )}
          {!props.isNew && (
            <div className="w-2 h-2 rounded-full bg-brand-secondary" />
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
