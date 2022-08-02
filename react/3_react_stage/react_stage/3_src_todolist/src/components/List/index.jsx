import React, {Component} from 'react';
import PropTypes from 'prop-types';

import list from './list.module.css';
import Item from "../Item";

export default class List extends Component {
    static propTypes = {
        //对接受的prop进行类型以及必要性的限制
        updateTodo: PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired,
        delTodo:PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo,delTodo} = this.props;

        console.log(todos);
        return (
            <ul className={list.todo_main}>
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} todo={todo} updateTodo={updateTodo} delTodo={delTodo}/>
                    })
                }
            </ul>
        );
    }

}
