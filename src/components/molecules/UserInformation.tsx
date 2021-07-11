import { query as q } from 'faunadb';

import { imgURLObj, nameTypes } from '../../data';
import db from '../../db';

import Img from '../atoms/Img';
import Span from '../atoms/Span';

type UserInformationProps = {
    name: nameTypes;
    isSelected: boolean;
    value?: string;
    valueList?: any;
    setValueList?: any;
    loading?: boolean;
    setLoading?: any;
};
const UserInformation = ({
    name,
    isSelected,
    value,
    valueList,
    setValueList,
    loading,
    setLoading,
}: UserInformationProps) => {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const handleClickToResetValue = async () => {
        if (isSelected) {
            setLoading(true);

            const { data } = await db.query<any>(
                q.Update(ref, {
                    data: {
                        ...valueList,
                        [name]: 0,
                    },
                })
            );
            setValueList(data);

            setLoading(false);
        }
    };
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: 44,
                margin: '6px 0px',
            }}
        >
            <div onClick={handleClickToResetValue}>
                <Img
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 40,
                        width: 40,
                        border: isSelected ? '2px solid grey' : undefined,
                        borderRadius: 8,
                    }}
                    src={imgURLObj[name]}
                />
            </div>
            <Span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 8,
                    height: 48,
                    borderBottom: isSelected ? '1px solid grey' : undefined,
                }}
                text = {loading == true ? '... 원' : value+'원'}
            >
            </Span>
        </div>
    );
};

export default UserInformation;
