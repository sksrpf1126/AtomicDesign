import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { query as q } from 'faunadb';

import LunchValue from '../components/LunchValue';
import { imgURLObj, nameTypes, defaultValueList } from '../data';
import db from '../db';

import LunchInputContent from '../components/organisms/LunchInputContent';
import InformationList from '../components/organisms/informationList';
import LunchMoney from '../components/organisms/LunchMoney';

// const Title = styled.div`
//     padding-top: 16px;
//     margin-bottom: 16px;
//     color: black;
//     font-size: 28px;
//     font-weight: bold;
// `;

export default function Home() {
    const defaultTotalValue = 450000;
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const nameList: any = Object.keys(imgURLObj);

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState<any>();
    const [selectedName, setSelectedName] = useState<nameTypes>('태양');
    const [valueList, setValueList] = useState<any>(defaultValueList);
    const setValueListFromDB = async () => {
        setLoading(true);

        const { data } = await db.query<any>(q.Get(ref));
        console.log('data from DB', data);
        setValueList(data);

        setLoading(false);
    };

    const handleChangeName = (e: any) => {
        setSelectedName(e.target.value);
        localStorage.setItem('defaultSelectedName', e.target.value);
    };
    const handleChangeValue = (e: any) => {
        setValue(e.target.value);
    };
    const handleClick = async () => {
        setLoading(true);

        const { data } = await db.query<any>(
            q.Update(ref, {
                data: {
                    ...valueList,
                    [selectedName]: valueList[selectedName] + Number(value),
                },
            })
        );
        setValueList(data);
        setValue('');

        setLoading(false);
    };

    const getTotalValue: any = (valueList: any) => {
        const values = Object.values(valueList);
        return values.reduce((acc: any, cur) => acc + cur, 0);
    };

    const percentLeftTotalvalue = Math.floor(
        ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) *
            100
    );

    useEffect(() => {
        const defaultSelectedName: any = localStorage.getItem(
            'defaultSelectedName'
        );
        console.log(defaultSelectedName);
        setSelectedName(defaultSelectedName || '태양');

        setValueListFromDB();
    }, []);

    console.log(value);
    return (
        <div style={{ margin: '0px 16px' }}>
            <LunchInputContent selectedName = {selectedName}  onChange={handleChangeName}
            onChangeInput={handleChangeValue} onClickButton={handleClick}
            />
            <div style={{ display: 'flex', height: '90%' }}>
                <InformationList valueList = {valueList} selectedName = {selectedName} loading = {loading}/>
                <LunchMoney defaultTotalValue = {defaultTotalValue} getTotalValue = {getTotalValue} valueList = {valueList}
                percentLeftTotalvalue = {percentLeftTotalvalue}
                />
            </div>
            
        </div>
    );
}
