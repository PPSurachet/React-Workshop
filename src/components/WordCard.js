import React from 'react'
import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons'
import { } from 'antd';


const StyleWrapper = styled.div`
    box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
    margin: 16px;
    padding: 8px;
    border-radius: 10px;

    .Top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .delete-icon{
        color:red;
        cursor:pointer;
    }
`;

const WordCard = (props) => {
    return (
        <StyleWrapper>
            <div className="Top">
                <div>
                    <b>{props.word}</b><span>{props.types.join(",")}</span>
                </div>
                <DeleteOutlined className="delete-icon" />
            </div>
            <div>
                {props.meanings.join(",")}
            </div>
        </StyleWrapper>
    )
}

export default WordCard
