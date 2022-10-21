import { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import * as C from './styles';

export const sizes = {
    sm: '200px',
    md: '500px',
    lg: '100%'
}

interface InputRootProps {
    children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
    return (
        <C.InputContainer>
            {children}
        </C.InputContainer>
    )
}


interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText: boolean;
    inputSize: string;
}

function InputInput({ errorText, inputSize, ...props }: InputInputProps) {
    return (
        <C.Input
            size={inputSize}
            {...props}
        />
    )
}


interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText: boolean;
}

function InputLogin({ errorText, ...props }: InputLoginProps) {
    return (
        <C.LoginInput
            errorText={errorText}
            {...props}
        />
    )
}


interface InputLeftIconProps extends LabelHTMLAttributes<HTMLElement> {
    children: ReactNode;
    htmlFor: string;
}

function InputLeftIcon({ children, htmlFor }: InputLeftIconProps) {
    return (
        <C.LeftIcon
            className="material-symbols-outlined"
            htmlFor={htmlFor}
        >
            {children}
        </C.LeftIcon>
    )
}


interface InputRightIconProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

function InputRightIcon({ children, ...props }: InputRightIconProps) {
    return (
        <C.RightIcon
            className="material-symbols-outlined"
            {...props}
        >
            {children}
        </C.RightIcon>
    )
}


interface InputErrorMessageProps {
    children: ReactNode;
    errorText: boolean;
}

function InputErrorMessage({ children, errorText }: InputErrorMessageProps) {
    return (
        <C.ErrorMessage
            errorText={errorText}
        >
            {children}
        </C.ErrorMessage>
    )
}

export const Input = {
    Root: InputRoot,
    Input: InputInput,
    Login: InputLogin,
    LeftIcon: InputLeftIcon,
    RightIcon: InputRightIcon,
    ErrorMessage: InputErrorMessage
}