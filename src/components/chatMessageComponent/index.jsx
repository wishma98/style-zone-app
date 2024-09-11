import React from "react";

const Index = ({ file, message, isSender, isTyping, time, image }) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      {!isSender && image && (
        <img src={image} alt="user-img" className="w-8 h-8 rounded-full mr-2" />
      )}
      {!isTyping && (
        <div className="flex flex-col">
          {file ? (
            <div
              className={`w-56 ${
                isSender
                  ? "bg-brand-primary-light rounded-sender "
                  : "bg-grey-100 rounded-receiver "
              } text-white p-3 max-w-xs`}
            >
              {file.fileType.startsWith("image/") ? (
                <img
                  src={file.fileContent}
                  alt={file.fileName}
                  className="w-full h-full rounded-sm"
                />
              ) : (
                <a
                  href={file.fileContent}
                  download={file.fileName}
                  className="text-blue-500 underline"
                >
                  {file.fileName}
                </a>
              )}
            </div>
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
          <span className="block w-2 h-2 bg-gray-500 rounded-full animate-typing-dot delay-200"></span>
          <span className="block w-2 h-2 bg-gray-500 rounded-full animate-typing-dot delay-75"></span>
          <span className="block w-2 h-2 bg-gray-500 rounded-full animate-typing-dot delay-1000"></span>
        </div>
      )}
    </div>
  );
};

export default Index;
