import React from "react";
import axios from 'axios';


class App extends React.Component {
    getData = () => {
        //http://192.168.137.30:8080/hrms/emp/getEmpById/1
        axios.get("http://localhost:3000/hrms/emp/getEmpById/1").then(
            resp => {
                console.log(resp.data);
            },
            error =>{
                console.log(error);
            }
        )
    }

    render() {
        return (
            <button onClick={this.getData}>点我获取学生数据</button>
        )
    }
}

export default App;