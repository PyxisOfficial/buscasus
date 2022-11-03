import styled from "styled-components";

export const LoginErrorText = styled.p<{
    errorText: boolean;
}>`
    font-size: 13px;
    text-align: center;
    color: ${(props) => props.errorText ? '#e94a4f' : '#fbfbfd'};
    padding: 12px 0;
    transition: .5s;
`