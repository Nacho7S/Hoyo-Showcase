"use client";

import { Provider } from "react-redux";
import store from ".";

function Store({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Store