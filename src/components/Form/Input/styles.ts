import styled from "styled-components";
import { IMaskInput } from 'react-imask';

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
    border: ${(props) => props.errorText ? '1px solid #e94a4f' : '1px solid #d1d1d1;'};
    border-radius: 8px;
    font-size: 0.875;
    transition: border .3s, background-color .3s;
    box-shadow: inset 0px 5px 2px rgba(32, 32, 64, 0.01), 
                inset 0px 3px 2px rgba(32, 32, 64, 0.05), 
                inset 0px 1px 1px rgba(32, 32, 64, 0.09), 
                inset 0px 0px 1px rgba(32, 32, 64, 0.1);

    &:focus {
        outline: 0;
        border: 1px solid #287365;
    }

    ::placeholder {
        color: #b3a9a9;
    }
`

export const MaskedInput = styled(IMaskInput)<{
    errorText: boolean;
    size: any;
    isWithIcon: boolean;
}>`
    width: ${(props) => props.size || '100%'};
    padding: ${(props) => props.isWithIcon ? '4px 4px 4px 24px' : '4px 8px 4px 8px'};
    border: ${(props) => props.errorText ? '1px solid #e94a4f' : '1px solid #d1d1d1;'};
    border-radius: 8px;
    font-size: 0.875rem;
    transition: border .3s, background-color .3s;
    box-shadow: inset 0px 5px 2px rgba(32, 32, 64, 0.01), 
                inset 0px 3px 2px rgba(32, 32, 64, 0.05), 
                inset 0px 1px 1px rgba(32, 32, 64, 0.09), 
                inset 0px 0px 1px rgba(32, 32, 64, 0.1);

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

export const ImageInputContainer = styled.div<{
    error: any;
}>`
    display: flex;
    align-items: center;
    width: 200px;
    padding: 2px 6px 2px 2px;
    border-radius: 16px;
    border: ${(props) => props.error ? '1px solid #e94a4f' : '1px solid #d1d1d1'};
    transition: border .3s;
    background-color: #cccccc;
    gap: 8px;
    white-space: nowrap;
    cursor: pointer;
`

export const NameImageInput = styled.span`
    display: flex;
    align-items: center;
    width: 110px;
    height: 20px;
    border-radius: 12px;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    border: none;
    padding-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`

export const ImageLabel = styled.label`
    font-size: 14px;
    cursor: pointer;
`