import React, { useState } from "react";
import {
  ActiveCard,
  Button,
  FormHeader,
  MenuComponent,
  ReviewCard,
} from "../../components";
import { GetIconByName } from "../../config/icon";

const Index = (props) => {
  const [menuItems, setMenuItems] = useState({
    haircut: {
      key: "haircut",
      iconName: require("../../assets/images/Haircut.png"),
      menuName: "Haircut",
      isActive: false,
    },
    nails: {
      key: "nails",
      iconName: require("../../assets/images/Nails.png"),
      menuName: "Nails",
      isActive: false,
    },
    facial: {
      key: "facial",
      iconName: require("../../assets/images/Facial.png"),
      menuName: "Facial",
      isActive: false,
    },
    coloring: {
      key: "coloring",
      iconName: require("../../assets/images/Coloring.png"),
      menuName: "Coloring",
      isActive: false,
    },
    spa: {
      key: "spa",
      iconName: require("../../assets/images/Spa.png"),
      menuName: "Spa",
      isActive: false,
    },
    waxing: {
      key: "waxing",
      iconName: require("../../assets/images/Waxing.png"),
      menuName: "Waxing",
      isActive: false,
    },
    makeup: {
      key: "makeup",
      iconName: require("../../assets/images/Makeup.png"),
      menuName: "Makeup",
      isActive: false,
    },
    massage: {
      key: "massage",
      iconName: require("../../assets/images/Massage.png"),
      menuName: "Massage",
      isActive: false,
    },
  });
  const [mobileMenuItemsTop, setMobileMenuItemsTop] = useState({
    haircut: {
      key: "haircut",
      iconName: require("../../assets/images/Haircut.png"),
      menuName: "Haircut",
      isActive: false,
    },
    nails: {
      key: "nails",
      iconName: require("../../assets/images/Nails.png"),
      menuName: "Nails",
      isActive: false,
    },
    facial: {
      key: "facial",
      iconName: require("../../assets/images/Facial.png"),
      menuName: "Facial",
      isActive: false,
    },
    coloring: {
      key: "coloring",
      iconName: require("../../assets/images/Coloring.png"),
      menuName: "Coloring",
      isActive: false,
    },
  });
  const [mobileMenuItemsBottom, setMobileMenuItemsBottom] = useState({
    spa: {
      key: "spa",
      iconName: require("../../assets/images/Spa.png"),
      menuName: "Spa",
      isActive: false,
    },
    waxing: {
      key: "waxing",
      iconName: require("../../assets/images/Waxing.png"),
      menuName: "Waxing",
      isActive: false,
    },
    makeup: {
      key: "makeup",
      iconName: require("../../assets/images/Makeup.png"),
      menuName: "Makeup",
      isActive: false,
    },
    massage: {
      key: "massage",
      iconName: require("../../assets/images/Massage.png"),
      menuName: "Massage",
      isActive: false,
    },
  });

  const onClickMenus = async (selected_key, type) => {
    const updateMenuList =
      type === "top"
        ? { ...mobileMenuItemsTop }
        : type === "bottom"
        ? { ...mobileMenuItemsBottom }
        : { ...menuItems };

    for (let key of Object.keys(updateMenuList)) {
      if (key === selected_key) {
        updateMenuList[key].isActive = true;
      } else {
        updateMenuList[key].isActive = false;
      }
    }
    type === "top"
      ? setMobileMenuItemsTop(updateMenuList)
      : type === "bottom"
      ? setMobileMenuItemsBottom(updateMenuList)
      : setMenuItems(updateMenuList);
  };

  const updatedList = { ...menuItems };
  const updatedListTop = { ...mobileMenuItemsTop };
  const updatedListBottom = { ...mobileMenuItemsBottom };

  const renderMenus = () => {
    let content = [];
    for (let idx in menuItems) {
      content.push(
        <MenuComponent
          iconName={updatedList[idx].iconName}
          menuName={updatedList[idx].menuName}
          isActive={updatedList[idx].isActive}
          onClick={() => onClickMenus(updatedList[idx].key, "default")}
        />
      );
    }
    return content;
  };

  const renderMenusMobileTop = () => {
    let content = [];
    for (let idx in mobileMenuItemsTop) {
      content.push(
        <MenuComponent
          iconName={updatedListTop[idx].iconName}
          menuName={updatedListTop[idx].menuName}
          isActive={updatedListTop[idx].isActive}
          onClick={() => onClickMenus(updatedListTop[idx].key, "top")}
        />
      );
    }
    return content;
  };

  const renderMenusMobileBottom = () => {
    let content = [];
    for (let idx in mobileMenuItemsBottom) {
      content.push(
        <MenuComponent
          iconName={updatedListBottom[idx].iconName}
          menuName={updatedListBottom[idx].menuName}
          isActive={updatedListBottom[idx].isActive}
          onClick={() => onClickMenus(updatedListBottom[idx].key, "default")}
        />
      );
    }
    return content;
  };

  return (
    <div className=" relative h-auto mb-8 py-11 px-4">
      <header className={props.className}>
        <div className="flex flex-row justify-between items-center">
          <FormHeader
            title={"The style Zone  "}
            subTitle={"Find the service you want, and treat yourself"}
          />
          <div className="flex">
            <Button size="md" variant={"iconButton"}>
              {GetIconByName("search")}
            </Button>
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
            {renderMenus()}
          </div>
        </div>
        <div className="sm:block md:block lg:hidden max-md:block max-lg:hidden mt-4">
          <div className="flex flex-row flex-wrap gap-4 justify-between">
            {renderMenusMobileTop()}
          </div>
          <div className="flex flex-row flex-wrap gap-4 justify-between mt-4">
            {renderMenusMobileBottom()}
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
        <Button size="lg" variant={"btn-brown"}>
          {"Book Now"}
        </Button>
      </div>
    </div>
  );
};

export default Index;
