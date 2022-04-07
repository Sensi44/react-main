import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import{ register } from 'register-service-worker'

ReactDOM.render(<App />, document.getElementById("root"));
register("", undefined);