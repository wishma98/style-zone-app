import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNotificationModal } from "./redux/notification-modal-action";
import { Button, ItemCard } from "../../../components";
import { GetIconByName } from "../../../config/icon";

const Index = () => {
  const { isOpenNotificationModal, notificationData } = useSelector(
    ({ notificationsReducer }) => notificationsReducer
  );
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`common-modal-out-bg-wrapper ${
          isOpenNotificationModal ? "block" : "hidden"
        }`}
      />
      <div
        className={`animate__animated absolute top-[10%] ${
          isOpenNotificationModal ? "block animate__bounceIn" : " hidden"
        } bg-white flex flex-col gap-10 rounded-lg shadow-lg w-full h-full z-[90] p-6`}
      >
        {/* Close button */}
        <div className="flex flex-row left-[94%] absolute">
          <button
            className="absolute top-4 right-4 p-1 text-24px text-grey-100 border-2 rounded-full border-grey-100"
            onClick={() => dispatch(closeNotificationModal())}
          >
            {GetIconByName("cross")}
          </button>
        </div>

        {/* Title */}
        <h2 className="text-24px font-bold font-manrope mt-14 mb-2 text-center">
          Woman Medium Blunt Cut
          {/* {notificationData?.title} */}
        </h2>

        {/* About service */}
        <div className="mb-4">
          <h3 className="font-bold text-16px font-manrope mb-1">
            About Service
          </h3>
          <p className="text-grey-80 font-nunito font-normal text-14px">
            A blunt cut bob is a shorter hairstyle that's cut into a straight
            line at the ends. Bobs have proven themselves to be transcending of
            time with its endless variations.
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

        {/* Add to booking button */}

        <Button size="lg" variant={"btn-brown"}>
          {"Add to Booking Chart"}
        </Button>
      </div>
    </>
  );
};

export default Index;
