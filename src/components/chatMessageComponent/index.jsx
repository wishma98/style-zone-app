import React from "react";

const Index = ({ imgUrl, message, isSender, isTyping, time, image }) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      {!isSender && (
        <img
          src={imgUrl}
          alt="Sender Avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
      )}
      {!isTyping && (
        <div>
          {image ? (
            <img
              src={image}
              alt="message-img"
              className="w-32 h-32 rounded-lg"
            />
          ) : (
            <div
              className={`font-nunito font-normal text-14px ${
                isSender
                  ? "bg-brand-primary-light rounded-sender "
                  : "bg-grey-100 rounded-receiver "
              } text-white p-3 max-w-xs`}
            >
              <p>{message}</p>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
      )}
      {isTyping && (
        <div
          className={`flex items-center space-x-2 font-nunito font-normal text-14px ${
            isSender
              ? "bg-brand-primary-light rounded-sender "
              : "bg-grey-100 rounded-receiver "
          } text-white p-3 max-w-xs`}
        >
          <span className="block w-2 h-2 bg-gray-500 rounded-full animate-typing-dot"></span>
          <span className="block w-2 h-2 bg-gray-500 rounded-full animate-typing-dot delay-200"></span>
          <span className="block w-2 h-2 bg-gray-500 rounded-full animate-typing-dot delay-400"></span>
        </div>
      )}
    </div>
  );
};

export default Index;
