import styled from 'styled-components';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

export const HoverCardTrigger = styled(HoverCardPrimitive.Trigger)`
   cursor: pointer;
   color: #585858;
`

export const HoverCardContent = styled(HoverCardPrimitive.Content)`
   background-color: #FBFBFD;
   padding: 10px;
   border-radius: 8px;
   box-shadow: 0px 11px 4px rgba(0, 0, 0, 0.01), 
               0px 6px 4px rgba(0, 0, 0, 0.05), 
               0px 3px 3px rgba(0, 0, 0, 0.09), 
               0px 1px 1px rgba(0, 0, 0, 0.1), 
               0px 0px 0px rgba(0, 0, 0, 0.1);
`

export const HoverCardArrow = styled(HoverCardPrimitive.Arrow)`
   fill: #FBFBFD;
`