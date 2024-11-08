import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/";
import { Provider } from "react-redux";

const Rstore = configureStore({ reducer: { rootReducer } });

const DataProvider = ({ children }) => {
  return <Provider store={Rstore}>{children}</Provider>;
};

export default DataProvider;
