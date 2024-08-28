import React from "react";
import {
  ActiveCard,
  Button,
  FormHeader,
  MenuComponent,
} from "../../components";
import { GetIconByName } from "../../config/icon";
import { withRouter } from "react-router-dom";

const Index = () => {
  return (
    <div
      className={
        "bg-white h-full flex flex-col py-11 px-4 justify-between container"
      }
    >
      <div className="flex flex-row justify-between items-center">
        <FormHeader
          title={"The style Zone  "}
          subTitle={"Find the service you want, and treat yourself"}
        />
        <div className="flex">
          <Button variant={"iconButton"}>{GetIconByName("search")}</Button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <div className="text-brand text-16px font-manrope font-bold">
          What do you want to do?
        </div>
        <div className="text-brand text-16px font-manrope font-semibold">
          View all
        </div>
      </div>
      <div className="sm:hidden md:hidden lg:block max-md:hidden max-lg:block mt-4">
        <div className=" flex flex-row flex-wrap gap-4 justify-between">
          <MenuComponent
            iconName={require("../../assets/images/Haircut.png")}
            menuName="Haircut"
          />
          <MenuComponent
            iconName={require("../../assets/images/Nails.png")}
            menuName="Nails"
          />
          <MenuComponent
            iconName={require("../../assets/images/Facial.png")}
            menuName="Facial"
          />
          <MenuComponent
            iconName={require("../../assets/images/Coloring.png")}
            menuName="Coloring"
          />
          <MenuComponent
            iconName={require("../../assets/images/Spa.png")}
            menuName="Spa"
          />
          <MenuComponent
            iconName={require("../../assets/images/Waxing.png")}
            menuName="Waxing"
          />
          <MenuComponent
            iconName={require("../../assets/images/Makeup.png")}
            menuName="Makeup"
          />
          <MenuComponent
            iconName={require("../../assets/images/Message.png")}
            menuName="Message"
          />
        </div>
      </div>
      <div className="sm:block md:block lg:hidden max-md:block max-lg:hidden mt-4">
        <div className="flex flex-row flex-wrap gap-4 justify-between">
          <MenuComponent
            iconName={require("../../assets/images/Haircut.png")}
            menuName="Haircut"
          />
          <MenuComponent
            iconName={require("../../assets/images/Nails.png")}
            menuName="Nails"
          />
          <MenuComponent
            iconName={require("../../assets/images/Facial.png")}
            menuName="Facial"
          />
          <MenuComponent
            iconName={require("../../assets/images/Coloring.png")}
            menuName="Coloring"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-4 justify-between mt-4">
          <MenuComponent
            iconName={require("../../assets/images/Spa.png")}
            menuName="Spa"
          />
          <MenuComponent
            iconName={require("../../assets/images/Waxing.png")}
            menuName="Waxing"
          />
          <MenuComponent
            iconName={require("../../assets/images/Makeup.png")}
            menuName="Makeup"
          />
          <MenuComponent
            iconName={require("../../assets/images/Message.png")}
            menuName="Message"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <div className="text-brand text-16px font-manrope font-bold">
          The Style Zone Advice Hub
        </div>
        <div className="text-brand text-16px font-manrope font-semibold">
          Watch all
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between mt-4 gap-4">
        <ActiveCard
          imgUrl={require("../../assets/images/cardImage.png")}
          title={"Steps of the hair removal"}
          subTitle={"There are  12 steps"}
        />
        <ActiveCard
          imgUrl={require("../../assets/images/cardImage.png")}
          title={"Steps of the hair removal"}
          subTitle={"There are  12 steps"}
        />
      </div>
    </div>
  );
};

export default withRouter(Index);
