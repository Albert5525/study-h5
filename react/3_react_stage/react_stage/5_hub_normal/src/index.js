import React from "react";
/*引入react-dom组件，用于渲染组件*/
import ReactDOM from 'react-dom/client'

import App from "./App";

const test = ReactDOM.createRoot(document.getElementById("test"));
test.render(<App/>);