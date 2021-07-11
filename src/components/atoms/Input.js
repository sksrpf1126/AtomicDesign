import { Component } from 'react';

class Input extends Component{
    render(){
        return(
            <input
            type='number'
            style={{
                width: 80,
                border: 'none',
                borderBottom: '1px solid grey',
                fontSize: 20,
            }} onChange={this.props.onChangeInput}/>
        );
    }
}

export default Input;