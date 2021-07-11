import { Component } from 'react';

class Select extends Component{


    render(){
        return(
            <select style={{
                marginRight: 16,
                height: 36,
                width: 72,
                border: '1px solid grey',
                borderRadius: 8,
                fontSize: 20,
            }} onChange={this.props.onChange}>{this.props.option}</select>
        );
    }
}

export default Select;