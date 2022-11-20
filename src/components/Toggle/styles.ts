import styled from "styled-components";

import * as Toggle from '@radix-ui/react-toggle';

export const ToggleAbsRoot = styled(Toggle.Root)`
   padding: 2px 10px 2px 2px;
   border: none;
   border-radius: 20px;
   background: #909090;
   color: #fff;
   font-weight: 500;
   font-size: 1.20rem;
   transition: .3s;
   cursor: pointer;

   &[data-state='on'] {
      background: #349684;
      color: #E54B4B !important;
      padding: 2px 2px 2px 10px;
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