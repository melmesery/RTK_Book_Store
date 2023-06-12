import React, { Fragment } from "react";
import { Provider, useSelector } from "react-redux";
import Header from "./components/Header.jsx";
import store from "./store/index.js";
import Library from "./components/Library.jsx";

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Header />
        <Library />
      </Provider>
    </Fragment>
  );
};

export default App;
