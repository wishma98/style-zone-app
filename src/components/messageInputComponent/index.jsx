import React, { useEffect, useRef, useState } from "react";
import { FiPaperclip, FiSend } from "react-icons/fi";
import { GetIconByName } from "../../config/icon";

const MessageInput = ({ onSend, setIsTyping, setSelectFile }) => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle the typing state
  useEffect(() => {
    if (message.trim()) {
      setIsTyping(true); // User is typing
    } else {
      setIsTyping(false); // No typing
    }

    // Reset typing indicator when component is unmounted
    return () => setIsTyping(false);
  }, [message, setIsTyping]);

  useEffect(() => {
    if (selectedFile) {
      setSelectFile(true); // User is typing
    } else {
      setSelectFile(false); // No typing
    }

    // Reset typing indicator when component is unmounted
    return () => setSelectFile(false);
  }, [selectedFile, setSelectFile]);

  const handleSend = () => {
    const currentTime = new Date();
    if (message.trim() || selectedFile) {
      const fileData = selectedFile ? selectedFile : null;

      onSend({
        text: message,
        isSender: false,
        time: currentTime,
        file: fileData,
      });

      setMessage("");
      setIsTyping(false);
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile({
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        fileContent: URL.createObjectURL(file), // Generate a temporary local URL
      });
    }
  };

  return (
    <div className="flex flex-col h-auto items-start px-4 py-2 bg-white border-t">
      {selectedFile && (
        <div
          className=" w-16 h-16 rounded-sm my-1 ml-12 cursor-pointer"
          onClick={() => setSelectedFile(null)}
        >
          <div className="text-16px shadow-lg absolute ml-12 mt-1 text-white float-end">
            {GetIconByName("cross")}
          </div>
          {selectedFile.fileType.startsWith("image/") ? (
            <img
              src={selectedFile.fileContent}
              alt={selectedFile.fileName}
              className="w-full h-full rounded-sm"
            />
          ) : (
            <a
              href={selectedFile.fileContent}
              download={selectedFile.fileName}
              className="text-blue-500 underline"
            >
              {selectedFile.fileName}
            </a>
          )}
        </div>
      )}
      <div className="flex flex-row items-center w-full">
        <button
          onClick={() => document.getElementById("file-input").click()}
          className="mr-3 text-16px lg:text-xl xl:text-xl text-gray-500"
        >
          <FiPaperclip />
        </button>
        {/* Hidden file input */}
        <input
          type="file"
          id="file-input"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        <input
          type="text"
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 lg:p-3 xl:p-3 rounded-full bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-primary-light"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          value={message}
        />
        <button
          className="ml-3 bg-brand-primary-light text-white p-2 lg:p-3 xl:p-3 text-16px lg:text-xl xl:text-xl rounded-full"
          onClick={handleSend}
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
