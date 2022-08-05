import React from "react";
import ReactDom from 'react-dom/client'
// import {HashRouter as Router} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";

/*
* 路由的基本使用
*   1.明确号界面中的导航区，展示区
*   2.导航区的a标签改为Link标签
*       <Link to="/xxxxx">Demo</Link>
*   3.展示区些Route标签进行路径的匹配
*       <Route path="/xxxx" pages={Demo}/>
*   4.<App》的最外面包裹一个<BrowserRouter>或<HashRouter>
*
* */

const test = ReactDom.createRoot(document.getElementById("test"));
test.render(
    <Router>
        <App/>
    </Router>);
