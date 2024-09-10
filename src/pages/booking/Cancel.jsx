import React, { useState } from "react";
import { ItemCard } from "../../components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Index = (props) => {
  const [itemsList, setItemsList] = useState([
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      closeDate: "2024-09-14",
      closeTime: "08.00 am",
      description: "Re order",
      tagName: "50%",
      type: "cancel",
      isActive: false,
    },
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      closeDate: "2024-09-14",
      closeTime: "08.00 am",
      description: "Re order",
      tagName: "",
      type: "cancel",
      isActive: false,
    },
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      closeDate: "2024-09-14",
      closeTime: "08.00 am",
      description: "Re order",
      tagName: "50%",
      type: "cancel",
      isActive: false,
    },
    {
      imgUrl: require("../../assets/images/cardImage.png"),
      title: "Woman Blunt Cut",
      closeDate: "2024-09-14",
      closeTime: "08.00 am",
      description: "Re order",
      tagName: "50%",
      type: "cancel",
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
          closeDate={updatedItemsList[idx].closeDate}
          closeTime={updatedItemsList[idx].closeTime}
          description={
            updatedItemsList[idx].description.substring(0, 70).trimEnd() + "..."
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
    <section>
      <div className="flex flex-row flex-wrap justify-between my-4 gap-4">
        {renderItemsList()}
      </div>
    </section>
  );
};

export default withRouter(Index);
