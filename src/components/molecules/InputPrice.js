import { Component } from 'react';
import Input from '../atoms/Input';
import Span from '../atoms/Span';
import Button from '../atoms/Button';

class InputPrice extends Component{

    render(){
        return(
            <div>
                <Input onChangeInput={this.props.onChangeInput}/>
                <Span text = {'원'} />
                <Button buttonText = {'입력'} onClickButton={this.props.onClickButton}/>
            </div>
        );
    }
}

export default InputPrice;