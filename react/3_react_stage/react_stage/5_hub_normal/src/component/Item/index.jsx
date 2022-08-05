import React, {Component} from 'react';
import PropTypes from 'prop-types';
import item from './item.module.css';

export default class Item extends Component {

    render() {
        let {id, html_url, profile_photo, userName} = this.props;
        return (
            <div className={item.card}>
                <a href={html_url} target="_blank">
                    <img
                        src={profile_photo}
                        style={{width: "100px"}}/>
                </a>
                <p className={item.card_text}>{userName}</p>
            </div>
        );
    }
}

