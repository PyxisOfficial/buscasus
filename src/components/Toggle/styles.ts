import styled from "styled-components";

import * as Toggle from '@radix-ui/react-toggle';

export const ToggleRoot = styled(Toggle.Root)`
   padding: 4px 8px;
   border: none;
   border-radius: 20px;
   background: #3EB08F;
   color: #fff;
   font-weight: 500;
   font-size: 1.20rem;
   cursor: pointer;

   &[data-state='on'] {
      background: #2D8272;
   }
`

export const ToggleAbsRoot = styled(Toggle.Root)`
   padding: 2px 10px 2px 2px;
   border: none;
   border-radius: 20px;
   background: #909090;
   color: #fff;
   font-weight: 500;
   font-size: 1.20rem;
   cursor: pointer;

   &[data-state='on'] {
      background: #E54B4B;
      color: #E54B4B !important;
   }
`

export const ToggleButton = styled.button`
    padding: 6px 8px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    font-size: 1rem;   
    background: #FBFBFD;
    color: #909090;
    border: none;
    cursor: pointer;
    mix-blend-mode: hard-light;
`