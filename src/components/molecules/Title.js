import { Component } from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span'

const titleBlock = styled.div`
    display : flex;
    padding-top: 16px;
    margin-bottom: 16px;
    color: black;
    font-size: 28px;
    font-weight: bold;
    background : black;
`;

class Title extends Component{

    render(){
        
        return(
            <titleBlock>
                <Span style = {this.props.style} text = '오늘 먹은 점심 값은?'></Span>
            </titleBlock>
        );
    }
}

export default Title;
