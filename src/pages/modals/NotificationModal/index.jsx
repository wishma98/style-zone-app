import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNotificationModal } from "./redux/notification-modal-action";
import { Button, ItemCard } from "../../../components";
import { GetIconByName } from "../../../config/icon";
import Scrollbars from "react-custom-scrollbars-2";

const Index = () => {
  const [viewPointWidth, setViewPointWidth] = useState(0);
  const [viewPointHeight, setViewPointHeight] = useState(0);

  const { isOpenNotificationModal, notificationData } = useSelector(
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

  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-10 z-[70] ${
          isOpenNotificationModal ? "block" : "hidden"
        }`}
      />
      <div
        className={`animate__animated absolute top-[10%] ${
          isOpenNotificationModal ? "block animate__slideInUp" : " hidden"
        } bg-white flex flex-col gap-10 rounded-t-lg shadow-lg w-full h-[90%] z-[90] p-4`}
      >
        {/* Close button */}
        <div className="flex flex-row left-[90%] absolute">
          <button
            className="absolute top-1 p-1 text-16px text-grey-100 border-2 rounded-full border-grey-100"
            onClick={() => dispatch(closeNotificationModal())}
          >
            {GetIconByName("cross")}
          </button>
        </div>

        {/* Title */}
        <h2 className="text-24px font-bold font-manrope mt-10 mb-2 text-center">
          Woman Medium Blunt Cut
          {/* {notificationData?.title} */}
        </h2>
        <Scrollbars
          onScroll={handleOnScroll}
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
          )}
          style={{ height: viewPointHeight - 200 }}
        >
          {/* About service */}
          <div className="mb-4">
            <h3 className="font-bold text-16px font-manrope mb-1">
              About Service
            </h3>
            <p className="text-grey-80 font-nunito font-normal text-14px">
              A blunt cut bob is a shorter hairstyle that's cut into a straight
              line at the ends. Bobs have proven themselves to be transcending
              of time with its endless variations.
              {/* {notificationData?.description} */}
            </p>
          </div>

          {/* Service card */}
          <ItemCard
            imgUrl={require("../../../assets/images/cardImage.png")}
            title={"Woman Blunt Cut"}
            closeDate={"2024-09-14"}
            closeTime={"08.00 am"}
            description={"Create a booking "}
            tagName={""}
            isActive={false}
            type={"closed"}
          />
        </Scrollbars>
        {/* Add to booking button */}

        <Button size="lg" variant={"btn-brown"}>
          {"Add to Booking Chart"}
        </Button>
      </div>
    </>
  );
};

export default Index;
