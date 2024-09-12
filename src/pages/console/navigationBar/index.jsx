import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import NavigationComponent from "./navigationComponent";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

const NavigationBar = (props) => {
  return (
    <div className="w-full flex space-x-10 justify-around bg-white p-4 border-b">
      <NavigationComponent
        iconName={<FaHome />}
        isActive={props.location.pathname === "/"}
        onClick={() => {
          props.history.push("/");
        }}
      />
      <NavigationComponent
        iconName={<FaInfoCircle />}
        isActive={props.location.pathname === "/services"}
        onClick={() => {
          props.history.push("/services");
        }}
      />
      <NavigationComponent
        iconName={<FaCalendarAlt />}
        isActive={props.location.pathname === "/booking"}
        onClick={() => {
          props.history.push("/booking");
        }}
      />
      <NavigationComponent
        iconName={<FaEnvelope />}
        isActive={props.location.pathname === "/notifications"}
        activeNotification={true}
        onClick={() => {
          props.history.push("/notifications");
        }}
      />
      <NavigationComponent
        iconName={<FaUserCircle />}
        isActive={props.location.pathname === "/profile"}
        onClick={() => {
          props.history.push("/profile");
        }}
      />
    </div>
  );
};

export default withRouter(NavigationBar);
