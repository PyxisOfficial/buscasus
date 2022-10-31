import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`

export const AdminColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 45%;
    height: 100%;
`

export const UserColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 25px;
    padding: 10px;
    white-space: nowrap;
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

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
`

export const ButtonContainer = styled.div`
    display: flex;
    float: right;
    gap: 8px;
    margin-top: 12px;
`

export const TableContainer = styled.div`
    padding: 10px 10px 58px 10px;
    background-color: #fff;
    border-radius: 10px;
    height: 100%;
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
`