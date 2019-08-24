import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";

// STORE -> GLOBALIZED STATE

// ACTION -->describes what you want to do basically describes the action
//         all an action is, is just a simple function that returns an objec

const increment = () => {
  return {
    type: "INCREMENT"
  };
};
const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

//REDUCER --> describes how your actions transform the state into another stoate - reducer checks action and based on the action it will modifies the STORE
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    default:
  }
};

let store = createStore(counter);

//display it in the console
store.subscribe(() => console.log(store.getState()));
//Dispatch --> this is the way where we can execute the actions == dispatch your action to the reducer which checks "what to do and updates the STORE"
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
