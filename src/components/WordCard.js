import React from 'react'
import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons'


const StyleWrapper = styled.div`
    box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
    padding: 16px;
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
                <DeleteOutlined onClick={props.deleteItem} className="delete-icon" />
            </div>
            <div>
                {props.meanings.join(",")}
            </div>
        </StyleWrapper>
    )
}

export default WordCard
