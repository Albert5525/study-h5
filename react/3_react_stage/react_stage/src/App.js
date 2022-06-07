/*引入react组件*/
import React, {Component} from "react";
import Hello from "./components/Hello/Hello";

class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
            </div>
        );
    }
}

export default App;