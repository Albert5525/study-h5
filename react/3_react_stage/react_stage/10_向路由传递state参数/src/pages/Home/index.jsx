import React, {Component} from 'react';
import MyNavLink from "../../component/MyNavLink";
import {Route, Switch} from "react-router-dom";
import Message from "./Message";
import News from "./News";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to={"/home/home-news"}>News</MyNavLink>
                        {/*<a className="list-group-item" href="./home-news.html">News</a>*/}
                    </li>
                    <li>
                        <MyNavLink to={"/home/home-message"}>Message</MyNavLink>
                        {/*<a className="list-group-item active" href="./home-message.html">Message</a>*/}
                    </li>
                </ul>
                {/*<Route path={"/home-news"} component={Message}></Route>*/}
                <Switch>
                    <Route path={"/home/home-message"} component={Message}></Route>
                    <Route path={"/home/home-news"} component={News}></Route>
                </Switch>
            </div>
        );
    }
}

