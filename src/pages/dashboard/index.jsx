import React from "react";
import {
  ActiveCard,
  Button,
  FormHeader,
  MenuComponent,
  ReviewCard,
} from "../../components";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  return (
    <div className=" relative h-auto mb-8 py-11 px-4">
      <header className={props.className}>
        <div className="flex flex-row justify-between items-center">
          <FormHeader
            title={"The style Zone  "}
            subTitle={"Find the service you want, and treat yourself"}
          />
          <div className="flex">
            <Button variant={"iconButton"}>{GetIconByName("search")}</Button>
          </div>
        </div>
      </header>
      {/* menus */}
      <section>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="text-brand text-16px font-manrope font-bold">
            What do you want to do?
          </div>
          <div className="text-brand text-16px font-manrope font-semibold cursor-pointer hover:underline">
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
      </section>
      {/* active cards */}
      <section>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="text-brand text-16px font-manrope font-bold">
            The Style Zone Advice Hub
          </div>
          <div className="text-brand text-16px font-manrope font-semibold cursor-pointer hover:underline">
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
      </section>
      {/* reviews */}
      <section>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="text-brand text-16px font-manrope font-bold">
            What do you want to do?
          </div>
          <div className="text-brand text-16px font-manrope font-semibold cursor-pointer hover:underline">
            View all
          </div>
        </div>
        <div className="flex flex-col justify-between mt-2 gap-3">
          <ReviewCard
            name={"Jennie Whang"}
            createdAt={"2024-08-25T18:20:17.875+00:00"}
            rate={4.5}
            comment={
              "The place was clean, great service, stall are friendly. I will certainly recommend to my friends and visit again! ;)"
            }
          />
          <ReviewCard
            name={"Natalia"}
            createdAt={"2024-08-01T18:20:17.875+00:00"}
            rate={4.5}
            comment={
              "Very nice service from the specialist. I always going here for my treatment."
            }
          />
          <ReviewCard
            name={"Julia Martha"}
            createdAt={"2024-07-01T18:20:17.875+00:00"}
            rate={4}
            comment={"This is my favorite place to treat my hair :)"}
          />
        </div>
      </section>
      <div className="my-0 mx-auto lg:w-3/4 sm:w-full md:w-3/4 mt-14">
        <Button variant={"btn-brown"}>{"Book Now"}</Button>
      </div>
    </div>
  );
};

export default Index;
