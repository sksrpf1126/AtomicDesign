import { Component } from 'react';
import UserInformation from '../molecules/UserInformation';
import { imgURLObj, nameTypes, defaultValueList } from '../../data';

class informationList extends Component{
    render(){
        let nameList_ = Object.keys(imgURLObj);
        return(
            <div style={{ display: 'flex', height: '90%' }}>
                <div style={{ flex: 1 }}>
                {nameList_.map((name, i) => (
                        <UserInformation
                            key={i}
                            name={name}
                            isSelected={this.props.selectedName == name}
                            value={this.props.valueList[name]}
                            valueList={this.props.valueList}
                            setValueList={this.props.setvalueList}
                            loading={this.props.loading}
                            setLoading={this.props.setLoading}
                        />
                    ))}
                </div>
            </div>

        );
    }
}

export default informationList;