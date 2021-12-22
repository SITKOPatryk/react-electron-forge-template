import { startListener } from "redux-first-routing";
import { browserHistory } from "../../configuration";

function setInitialPath() {
  if (document.location.pathname === "/main_window") {
    browserHistory.push("/");
  }
}

export default (store) => {
  setInitialPath();
  startListener(browserHistory, store);
};
