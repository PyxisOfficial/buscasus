import styled from "styled-components";

export const ToastBg = styled.div<{
    isToastOpened: boolean;
}>`
    position: fixed;
    top: 10vh;
    transform: translate(-37%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    color: #fff;
    background-color: #3DC84B;
    border-radius: 40px;
    font-size: 18px;
    visibility: ${(props) => props.isToastOpened ? 'visible' : 'hidden'};
    opacity: ${(props) => props.isToastOpened ? 1 : 0};
    transition: all .4s ease-in-out;
    animation: ${(props) => props.isToastOpened ? '.5s ease fadeInToast' : 'none'};
    z-index: 2;

    @keyframes fadeInToast {
        from {
            top: -50%;
        }
        to {
            top: 10vh;
        }
    }
`

export const ToastTitle = styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 4px;
`

export const ToastDescription = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`