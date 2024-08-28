import React from "react";
import { Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
// import PrivateRoute from "./PrivateRoute";
import {
  Console,
  ForgetPassword,
  Landing,
  ResetPassword,
  SignIn,
  SignUp,
} from "../pages";

const Index = (props) => (
  <>
    <Switch>
      <PublicRoute component={Console} path="/" exact />
      <PublicRoute component={Landing} path="/landing" exact />
      <PublicRoute component={SignIn} path="/sign-in" exact />
      <PublicRoute component={SignUp} path="/sign-up" exact />
      <PublicRoute component={ForgetPassword} path="/forget-password" exact />
      <PublicRoute component={ResetPassword} path="/reset-password" exact />
    </Switch>
  </>
);

export default Index;
