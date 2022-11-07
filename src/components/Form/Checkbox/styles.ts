import styled from 'styled-components';

import { Check } from 'phosphor-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export const CheckboxPrimitiveRoot = styled(CheckboxPrimitive.Root)`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 20px;
   height: 20px;
   background-color: #FBFBFD;
   border: 1px solid #E6E6E6;
   border-radius: 4px;
   cursor: pointer;
   box-shadow: inset 0px 5px 2px rgba(32, 32, 64, 0.01), 
                inset 0px 3px 2px rgba(32, 32, 64, 0.05), 
                inset 0px 1px 1px rgba(32, 32, 64, 0.09), 
                inset 0px 0px 1px rgba(32, 32, 64, 0.1);
`

export const Checked = styled(Check)`
   color: #3DB08F;
   width: 20px;
   height: 20px;
`