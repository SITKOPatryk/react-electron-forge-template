import { startListener } from "redux-first-routing";
import { browserHistory } from "../../configuration";

function setInitialPath() {
  if (document.location.pathname === "/main_window") {
    browserHistory.push("/");
  }
  window.onbeforeunload = () => {
    browserHistory.push("/main_window");
  };
}

export default (store) => {
  setInitialPath();
  startListener(browserHistory, store);
};
