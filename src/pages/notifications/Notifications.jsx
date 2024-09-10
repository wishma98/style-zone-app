import React, { useState } from "react";
import { NotificationCard } from "../../components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Notifications = (props) => {
  const [newList, setNewList] = useState([
    {
      iconName: "calendar",
      message: "Reminder! . Get ready for your appointment at 9am",
      time: "Just Now",
      isNew: true,
    },
  ]);

  const [earlierList, setEarlierList] = useState([
    {
      iconName: "dollar",
      message: "You make an appointment with Lovely Lather",
      time: "Yesterday",
      isNew: false,
    },
    {
      iconName: "calendar",
      message: "Get 20% offers for hair service at Lovely Lather",
      time: "Just Now",
      isNew: false,
    },
    {
      iconName: "tag",
      message: "Get 20% offers for hair service at Lovely Lather",
      time: "2 days ago",
      isNew: false,
    },
    {
      iconName: "tag",
      message: "Reminder! . Get ready for your appointment at 9am",
      time: "3 Mar",
      isNew: false,
    },
  ]);

  const updatedNewList = { ...newList };
  const updatedEarlierList = { ...earlierList };

  const renderNewList = () => {
    let content = [];
    for (let idx in newList) {
      content.push(
        <NotificationCard
          iconName={updatedNewList[idx].iconName}
          message={updatedNewList[idx].message}
          time={updatedNewList[idx].time}
          isNew={updatedNewList[idx].isNew}
          onClick={() => {
            updatedNewList[idx].isActive = !updatedNewList[idx].isActive;
            setNewList(updatedNewList);
          }}
        />
      );
    }
    return content;
  };

  const renderEarlierList = () => {
    let content = [];
    for (let idx in earlierList) {
      content.push(
        <NotificationCard
          iconName={updatedEarlierList[idx].iconName}
          message={updatedEarlierList[idx].message}
          time={updatedEarlierList[idx].time}
          isNew={updatedEarlierList[idx].isNew}
          onClick={() => {
            updatedEarlierList[idx].isActive =
              !updatedEarlierList[idx].isActive;
            setEarlierList(updatedEarlierList);
          }}
        />
      );
    }
    return content;
  };

  return (
    <section>
      <div className="text-grey-100 text-16px font-manrope h-auto font-normal mt-4">
        New
      </div>
      <div className="flex flex-row flex-wrap justify-between my-4 gap-4">
        {renderNewList()}
      </div>
      <div className="text-grey-100 text-16px font-manrope font-normal mt-4">
        Earlier
      </div>
      <div className="flex flex-row flex-wrap justify-between my-4 gap-4">
        {renderEarlierList()}
      </div>
    </section>
  );
};

export default withRouter(Notifications);
