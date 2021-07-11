import { Component } from 'react';

class Span extends Component {


    render(){

        return(
            <span style = {this.props.style}>{this.props.text}</span>
        )
    }
}

export default Span;