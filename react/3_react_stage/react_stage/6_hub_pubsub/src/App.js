import React from "react";
import Search from "./component/Search";
import List from "./component/List";


class App extends React.Component {


    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        );
    }
}

export default App;