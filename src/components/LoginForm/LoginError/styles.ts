import styled from "styled-components";

export const LoginErrorText = styled.p<{
    errorText: boolean;
}>`
    font-size: 13px;
    text-align: center;
    color: ${(props) => props.errorText ? '#e94a4f' : '#fbfbfd'};
    margin-top: 11px;
    margin-bottom: 5px;
    transition: .5s;
`