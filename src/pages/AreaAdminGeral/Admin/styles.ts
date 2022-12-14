import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Lock } from 'phosphor-react'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`

export const InsertContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 25px;
    padding: 16px 20px;
    white-space: nowrap;
    width: 80%;
    height: 160px;
    box-shadow: 0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
`

export const Form = styled.form`
    display: flex;
    gap: 12px;
`

export const Title = styled.h3`
    margin-bottom: 16px;
`

export const InputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    float: right;
    gap: 8px;
`

export const HoverCardContainer = styled.div`
    margin: 0 8px;
`

export const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const GenPassContainer = styled.div`
    color: #414948;
    padding: 2px 4px;
    border: 1px solid #909090;
    border-radius: 8px;
    background: #E7E7E7;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
`

export const TableContainer = styled.div`
    padding: 16px 20px 68px 20px;
    background-color: #fff;
    border-radius: 10px;
    width: 80%;
    height: 70%;
    box-shadow: 0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
`

export const TableContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Table = styled.table`
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border-collapse: collapse;
    -webkit-box-shadow: 0px 0px 0px 2px #3eb08f;
    -moz-box-shadow: 0px 0px 0px 2px #3eb08f;
    box-shadow: 0px 0px 0px 1px #3eb08f;
    overflow: hidden;
`

export const Thead = styled.thead`
    width: 100%;
    color: #fff;
    background-color: #3eb08f;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 5px;
`

export const Tr = styled.tr`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 4px;
`

export const InnerTr = styled(Tr)`
    &:hover {
        background-color: #f2f2f2;
    }
`

export const Th = styled.th`
    padding: 4px;
    text-align: left;
    width: 150px;
`

export const Tbody = styled.tbody`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 100%;
`

export const Td = styled.td`
    padding: 4px;
    text-align: left;
    width: 150px;
    white-space: nowrap;
`

export const Select = styled.select<{
    errorText: any;
}>`
    border-radius: 6px;
    outline: none;
    padding: 2px 6px 2px 6px;
    border: ${(props) => props.errorText ? '1px solid #e94a4f' : '1px solid #d1d1d1'};
    transition: border .3s;
    box-shadow: inset 0px 5px 2px rgba(32, 32, 64, 0.01), 
                inset 0px 3px 2px rgba(32, 32, 64, 0.05), 
                inset 0px 1px 1px rgba(32, 32, 64, 0.09), 
                inset 0px 0px 1px rgba(32, 32, 64, 0.1);

    &:focus {
        outline: 0;
        border: 1px solid #287365;
    }
`

export const ClipboardText = styled.span`
    cursor: pointer;
`

export const ClipboardAlert = styled(ClipboardText)`
    color: #29d140;
`

export const NotHover = styled(Lock)`
    color: #585858;
`

export const ErrorMsg = styled.span<{
    errorText?: boolean;
}>`
    color: ${(props) => props.errorText ? '#e94a4f' : '#fbfbfd'};
    visibility: ${(props) => props.errorText ? 'visible' : 'hidden'};
    transition: .3s;
    height: 14px;
    font-size: 14px;
`