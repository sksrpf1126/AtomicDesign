import { Component } from 'react';
import Title from '../molecules/Title';
import SelectInput from '../molecules/SelectInput';
import InputPrice from '../molecules/InputPrice';

class LunchInputContent extends Component{
    render(){
        return(
            <div>
                <div style ={{
                display : 'flex',
                }}>
                    <Title />
            </div>
                <div style ={{
                    display : 'flex',
                }}>
                <SelectInput selectedName = {this.props.selectedName}  onChange={this.props.onChange}/>
                <InputPrice onChangeInput={this.props.onChangeInput} onClickButton={this.props.onClickButton}/>
                </div>
            </div>

        );
    }
}

export default LunchInputContent;