import React, { useEffect, useState } from "react";
import {
  Button,
  DateComponent,
  TagComponent,
  TimeComponent,
  UserProfileComponent,
} from "../../../components";
import { GetIconByName } from "../../../config/icon";
import moment from "moment";
import Scrollbars from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick/lib/slider";
import { closeServicesDetailsModal } from "./redux/service-modal-action";

const Index = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(moment().date());
  const [viewPointWidth, setViewPointWidth] = useState(0);
  const [viewPointHeight, setViewPointHeight] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const settings = {
    variableWidth: true,
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  //   const settingsDays = {
  //     variableWidth: true,
  //     className: "slider variable-width",
  //     dots: false,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     initialSlide: 0,
  //   };

  const timeSlots = [
    "00:00 AM",
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const { isOpenServicesDetailsModal, servicesData } = useSelector(
    ({ serviceDetailsReducer }) => serviceDetailsReducer
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

  // Get the start of the month and days in the month
  const startOfMonth = currentDate.startOf("month").day(); // Day index (0=Sunday, 1=Monday, etc.)
  const daysInMonth = currentDate.daysInMonth();

  // Handle previous month click
  const prevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };

  // Handle next month click
  const nextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  // Handle day selection
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Render days
  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === selectedDay;
      days.push(
        <DateComponent
          key={i}
          dayName={currentDate.clone().date(i).format("ddd")}
          date={i}
          isActive={isSelected}
          onClick={() => handleDayClick(i)}
        />
      );
    }
    return days;
  };

  const renderTimes = () => {
    const times = [];
    for (let i = 1; i <= timeSlots; i++) {
      times.push(
        <div className="mx-2">
          <TimeComponent
            key={i}
            onClick={() => handleTimeClick(timeSlots[i])}
            title={timeSlots[i]}
            isActive={selectedTime === timeSlots[i]}
          />
        </div>
      );
    }
    return times;
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-10 z-[70] ${
          isOpenServicesDetailsModal ? "block" : "hidden"
        }`}
        onClick={() => dispatch(closeServicesDetailsModal())}
      />
      <div
        className={`animate__animated absolute top-[10%] ${
          isOpenServicesDetailsModal ? "block animate__slideInUp" : " hidden"
        } bg-white flex flex-col rounded-t-lg shadow-lg w-full h-[90%] z-[90] p-4`}
      >
        {/* Close button */}
        <div className="flex flex-row left-[90%] absolute">
          <button
            className="absolute top-1 p-1 text-16px text-grey-100 border-2 rounded-full border-grey-100"
            onClick={() => dispatch(closeServicesDetailsModal())}
          >
            {GetIconByName("cross")}
          </button>
        </div>
        <div
          className={`w-screen h-[200px] lg:h-[376px] xl:h-[376px] mx-[-16px] mt-[-16px] rounded-t-lg`}
        >
          <img
            src={servicesData?.imgUrl}
            alt="active-image"
            className="object-cover w-full h-[200px] lg:h-[376px] xl:h-[376px] rounded-t-lg"
          />
        </div>
        <Scrollbars
          onScroll={handleOnScroll}
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
          )}
          style={{ height: viewPointHeight - 200 }}
        >
          <>
            <div className="font-manrope text-24px font-bold mt-6 mb-2">
              {servicesData?.title}
            </div>
            <div className="flex flex-col justify-between border-b pb-6 border-grey-40">
              <div className="flex flex-row items-center gap-1 font-16px font-normal font-nunito">
                {GetIconByName("time")}
                2,5 hours service
                {/* {props.time} */}
              </div>
              <div className="flex flex-row justify-between mt-3">
                <div className="flex flex-row items-center gap-1">
                  <div className="text-24px font-bold text text-[#191818] font-manrope">
                    ${parseInt(servicesData?.price) - 10}
                  </div>
                  <div className="text-16px font-normal line-through text-[#50555C] font-nunito">
                    ${servicesData?.price}
                  </div>
                </div>
                {servicesData?.tagName && (
                  <div className="flex">
                    <TagComponent
                      iconName={"tag"}
                      tagName={servicesData?.tagName}
                    />
                  </div>
                )}
              </div>
            </div>

            {/*line break*/}
            <div className="pt-6 font-manrope font-16px font-bold ">
              About Service
            </div>
            <p className="font-nunito font-14px font-normal text-[#50555C]">
              {servicesData?.description}
            </p>
            {/* specialist */}
            <section>
              <div className="flex flex-col justify-between gap-4">
                <div className="text-brand text-14px font-manrope my-6 font-bold">
                  Specialist
                </div>

                {/* <Slider {...settings} className="mt-4"> */}
                <div className="flex flex-row gap-3 overflow-x-scroll">
                  <UserProfileComponent
                    imageUrl={require("../../../assets/images/ronold.png")}
                    name={"Ronald"}
                    isActive={userName === "Ronald"}
                    onClick={() => setUserName("Ronald")}
                  />
                  <UserProfileComponent
                    imageUrl={require("../../../assets/images/marry.png")}
                    name={"Merry"}
                    isActive={userName === "Merry"}
                    onClick={() => setUserName("Merry")}
                  />
                  <UserProfileComponent
                    imageUrl={require("../../../assets/images/bella.png")}
                    name={"Bella"}
                    isActive={userName === "Bella"}
                    onClick={() => setUserName("Bella")}
                  />
                  <UserProfileComponent
                    imageUrl={require("../../../assets/images/joseph.png")}
                    name={"Joseph"}
                    isActive={userName === "Joseph"}
                    onClick={() => setUserName("Joseph")}
                  />
                </div>
                {/* </Slider> */}
              </div>
              {/* date */}
              <div className="mt-4">
                <div className=" flex flex-col justify-between ml-4 gap-4">
                  <div className="text-brand text-14px font-manrope font-bold">
                    Date
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div
                      className="cursor-pointer text-24px text-grey-100"
                      onClick={prevMonth}
                    >
                      {GetIconByName("leftArrow")}
                    </div>
                    <div className="font-manrope text-14px font-bold text-grey-100">
                      {currentDate.format("MMMM, YYYY")}
                    </div>
                    <div
                      className="cursor-pointer text-24px text-grey-100"
                      onClick={nextMonth}
                    >
                      {GetIconByName("rightArrow")}
                    </div>
                  </div>
                  {/* <Slider {...settings} className="mt-4"> */}
                  <div className="flex flex-row gap-2 py-1 overflow-x-scroll">
                    {renderDays()}
                  </div>
                  {/* </Slider> */}
                </div>
              </div>
              {/* time */}
              <div className="flex flex-col justify-between my-4 gap-2">
                <div className="text-brand text-14px font-manrope font-bold">
                  Time
                </div>
                {/* <Slider {...settingsDays} className="mt-4"> */}
                <div className="flex flex-row gap-2 py-1 overflow-x-scroll">
                  {timeSlots.map((time, index) => (
                    <TimeComponent
                      key={index}
                      onClick={() => handleTimeClick(time)}
                      title={time}
                      isActive={selectedTime === time}
                    />
                  ))}
                </div>
                {/* </Slider> */}
              </div>
            </section>
            {/* note */}
            <div className="text-brand text-14px font-manrope font-bold my-6">
              Notes
            </div>
            <textarea
              className="w-full h-[94px] bg-[#F0F3F6] py-16px px-24px rounded-xl
         placeholder:text-[#ADB3BC] placeholder:font-normal text-14px"
              placeholder="Type your notes here"
            />
          </>
        </Scrollbars>
        {/* button */}
        <div className="my-0 mx-auto lg:w-3/4 sm:w-full md:w-3/4 pt-4">
          <Button variant={"btn-brown"}>{"Add to Booking Chart"}</Button>
        </div>
      </div>
    </>
  );
};

export default Index;
