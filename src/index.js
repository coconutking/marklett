import React from "react";

//import { render } from 'react-dom';
import ReactDOM from "react-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
