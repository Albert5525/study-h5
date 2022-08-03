import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Item from "../Item";

export default class List extends Component {


    render() {
        let {users, isFirst, isLoading, err} = this.props;
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


