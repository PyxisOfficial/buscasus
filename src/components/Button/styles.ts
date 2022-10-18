import styled from 'styled-components';

export const Button = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px 12px;
    background-color: #3eb08f;
    border: 1px solid #3eb08f;
    border-radius: 20px;
    font-size: 14px;
    text-transform: none;
    font-weight: 500;
    color: #fff;
    transition: all .4s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #3eb08f;
    }
`

export const GrayButton = styled(Button)`
    padding: 4px 12px;
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
    background-color: #3eb08f;
    border: 2px solid #3eb08f;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        background-color: #fff;
        color: #3eb08f;
    }
`

export const LogoutButton = styled(Button)`
    border: 1px solid #fff;
    padding: 5px 22px 5px 22px;
    text-transform: uppercase;

    &:hover {
        color: #fff;
        background-color: #e94a4f;
        border: 1px solid #fff;
    }
`

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px 14px 5px 14px;
    border: 1px solid #e94a4f;
    background-color: #e94a4f;
    border-radius: 14px;
    color: #fff;
    transition: all .4s;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #e94a4f;
    }
`

export const EditButton = styled(IconButton)`
    padding: 5px 14px 5px 14px;
    border: 1px solid #3eb08f;
    background-color: #3eb08f;

    &:hover {
        background-color: #fff;
        color: #3eb08f;
    }
`