
import { Key, ReactNode } from 'react';

import * as SelectElement from '@radix-ui/react-select';

import * as C from './styles';

interface SelectRootProps {
    children: ReactNode;
    errorText: boolean;
    selectSize: string;
    onValueChange: any;
}

function SelectRoot({ children, errorText, selectSize, onValueChange }: SelectRootProps) {
    return (
        <SelectElement.Root
            onValueChange={onValueChange}
        >
            <C.SelectTrigger
                size={selectSize}
                $errorText={errorText}
            >
                <SelectElement.Value placeholder="Selecione" />
                <SelectElement.Icon>
                    <C.CaretDownIcon size={16} />
                </SelectElement.Icon>
            </C.SelectTrigger>

            <SelectElement.Portal>
                <SelectElement.Content>
                    <C.SelectViewport>
                        {children}
                        <SelectElement.Separator />
                    </C.SelectViewport>
                </SelectElement.Content>
            </SelectElement.Portal>
        </SelectElement.Root>
    )
}

interface SelectItemProps {
    specialtyKey: Key;
    value: string;
    title?: string;
}

function SelectItem({ specialtyKey, value, title }: SelectItemProps) {
    return (
        <C.SelectItem
            key={specialtyKey}
            value={value}
            title={title}
        >
            <SelectElement.ItemIndicator>
                <C.CheckIcon size={16} />
            </SelectElement.ItemIndicator>
            <SelectElement.ItemText>{title}</SelectElement.ItemText>
        </C.SelectItem>
    )
}

export const Select = {
    Root: SelectRoot,
    Item: SelectItem
}