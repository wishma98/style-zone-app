import React, { useEffect, useState } from "react";
import {
  Button,
  FormHeader,
  Input,
  ItemCard,
  MenuComponent,
  PageNavigation,
  RecentCard,
} from "../../components";
import { GetIconByName } from "../../config/icon";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

const Index = (props) => {
  const [searchItem, setSearchItem] = useState("");

  const [viewPointWidth, setViewPointWidth] = useState(0);

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
  const [itemsList, setItemsList] = useState([
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      price: "$50",
      createdAt: "2024-08-10T13:13:36.818+00:00",
      description:
        "Layered hair is a hairstyle that gives the illusion of Layered hair is a hairstyle that gives the illusion of",
      tagName: "50%",
      isActive: false,
    },
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      price: "$50",
      createdAt: "2024-08-10T13:13:36.818+00:00",
      description:
        "Layered hair is a hairstyle that gives the illusion of Layered hair is a hairstyle that gives the illusion of",
      tagName: "",
      isActive: false,
    },
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      price: "$50",
      createdAt: "2024-08-10T13:13:36.818+00:00",
      description:
        "Layered hair is a hairstyle that gives the illusion of Layered hair is a hairstyle that gives the illusion of",
      tagName: "50%",
      isActive: false,
    },
  ]);

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
  const updatedItemsList = { ...itemsList };

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

  const renderItemsList = () => {
    let content = [];
    for (let idx in itemsList) {
      content.push(
        <ItemCard
          imgUrl={updatedItemsList[idx].imgUrl}
          title={updatedItemsList[idx].title}
          price={updatedItemsList[idx].price}
          createdAt={updatedItemsList[idx].createdAt}
          description={
            viewPointWidth > 1028
              ? updatedItemsList[idx].description.substring(0, 70).trimEnd() +
                "..."
              : updatedItemsList[idx].description.substring(0, 50).trimEnd() +
                "..."
          }
          tagName={updatedItemsList[idx].tagName}
          isActive={updatedItemsList[idx].isActive}
          onClick={() => {
            updatedItemsList[idx].isActive = !updatedItemsList[idx].isActive;
            setItemsList(updatedItemsList);
          }}
        />
      );
    }
    return content;
  };

  return (
    <div className=" relative h-auto mb-8 px-5">
      <header className={" mx-[-14px]"}>
        <PageNavigation
          title={"Services"}
          onClick={() => {
            props.history.push("/");
          }}
        />
      </header>
      <div className="flex flex-row justify-between items-center mt-4">
        <FormHeader
          title={"Hello, Delreen"}
          subTitle={"Find the service you want, and treat yourself"}
        />
        <div className="flex">
          <Button size="md" variant={"iconButton"}>
            {GetIconByName("search")}
          </Button>
        </div>
      </div>
      {/* search bar */}
      <div className="mt-7">
        <Input
          placeholder={"Search service.."}
          className={"relative"}
          required={true}
          type="text"
          phoneNo={false}
          leftIcon={"search"}
          variant="normal"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
      </div>
      {/* recent */}
      <section>
        <div className="flex flex-row justify-between items-center mt-4 mb-5">
          <div className="text-grey-80 text-16px font-nunito font-normal">
            Recents
          </div>
          <div className="text-brand text-16px font-manrope font-semibold cursor-pointer hover:underline">
            Clear all
          </div>
        </div>
        <div className="flex flex-col">
          <RecentCard itemName={"Hair service"} />
          <RecentCard itemName={"Nail"} />
          <RecentCard itemName={"Wax"} />
        </div>
      </section>
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
        <div className="flex flex-row flex-wrap justify-between mt-4 gap-4">
          {renderItemsList()}
        </div>
      </section>
    </div>
  );
};

export default withRouter(Index);
