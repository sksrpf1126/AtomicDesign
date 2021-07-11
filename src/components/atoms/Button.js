import { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <button
            style={{
                height: 36,
                width: 64,
                border: '1px solid grey',
                borderRadius: 8,
                background: 'white',
                fontSize: 20,
                cursor : 'pointer',
            }} onClick={this.props.onClickButton}>
                {this.props.buttonText}
            </button>
        );
    }
}

export default Button;