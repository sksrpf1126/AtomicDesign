import { Component } from 'react';
import Balance from '../molecules/Balance';
import Outlay from '../molecules/Outlay';

class LunchMoney extends Component{
    render(){
        return(
            <div style={{
                flex : 1,
                marginLeft : 150,
            }}>
                <div  style={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    height: 'calc(100% - 36px)',
                    width: '100%',
                }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: `${this.props.percentLeftTotalvalue}%`,
                            width: '100%',
                            background: `hsl(${this.props.percentLeftTotalvalue}, 60%, 51%)`,
                            color: 'white',
                        }}
                    >
                        <Balance money = {`${this.props.defaultTotalValue - this.props.getTotalValue(this.props.valueList)}원 남음`}/>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 4,
                        height: 36,
                        fontWeight: 'bold',
                    }}
                >
                    <Outlay outlay ={`${new Date().getMonth() + 1}월 :` + this.props.getTotalValue(this.props.valueList) + '원'} />
                </div>
            </div>
        );
    }
}

export default LunchMoney;