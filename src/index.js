import React from "react";
import ReactDOM from "react-dom";

// Тудушка плюс обучающий плейлист
import App from "./components/App";

// Хуки - плейлист
// import App from "./ru.reactjs.org/App";

import{ register } from 'register-service-worker'

ReactDOM.render(<App />, document.getElementById("root"));
register("", undefined);

