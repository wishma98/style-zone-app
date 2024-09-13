import React, { useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import NavigationComponent from "../console/navigationBar/navigationComponent";
import Notifications from "./Notifications";
import Messages from "./Messages";

const Index = (props) => {
  const [menuName, setMenuName] = useState("message");

  return (
    <div className={`relative h-full p-4 ${props.className}`}>
      <header className={"grid grid-cols-2"}>
        <NavigationComponent
          menuName={"Messages"}
          isActive={menuName === "message"}
          onClick={() => {
            setMenuName("message");
          }}
        />
        <NavigationComponent
          menuName={"Notification"}
          isActive={menuName === "notification"}
          onClick={() => {
            setMenuName("notification");
          }}
        />
      </header>
      <div className="relative mt-4">
        {menuName === "notification" && <Notifications />}
        {menuName === "message" && <Messages />}
      </div>
    </div>
  );
};

export default withRouter(Index);
