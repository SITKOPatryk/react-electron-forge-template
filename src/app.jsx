import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "./store/configuration";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import Menu from "./components/menu.jsx";
import Paths from "./paths";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Menu />
      <BrowserRouter history={browserHistory}>
        <Paths />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
