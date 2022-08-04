import React, {Component} from 'react';
import qs from 'query-string';
class Details extends Component {
    render() {
        // console.log(this.props);

        //接收params参数
        // let {params} = this.props.match;
        // let message = params;
        // console.log(this.props);
        //接收search参数
        let {search}=this.props.location;
        console.log(search);
     let {id,title,content}= qs.parse(search.slice(1));
        return (
            <div>
                <ul>
                    {/*<li>{message.id}</li>*/}
                    {/*<li>{message.title}</li>*/}
                    {/*<li>{message.content}</li>*/}
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{content}</li>
                </ul>
            </div>
        );
    }
}

export default Details;