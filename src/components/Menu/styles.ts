import styled from "styled-components";

export const Container = styled.div`
    background-color: #3eb08f;
    height: 100vh;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-areas:
        "nav nav nav"
        "sidebar main main"
        "sidebar main main";
`

export const Nav = styled.div`
    grid-area: nav;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-rows: 6vh;
    justify-items: center;
    align-items: center;
    color: #fff;
    background-color: #3eb08f;
    user-select: none;
`

export const SideBar = styled.nav`
    grid-area: sidebar;
    color: #fff;
    background-color: #3eb08f;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 12vw;
    padding-top: 40px;
    overflow: hidden;
    user-select: none;
`

export const Main = styled.main`
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ededed;
    width: 88vw;
    height: 94vh;
    padding: 30px;
    border-top-left-radius: 24px;
    position: relative;
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

export const TextFooter = styled.h5`
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 9px;
`

export const LogoImg = styled.img`
    margin-top: 64px;
    max-width: 78px;
    z-index: 2;
    border-radius: 50%;
    background-color: #fff;
`

export const Svg = styled.svg`
    width: 30vw;
    position: relative;
    margin-bottom: -105px;
`