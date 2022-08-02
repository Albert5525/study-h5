/*引入react-dom组件，用于渲染组件*/
import ReactDOM from 'react-dom/client'

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App/>);
