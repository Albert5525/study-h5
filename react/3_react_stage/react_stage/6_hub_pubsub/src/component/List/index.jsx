import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';


import Item from "../Item";

export default class List extends Component {
    state = {
        users: [],//users初始化为数组
        isFirst: true,//是否为第一次打开页面
        isLoading: false,//标识是否处于加载中
        err: ''//存储请求相关的错误信息
    }

    componentDidMount() {
        this.token = PubSub.subscribe('UPDATE_LIST_STATE', (msg, stateObj) => {
            console.log(msg);
            this.setState(stateObj);
        });

    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        let {users, isFirst, isLoading, err} = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h2>输入关键词，进行搜索！！</h2> :
                        isLoading ? <h2>正在搜索，请稍后。。。。。。</h2> :
                            err ? <h2 style={{backgroundColor: "pink"}}>{err}</h2> :
                                users.map(user => {
                                    return <Item key={user.id} html_url={user.html_url} profile_photo={user.avatar_url}
                                                 userName={user.login}/>
                                })
                }
            </div>
        );
    }
}


