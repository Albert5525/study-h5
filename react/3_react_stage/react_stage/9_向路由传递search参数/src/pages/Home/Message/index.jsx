import React, {Component} from 'react';
import {Route, Switch,Link} from "react-router-dom";
import MyNavLink from "../../../component/MyNavLink";
import Details from "./Details";


/*
* 向路由组件传递params参数
* 第一种路由传参的形式
* 在路径中跟参数：to={`/home/home-message/detail/${message.id}/${message.title}/${message.content}`}
* 在Router中：path="/home/home-message/detail/:id/:title/:content"
*
* 在对应的路由组件中的使用this.props.match.params就会接到对应的key：value的参数
* */
class Message extends Component {
    state = {
        messageArr: [
            {id: 1, title: "消息1", content: "我爱你，中国--1"},
            {id: 2, title: "消息2", content: "我爱你，中国--2"},
            {id: 3, title: "消息3", content: "我爱你，中国--3"},
        ]
    }

    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) => {
                            return <li key={message.id}>
                                {/*声明params参数*/}
                                {/*<MyNavLink to={`/home/home-message/detail/${message.id}/${message.title}/${message.content}`}>{message.title}</MyNavLink>*/}

                                {/*声明search参数*/}
                                {/*<MyNavLink to={`/home/home-message/detail/?id=${message.id}&&title=${message.title}&&content=${message.content}`}>{message.title}</MyNavLink>*/}
                                <Link to={`/home/home-message/detail/?id=${message.id}&&title=${message.title}&&content=${message.content}`}>{message.title}</Link>
                                {/*<a href="/xxx">{message.title}</a>*/}
                            </li>
                        })
                    }
                </ul>
                <Switch>
                    {/*声明接收params参数*/}
                    {/*<Route path="/home/home-message/detail/:id/:title/:content" component={Details}></Route>*/}

                    {/*search无需声明接收*/}
                    <Route path="/home/home-message/detail/" component={Details}></Route>

                </Switch>
            </div>
        );
    }
}

export default Message;