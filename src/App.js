import React from "react";
import logo from "./logo.svg";
import "./App.css";

import store from "./stores/store";
import { Provider } from "react-redux";

import Counter from "./pages/counter";

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
