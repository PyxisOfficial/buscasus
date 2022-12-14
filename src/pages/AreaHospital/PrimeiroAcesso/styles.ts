import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
`

export const LogoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #3eb08f;
    margin-top: 22px;
    z-index: 2;
`

export const LogoImg = styled.img`
    width: 120px;
    height: 120px;
    position: relative;
    user-select: none;
`

export const SloganTitle = styled.h4`
    font-size: 18px;
    color: #349684;
    position: absolute;
    bottom: 14px;
    left: 92px;
    white-space: nowrap;
`

export const FormContainer = styled.div`
    width: 400px;
    height: 400px;
    background-color: #FBFBFD;
    -webkit-box-shadow: -13px 10px 15px -3px rgba(0, 0, 0, 0.1);
    box-shadow: -13px 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 1;
    transform: scale(1.1);
    user-select: none;
`

export const UserType = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 50px;
`

export const Form = styled.form`
    margin-top: 22px;
    padding-left: 10%;
    padding-right: 10%;
`

export const HeaderForm = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 50px;
    gap: 20px;
`

export const HeaderFormTitle = styled.h2`
    color: #287365;
`

export const Svg = styled.svg`
    position: fixed;
    bottom: -26vh;
    width: 110vw;
`