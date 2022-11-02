import styled from "styled-components";

export const DashboardContent  = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   height: 100%;
`

export const TitleDiv = styled.div`
   width: 48%;
   display: flex;
   flex-direction: row;
   align-items: flex-end;
   justify-content: space-between;
   text-align: left;
`

export const Title = styled.h2`
   font-size: 2rem;
   color: #000;
   text-transform: uppercase;
   font-weight: 800;
`

export const SubTitle = styled.h2`
   font-size: 1.5rem;
   color: #000;
   font-weight: 800;
`

export const TopContainer = styled.div`
   width: 100%;
   margin-bottom: 32px;
`

export const LeftContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 48%;
   gap: 30px;
`

export const RightContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 48%;
`

export const Line =  styled.div`
   height: 80vh;
   width: 5px;
   border-radius: 5px;
   background-color: #3DB08F;
`

export const Container = styled.div`
   display: flex;
   border-radius: 12px;
   padding: 10px 20px;
   background-color: #fbfbfd;
   filter: drop-shadow(0px 11px 4px rgba(0, 0, 0, 0.01)) 
           drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.05)) 
           drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.09)) 
           drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1)) 
           drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
`

export const Quantities = styled(Container)`
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 16px 20px;
`

export const Icons = styled.div`
   height: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   font-size: 1.5rem;
   color: ${(props) => props.color || '#000'};
   gap: 20px;
`

export const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   font-weight: 600;
`

export const ChartContainer = styled(Container)`
   flex-direction: column;
   gap: 8px;
`

export const ChartMonth = styled.img`
   width: 100%;
   height: 20vh;
   background-color: #496461;
`

export const ChartUsers = styled.div`
   width: 100%;
   height: 32vh;
   background-color: #496461;
`

export const RightTopContainer = styled.div`
   display: flex;
   width: 100%;
   height: 40vh;
   gap: 30px;
`

export const CardsContainer = styled.div`
   width: 25%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 24px;
`

export const Card = styled(Container)`
   flex-direction: column;
   width: 100%;
   padding: 10px 18px 18px 18px;
   gap: 8px;
`

export const CardTitle = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
`

export const CardDescription = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const TextCard = styled.span`
   font-size: 2.5rem;
   font-weight: 600;
`

export const PositiveData = styled.div`
   display: flex;
   align-items: center;
   padding: 5px;
   border-radius: 30px;
   font-weight: 600;
   gap: 4px;
   background-color: #96CE83;
   color: #4B7B3A;
`

export const NegativeData = styled.div`
   display: flex;
   align-items: center;
   padding: 5px;
   border-radius: 30px;
   font-weight: 600;
   gap: 4px;
   background-color: #CE8383;
   color: #7B3A3A;
`

export const RequestContainer = styled(Container)`
   flex-direction: column;
   height: 100%;
   padding: 10px 20px;
   gap: 20px;
`
export const RequestList = styled.div`
   width: 100%;
   height: 100%;
`

export const RequestListItem = styled.div`
   display: flex;
   flex-direction: column;
`

export const ItemHeader = styled.div`
   display: flex;
   justify-content: space-between;
`