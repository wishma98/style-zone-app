import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import NavigationComponent from "./navigationComponent";

const NavigationBar = (props) => {
  const [menuName, setMenuName] = useState("home");
  return (
    <div className="w-full flex space-x-10 justify-around bg-white p-4 border-b">
      <NavigationComponent
        iconName={<FaHome />}
        isActive={menuName === "home"}
        onClick={() => {
          setMenuName("home");
        }}
      />
      <NavigationComponent
        iconName={<FaInfoCircle />}
        isActive={menuName === "info"}
        onClick={() => {
          setMenuName("info");
        }}
      />
      <NavigationComponent
        iconName={<FaCalendarAlt />}
        isActive={menuName === "schedule"}
        onClick={() => {
          setMenuName("schedule");
        }}
      />
      <NavigationComponent
        iconName={<FaEnvelope />}
        isActive={menuName === "notification"}
        activeNotification={true}
        onClick={() => {
          setMenuName("notification");
        }}
      />
      <NavigationComponent
        iconName={<FaUserCircle />}
        isActive={menuName === "profile"}
        onClick={() => {
          setMenuName("profile");
        }}
      />
    </div>
  );
};

export default NavigationBar;
