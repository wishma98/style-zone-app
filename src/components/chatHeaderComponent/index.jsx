import React from "react";
import { FiPhone, FiVideo, FiMoreHorizontal } from "react-icons/fi";

const Index = ({ imgUrl, chatName, isOnline }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md border-b">
      <div className="flex items-center space-x-4">
        <img
          src={imgUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-sm font-manrope font-semibold text-grey-100">
            {chatName}
          </h2>
          {isOnline && (
            <p className="text-xs font-nunito font-normal text-grey-100">
              Online
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="text-gray-600">
          <FiPhone size={20} />
        </button>
        <button className="text-gray-600">
          <FiVideo size={20} />
        </button>
        <button className="text-gray-600">
          <FiMoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default Index;
