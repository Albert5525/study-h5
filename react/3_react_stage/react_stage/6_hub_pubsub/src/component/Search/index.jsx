import React, {Component} from 'react';
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js';
import axios from 'axios';

import search from './search.module.css';


export default class Search extends Component {

    searchUser = (e) => {
        //连续解构赋值+重命名
        let {keyWordEle: {value: keyword}} = this;
        // console.log(keyword);


        //通知List更新状态
        PubSub.publish('UPDATE_LIST_STATE', {isLoading: true, isFirst: false});

        //发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            resp => {
                PubSub.publish('UPDATE_LIST_STATE', {isLoading: false, users: resp.data.items});
            },
            error => {
                PubSub.publish('UPDATE_LIST_STATE', {isLoading: false, err: error.message});
            })

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={currentNode => this.keyWordEle = currentNode} type="text"
                           placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.searchUser}>Search</button>
                </div>
            </section>
        );
    }
}

