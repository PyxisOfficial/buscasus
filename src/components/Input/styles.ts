import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input<{
    errorText: boolean;
    size: any;
    isWithIcon: boolean;
}>`
    width: ${(props) => props.size || '100%'};
    padding: ${(props) => props.isWithIcon ? '4px 4px 4px 24px' : '4px 8px 4px 8px'};
    border: ${(props) => props.errorText ? '1px solid #e94a4f' : '1px solid #b3a9a9'};
    border-radius: 8px;
    transition: border .3s, background-color .3s;

    &:focus {
        outline: 0;
        border: 1px solid #287365;
    }

    ::placeholder {
        color: #b3a9a9;
    }
`

export const LoginInput = styled.input<{
    errorText: boolean;
}>`
    font-size: 16px;
    padding: 5px;
    padding-left: 28px;
    width: 100%;
    border: none;
    border-bottom: 3px solid ${(props) => props.errorText ? '#e94a4f' : '#3eb08f'};
    border-radius: 8px;
    background-color: #FBFBFD;
    transition: .5s;

    &:focus {
    outline: 0;
    border-bottom:3px solid #28755f;
}
`

export const LeftIcon = styled.label<{
    topPosition: number;
    leftPosition: number;
}>`
    display: inline-block;
    color: #757575;
    position: absolute;
    top: ${(props) => `${props.topPosition}px`};
    left: ${(props) => `${props.leftPosition}px`};
    cursor: pointer;
`

export const RightIcon = styled.span<{
    topPosition: number;
    rightPosition: number;
}>`
    color: #757575;
    top: ${(props) => `${props.topPosition}px`};
    right: ${(props) => `${props.rightPosition}px`};
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