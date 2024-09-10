import React, { useState } from "react";
import { ItemCard } from "../../components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Index = (props) => {
  const [itemsList, setItemsList] = useState([
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      price: "$50",
      createdAt: "2024-08-10T13:13:36.818+00:00",
      description:
        "Layered hair is a hairstyle that gives the illusion of Layered hair is a hairstyle that gives the illusion of",
      tagName: "50%",
      type: "pending",
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
      type: "pending",
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
      type: "pending",
      isActive: false,
    },
  ]);

  const updatedItemsList = { ...itemsList };

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
            updatedItemsList[idx].description.substring(0, 70).trimEnd() + "..."
          }
          tagName={updatedItemsList[idx].tagName}
          isActive={updatedItemsList[idx].isActive}
          type={updatedItemsList[idx].type}
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
    <section>
      <div className="flex flex-row flex-wrap justify-between my-4 gap-4">
        {renderItemsList()}
      </div>
    </section>
  );
};

export default withRouter(Index);
