import styled from "styled-components";

export const ToastBg = styled.div<{
    isToastOpened: boolean;
}>`
    position: fixed;
    top: 50px;
    transform: translate(-37%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 80px;
    background-color: #fff;
    border-radius: 12px;
    border: 2px solid #3eb08f;
    visibility: ${(props) => props.isToastOpened ? 'visible' : 'hidden'};
    opacity: ${(props) => props.isToastOpened ? 1 : 0};
    transition: all .4s ease-in-out;
`

export const ToastTitle = styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 4px;
`

export const ToastDescription = styled.div`
    display: flex;
`