import { Component } from 'react';
import Span from '../atoms/Span';

class Outlay extends Component{
    render(){
        return(
            <div style = {{
                display : 'flex',
            }}>
                <Span text = {this.props.outlay}></Span>
            </div>
        );
    }
}

export default Outlay;