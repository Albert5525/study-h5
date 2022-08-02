/*引入react-dom组件，用于渲染组件*/
import ReactDOM from 'react-dom/client'

import App from "./App";

const todoList=ReactDOM.createRoot(document.getElementById("todoList"));

todoList.render(<App/>);