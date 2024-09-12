import React from "react";
import { PageNavigation, TabComponent } from "../../components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from "uuid";
import All from "./All";
import Waiting from "./Waiting";
import Confirmed from "./Confirmed";
import Cancel from "./Cancel";
import Next from "./Next";
import History from "./History";

const Index = (props) => {
  //======= tab component json ======//
  let tabJson = [
    {
      id: uuidv4(),
      key: 1,
      tabName: "All",
      content: <All />,
    },
    {
      id: uuidv4(),
      key: 2,
      tabName: "Waiting",
      content: <Waiting />,
    },
    {
      id: uuidv4(),
      key: 3,
      tabName: "Confirmed",
      content: <Confirmed />,
    },
    {
      id: uuidv4(),
      key: 4,
      tabName: "Cancel",
      content: <Cancel />,
    },
  ];

  let tabJsonBottom = [
    {
      id: uuidv4(),
      key: 1,
      tabName: "Next  Treatments",
      content: <Next />,
    },
    {
      id: uuidv4(),
      key: 2,
      tabName: "History",
      content: <History />,
    },
  ];

  return (
    <div className=" relative h-auto mb-8 px-5">
      <header className={" mx-[-14px]"}>
        <PageNavigation
          title={"Booking"}
          onClick={() => {
            props.history.push("/");
          }}
        />
      </header>
      <div className="text-grey-100 text-16px font-manrope font-bold mt-4">
        Waiting for
      </div>
      <TabComponent object={tabJson} />
      <div className="mt-4">
        <TabComponent object={tabJsonBottom} />
      </div>
    </div>
  );
};

export default withRouter(Index);
