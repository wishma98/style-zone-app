import React, { useEffect, useState } from "react";
import {
  ChatHeaderComponent,
  ChatMessageComponent,
  MessageInputComponent,
} from "../../components";
import { io } from "socket.io-client";
import Scrollbars from "react-custom-scrollbars-2";
import moment from "moment";

const socket = io("http://localhost:3000");

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSender, setIsSender] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);
  const [viewPointWidth, setViewPointWidth] = useState(0);
  const [viewPointHeight, setViewPointHeight] = useState(0);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    window.addEventListener("scroll", handleOnScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setViewPointWidth(window.innerWidth);
    setViewPointHeight(window.innerHeight);
  };

  const handleOnScroll = () => {
    let scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    let scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    let clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
  };
  // Set up event listeners for resize and scroll, and socket events
  useEffect(() => {
    // Listen for socket events
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("typing", (isTypingStatus) => {
      setIsTyping(isTypingStatus);
    });

    // Cleanup event listeners and socket events on unmount
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
      window.removeEventListener("scroll", handleOnScroll);
      socket.off("message");
      socket.off("typing");
    };
  }, []);

  // Emit typing status to the server
  const handleTyping = (isTyping) => {
    socket.emit("typing", isTyping);
    setIsTyping(isTyping);
  };

  const selectFile = (file) => {
    setSelectedFile(file);
  };
  // Send message function
  const sendMessage = (message) => {
    socket.emit("message", message);
    setIsSender(message?.isSender || false);
    setMessages((prevMessages) => [...prevMessages, message]);
    handleTyping(false);
  };

  return (
    <div className="flex flex-col mx-[-14px]">
      {/* Header */}
      <ChatHeaderComponent
        isOnline={true}
        chatName={"The Style Zone"}
        isVideoCall={true}
        imgUrl={require("../../assets/images/user.png")}
      />
      <Scrollbars
        onScroll={handleOnScroll}
        renderView={(props) => (
          <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
        )}
        style={{
          height: selectedFile
            ? viewPointWidth < 1028
              ? viewPointHeight - 310
              : viewPointHeight - 360
            : viewPointWidth < 1028
            ? viewPointHeight - 240
            : viewPointHeight - 280,
        }}
      >
        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <>
              {console.log({ msg })}
              <ChatMessageComponent
                key={index} // Make sure to provide a unique key for list rendering
                message={msg.text}
                isSender={msg.isSender}
                time={moment(msg.time).format("LT")}
                file={msg?.file}
                image={require("../../assets/images/user.png")}
              />
            </>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <ChatMessageComponent
              message=""
              isTyping={true}
              isSender={isSender}
            />
          )}
        </div>
      </Scrollbars>

      {/* Message Input */}
      <MessageInputComponent
        onSend={sendMessage}
        setIsTyping={handleTyping}
        setSelectFile={selectFile}
      />
    </div>
  );
};

export default Messages;
