import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input<{
    errorText: boolean;
}>`
    font-size: 16px;
    padding: 5px;
    padding-left: 28px;
    width: 100%;
    border: none;
    border-bottom: 3px solid ${(props) => props.errorText ? '#e94a4f' : '#3eb08f'};
    border-radius: 5px;
    background-color: #FBFBFD;
    transition: .5s;

    &:focus {
    outline: 0;
    background-color: #eeeded;
}
`

export const LeftIcon = styled.label`
    display: inline-block;
    color: #757575;
    position: absolute;
    left: 0;
    cursor: pointer;
`

export const RightIcon = styled.span`
    color: #757575;
    left: 290px;
    top: 2px;
    position: absolute;
    cursor: pointer;
`

export const ErrorMessage = styled.p<{
    errorText: boolean;
}>`
    font-size: 13px;
    text-align: center;
    color: ${(props) => props.errorText ? '#e94a4f' : '#fbfbfd'};
    margin-top: 7px;
    margin-bottom: 5px;
    height: 20px;
    transition: .5s;
`