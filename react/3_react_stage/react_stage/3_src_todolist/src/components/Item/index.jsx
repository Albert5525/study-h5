import React, {Component} from 'react';
import item from './item.module.css';
import PropTypes from "prop-types";

export default class Item extends Component {
    static propTypes = {
        //对接受的prop进行类型以及必要性的限制
        updateTodo: PropTypes.func.isRequired,
        delTodo: PropTypes.func.isRequired
    }

    //状态在哪里，操作状态的方法就在那里
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            // console.log(flag);
            this.setState({mouse: flag});
        }
    }

    handleChange = (e) => {
        this.props.updateTodo(this.props.todo.id, e.target.checked);
    }

    handleDel = (id) => {
        if (window.confirm("确定删除吗？")) {
            this.props.delTodo(id);
        }
    }

    render() {
        const {todo} = this.props;
        return (
            <li style={{backgroundColor: this.state.mouse ? "#ddd" : "white"}} onMouseMove={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={todo.done} onChange={this.handleChange}/>
                    <span>{todo.name}</span>
                </label>
                <button onClick={() => {
                    this.handleDel(todo.id)
                }} className="btn btn-danger"
                        style={{display: this.state.mouse ? "block" : "none"}}>删除
                </button>
            </li>
        );
    }
}
