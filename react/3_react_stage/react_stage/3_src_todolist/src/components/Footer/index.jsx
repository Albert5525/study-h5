import React, {Component} from 'react';

export default class Footer extends Component {
    state = {
        checked: false
    }
    handleAll = (e) => {
        // e.target.checked=true;
        console.log(e.target.checked);
        // this.setState({checked: e.target.checked});
        this.props.handCheckAll(e.target.checked);
    }

    //清除已完成的任务
    clearDoneItems=()=>{
        this.props.clearDoneItems();
    }

    render() {
        let {todos} = this.props;
        let doneCount = todos.reduce((pre, todo) => {
            if (todo.done) {
                return pre + 1;
            }
            return pre + 0;
        }, 0);
        return (
            <div className="todo_footer">
                <label>
                    <input onChange={this.handleAll} type="checkbox"
                           checked={doneCount === todos.length && doneCount != 0 ? true : false}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button onClick={this.clearDoneItems} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

