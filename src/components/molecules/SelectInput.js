import { Component, useState } from 'react';
import Select from '../atoms/Select'
import { imgURLObj, nameTypes, defaultValueList } from '../../data';

class SelectInput extends Component{

    render(){
        let nameList_ = Object.keys(imgURLObj);
        return(
            <Select option = {nameList_.map((name, i) => (
                <option
                    key={i}
                    value={name}
                    selected={name == this.props.selectedName}
                >
                    {name}
                </option>
            ))} onChange={this.props.onChange}>
            </Select>
        );
    }
}

export default SelectInput;