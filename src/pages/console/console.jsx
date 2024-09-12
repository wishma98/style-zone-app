import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import NavigationBar from "./navigationBar";
import { Booking, Dashboard, Notifications, Profile, Services } from "..";
import Scrollbars from "react-custom-scrollbars-2";
import { NotificationModal } from "../modals";
import { useSelector } from "react-redux";

const Index = (props) => {
  const [viewPointWidth, setViewPointWidth] = useState(0);
  const [viewPointHeight, setViewPointHeight] = useState(0);

  const { isOpenNotificationModal } = useSelector(
    ({ notificationsReducer }) => notificationsReducer
  );

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

  return (
    <div className={"bg-white h-full flex flex-col justify-between"}>
      {isOpenNotificationModal && <NotificationModal />}
      <Scrollbars
        onScroll={handleOnScroll}
        renderView={(props) => (
          <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
        )}
        style={{ height: viewPointHeight }}
      >
        {props.location.pathname === "/" && <Dashboard />}
        {props.location.pathname === "/services" && <Services />}
        {props.location.pathname === "/booking" && <Booking />}
        {props.location.pathname === "/notifications" && <Notifications />}
        {props.location.pathname === "/profile" && <Profile />}
      </Scrollbars>
      <footer className="w-full fixed bottom-0 z-50">
        <NavigationBar />
      </footer>
    </div>
  );
};

export default withRouter(Index);
