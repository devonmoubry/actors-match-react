//########### index.js ##############
//import React
import React from "react";
import ReactDOM from "react-dom";

//import Styles
import "./styles/index.css";

//import Components
import App from "./components/App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
