import React from "react";
import Search from "./component/Search";
import List from "./component/List";


class App extends React.Component {
    state = {
        users:[],//users初始化为数组
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//标识是否处于加载中
        err:''//存储请求相关的错误信息
    }
    updateAppState = (stateObj) => {
        this.setState(stateObj);
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;