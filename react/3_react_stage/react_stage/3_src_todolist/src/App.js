import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';


import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";


/**
 * 关于父子之间的通信：
 *      1.【父组件】给【子组件】传递数据，通过props传递
 *      2.【子组件】给【父组件】传递数据，通过props传递，要求父组件提前给子组件传递一个函数
 * 注意：defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
 * 状态在哪里，操作状态的方法就在哪里
 *
 *
 */
class App extends Component {
    state = {
        todos: [
            {id: "001", name: "eat", done: true},
            {id: "002", name: "coding", done: false},
            {id: "003", name: "sleep", done: false},
            {id: "004", name: "shoping", done: true}
        ]
    }

    addTodo = (todo) => {
        // console.log("App 组件里的changeState函数");
        // console.log(todo);
        let {todos} = this.state;
        // console.log(todos);
        let objTodo = {id: uuidv4(), name: todo, done: false};
        // console.log(objTodo);
        let newTodos = [objTodo, ...todos];
        this.setState({todos: newTodos});
    }

    updateTodo = (id, done) => {
        let {todos} = this.state;
        todos.forEach(todo => {
            if (todo.id === id) {
                todo.done = done;
            }
        })
        this.setState({todos: todos});
    }

    delTodo = (id) => {
        console.log("App")
        console.log(id);
        let {todos} = this.state;

        todos = todos.filter(todo => todo.id !== id);


        this.setState({todos: todos});
    }
    handCheckAll = (flag) => {
        let {todos} = this.state;
        todos.forEach(todo => {
            todo.done = flag;
        })
        this.setState({todos: todos});
    }

    clearDoneItems = () => {
        let {todos} = this.state;
        todos = todos.filter(todo => {
            if (!todo.done) {
                return todo;
            }
            return;
        })
        console.log("===============")
        console.log(todos);
        console.log("===============")
        this.setState({todos: todos});
    }

    render() {
        let {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo}/>
                    <Footer todos={todos} handCheckAll={this.handCheckAll} clearDoneItems={this.clearDoneItems}/>
                </div>
            </div>
        );
    }
}

export default App;