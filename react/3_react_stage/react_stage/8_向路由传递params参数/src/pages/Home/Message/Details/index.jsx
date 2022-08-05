import React, {Component} from 'react';

class Details extends Component {
    render() {
        console.log(this.props);
        let {params} = this.props.match;
        let message = params;
        return (
            <div>
                <ul>
                    <li>{message.id}</li>
                    <li>{message.title}</li>
                    <li>{message.content}</li>
                </ul>
            </div>
        );
    }
}

export default Details;