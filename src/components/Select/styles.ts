import styled from "styled-components";

import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';

interface SelectTriggerProps {
    size: any;
    $errorText: boolean;
}

export const SelectTrigger = styled(Select.Trigger)<SelectTriggerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(props) => props.size || '100%'};
    padding: 0px 10px;
    border: ${($props) => $props.$errorText ? '1px solid #e94a4f' : '1px solid #b3a9a9'};
    border-radius: 8px;
    cursor: pointer;

    &:focus {
        outline: 0;
    }
`

export const SelectViewport = styled(Select.Viewport)`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #f0f0f0;
    border: 1px solid #b3a9a9;
`

export const SelectItem = styled(Select.Item)`
    display: flex;
    align-items: center;
    padding: 6px 10px;
    cursor: pointer;
    transition: background .2s;
    font-size: 14px;

    &:hover {
        background: #67C5A2;
    }

    &:focus {
        outline: 0;
    }
`

export const CaretDownIcon = styled(CaretDown)`
    margin-top: 2px;
`

export const CheckIcon = styled(Check)`
    margin-top: 2px;
`