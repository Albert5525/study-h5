import React, {Component} from 'react';
import {NavLink, Route, Redirect, Switch} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from "./component/MyNavLink";

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html中，靠<a>跳转不同的页面*/}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/*在React中靠路由链接实现切换组件*/}
                            {/*<NavLink activeClassName="act" className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink activeClassName="act" className="list-group-item" to="/home">Home</NavLink>*/}
                            <MyNavLink to={"/about"}>About</MyNavLink>
                            <MyNavLink to={"/home"}>Home</MyNavLink>
                            {/*Redirect重定向*/}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/*<h3>我是Home的内容</h3>*/}
                                    <Route path="/home" component={Home}/>
                                    <Route path="/about" component={About}/>
                                    <Redirect to={"/home/home-news"}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;