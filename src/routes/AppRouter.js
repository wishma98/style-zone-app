import React from "react";
import { Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
// import PrivateRoute from "./PrivateRoute";
import { Console } from "../pages";

const Index = (props) => (
  <>
    <Switch>
      <PublicRoute component={Console} path="/" exact />
    </Switch>
  </>
);

export default Index;
