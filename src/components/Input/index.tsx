import { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import * as C from './styles';

interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <C.InputContainer>
            {children}
        </C.InputContainer>
    )
}

TextInputRoot.displayName = 'TextInput.Root';


interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText: boolean;
}

function TextInputInput({ errorText, ...rest }: TextInputInputProps) {
    return (
        <C.Input
            errorText={errorText}
            {...rest}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input';


interface TextInputLeftIconProps extends LabelHTMLAttributes<HTMLElement> {
    children: ReactNode;
    htmlFor: string;
}

function TextInputLeftIcon({ children, htmlFor }: TextInputLeftIconProps) {
    return (
        <C.LeftIcon
            className="material-symbols-outlined"
            htmlFor={htmlFor}
        >
            {children}
        </C.LeftIcon>
    )
}

TextInputLeftIcon.displayName = 'TextInput.LeftIcon';


interface TextInputRightIconProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

function TextInputRightIcon({ children, ...rest }: TextInputRightIconProps) {
    return (
        <C.RightIcon
            className="material-symbols-outlined"
            {...rest}
        >
            {children}
        </C.RightIcon>
    )
}

TextInputRightIcon.displayName = 'TextInput.RightIcon';


interface TextInputErrorMessageProps {
    children: ReactNode;
    errorText: boolean;
}

function TextInputErrorMessage({ children, errorText }: TextInputErrorMessageProps) {
    return (
        <C.ErrorMessage
            errorText={errorText}
        >
            {children}
        </C.ErrorMessage>
    )
}

TextInputErrorMessage.displayName = 'TextInput.ErrorMessage';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    LeftIcon: TextInputLeftIcon,
    RightIcon: TextInputRightIcon,
    ErrorMessage: TextInputErrorMessage
}