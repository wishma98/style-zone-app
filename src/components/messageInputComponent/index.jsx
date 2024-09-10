import React, { useEffect, useRef, useState } from "react";
import { FiPaperclip, FiSend } from "react-icons/fi";

const MessageInput = ({ onSend, setIsTyping }) => {
  const [message, setMessage] = useState("");

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

  const handleSend = () => {
    const currentTime = new Date();
    if (message.trim()) {
      onSend({ text: message, isSender: true, time: currentTime });
      setMessage("");
      setIsTyping(false); // Stop typing when the message is sent
    }
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };
  return (
    <div className="flex items-center p-4 bg-white border-t">
      <button onClick={handleFileUpload} className="mr-3 text-gray-500">
        <FiPaperclip size={20} />
      </button>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={(e) => console.log(e.target.files)} // Handle file upload
      />
      <input
        type="text"
        placeholder="Type a message"
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-3 rounded-full bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-primary-light"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        value={message}
      />
      <button
        className="ml-3 bg-brand-primary-light text-white p-3 rounded-full"
        onClick={handleSend}
      >
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default MessageInput;
