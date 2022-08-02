import React, {Component} from 'react';
import header from './header.module.css';
import PropTypes from "prop-types";

export default class Header extends Component {
    static propTypes = {
        //对接受的prop进行类型以及必要性的限制
        addTodo: PropTypes.func.isRequired
    }
    addEvent = (event) => {
        if (event.keyCode === 13) {
            // console.log(event.target.value);
            let value = event.target.value;
            if (value.trim() === "") {
                alert("不能输入空格");
                event.target.value = "";
                return;
            }
            event.target.value = "";
            this.props.addTodo(value);
        }
    }


    render() {
        return (
            <div className={header.todo_header}>
                <input onKeyUp={this.addEvent} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }

}

