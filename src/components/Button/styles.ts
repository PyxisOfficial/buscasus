import styled from 'styled-components';

export const Button = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    text-transform: none;
    font-weight: 500;
    padding: 4px 12px;
    background-color: #3eb08f;
    border-radius: 20px;
    color: #fff;
    border: 1px solid #3eb08f;
    transition: all .4s;
    cursor: pointer;


    &:hover {
        background-color: #fff;
        color: #3eb08f;
    }
`

export const CancelButton = styled(Button)`
    background-color: #a4a4a4;
    border: 1px solid #a4a4a4;
    font-size: 14px;
    text-transform: none;
    font-weight: 500;

    &:hover {
        background-color: #fff;
        color: #a4a4a4;
    }
`

export const LoginButton = styled(Button)`
    width: 100%;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #3eb08f;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        background-color: #fff;
        color: #3eb08f;
    }
`