import { Component } from 'react';

class Img extends Component{
    render(){
        return(
            <img
            style = {this.props.style}
            src = {this.props.src}/>
        );
    }
}

export default Img;