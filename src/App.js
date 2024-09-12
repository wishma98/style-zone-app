import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";

const createHistory = require("history");

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={createHistory}>
          <AppRouter />
        </Router>
      </Provider>
    </>
  );
}

export default App;
