import React, {Component} from 'react';
import count from './count.module.css';

import store from "../../redux/store";

class Count extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        })
    }

    increment = () => {
        store.dispatch({type: "increment", data: parseInt(this.selectValue.value)});
    }

    decrement = () => {
        store.dispatch({type: "decrement", data: parseInt(this.selectValue.value)});
    }
    oddIncrement = () => {
        if (store.getState() % 2 !== 0) {
            store.dispatch({type: "increment", data: parseInt(this.selectValue.value)});
        }
    }
    incrementAsync = () => {
        let value= this.selectValue.value;
        let timer = setInterval(function () {
            store.dispatch({type: "increment", data: parseInt(value)});
            clearInterval(timer);
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>当前的求和为：{store.getState()}</h2>
                <select ref={c => {
                    this.selectValue = c;
                }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.oddIncrement}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>

            </div>
        );
    }
}

export default Count;