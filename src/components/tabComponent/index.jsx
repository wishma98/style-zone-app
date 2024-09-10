import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const Index = (props) => {
  return (
    <div>
      <Tabs onChange={props.onChange} hideAdd>
        {((props.object && props.object) || []).map((i, t) => (
          <TabPane tab={i.tabName} key={i.key}>
            <>{i.content}</>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Index;
