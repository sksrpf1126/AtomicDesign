import { Component } from 'react';
import Span from '../atoms/Span';

class Balance extends Component{
    render(){
        return(
            <div style = {{
                display : 'flex',
            }}>
                <Span text = {this.props.money}></Span>
            </div>
        );
    }
}

export default Balance;