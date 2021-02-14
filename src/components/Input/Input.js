import React from 'react'
import styled from 'styled-components'
import warningIcon from '../../assets/icons/warning-icon.svg'

const InputContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 328px;
    height: 80px;
    // border: 1px solid black;

    & > .label {
        margin: 0px;
        position: absolute;
        top: 8px;
        left: 8px;
        right: 8px;
        height: 16px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #545454;
        // border: 1px dotted blue;
    }

    & > .wrapper {
        // box-sizing: border-box;
        position: absolute;
        top: 28px;
        left: 8px;
        right: 8px;
        height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // border: 1px dashed green;
        border-bottom: 1px solid #545454;

        & > input {
            box-sizing: border-box;
            height: 24px;
            width: 280px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            // display: flex;
            // align-items: center;
            letter-spacing: 0.01em;
            color: #545454;
            // background: lightgray;
            border: none;
            outline: none;
        }

        & > img {
            box-sizing: border-box;
            width: 24px;
            height: 24px;
            visibility: hidden;
            // border: 1px dotted blue;
        }
    }

    & > .helper-text {
        margin: 0px;
        position: absolute;
        top: 56px;
        left: 8px;
        right: 8px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #EA7C7C; 
        visibility: hidden;       
        // border: 1px dotted blue;
    }
`

export default function Input() {
    return (
        <InputContainer>
            <p className={'label'}>{'Label'}</p>
            <div className={'wrapper'}>
                <input />
                <img src={warningIcon} alt={'Invalid text entered'} />
            </div>
            <p className={'helper-text'}>{'Helper text'}</p>
        </InputContainer>
    )
}
