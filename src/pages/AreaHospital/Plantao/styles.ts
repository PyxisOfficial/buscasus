import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-self: center;
    width: 100%;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 36%;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 24px;
    padding: 16px 20px;
    white-space: nowrap;
    gap: 16px;
    box-shadow: 0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const InputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`

export const ButtonContainer = styled.div`
    display: flex;
    float: right;
    gap: 8px;
    margin-top: 12px;
`

export const TableContainer = styled.div`
    padding: 16px 20px 68px 20px;
    width: 60%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
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
    padding: 4px;
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
    width: 350px;
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
    width: 350px;
`

export const InfoModalContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
`

export const InfoImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
`
export const Select = styled.select`
    border-radius: 6px;
    outline: none;
    padding: 2px 6px 2px 6px;
    border: 1px solid #E6E6E6;
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