import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { ChatHeaderComponent, OptionCard } from "../../components";

const Index = (props) => {
  return (
    <div className=" relative h-full px-5">
      <header className=" mx-[-14px]">
        {/* Header */}
        <ChatHeaderComponent
          isOnline={true}
          chatName={"John Doe"}
          imgUrl={require("../../assets/images/user.png")}
        />
      </header>
      <section>
        <OptionCard
          iconName={"heart"}
          title={"Write a review"}
          subTitle={"Reorder your favorite service in a click"}
        />
        <OptionCard
          iconName={"vault"}
          title={"Payments"}
          subTitle={"Payment methods, Transaction History "}
        />
        <OptionCard
          iconName={"info-circle"}
          title={"About"}
          subTitle={"Privacy Policy, Terms of Services, Licenses"}
        />
        <OptionCard
          iconName={"logout"}
          title={"Logout"}
          isLogout={true}
          subTitle={""}
        />
      </section>
    </div>
  );
};

export default withRouter(Index);
