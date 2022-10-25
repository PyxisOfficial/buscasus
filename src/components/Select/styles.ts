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
    padding: 0 8px;
    border: ${($props) => $props.$errorText ? '1px solid #e94a4f' : '1px solid #b3a9a9'};
    border-radius: 8px;
    cursor: pointer;

    &:focus {
        outline: 0;
    }
`

export const SelectViewport = styled(Select.Viewport)`
    border-radius: 8px;
`

export const SelectItem = styled(Select.Item)`
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 8px;
    gap: 4px;
    cursor: pointer;

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