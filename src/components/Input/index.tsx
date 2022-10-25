import { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import * as C from './styles';

export const sizes = {
    xs: '5vw',
    sm: '15vw',
    md: '20vw',
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
    isWithIcon: boolean;
}

function InputInput({ errorText, inputSize, isWithIcon, ...props }: InputInputProps) {
    return (
        <C.Input
            size={inputSize}
            isWithIcon={isWithIcon}
            errorText={errorText}
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
    topPosition: number;
    leftPosition: number;
}

function InputLeftIcon({ children, htmlFor, topPosition, leftPosition }: InputLeftIconProps) {
    return (
        <C.LeftIcon
            className="material-symbols-outlined"
            htmlFor={htmlFor}
            topPosition={topPosition}
            leftPosition={leftPosition}
        >
            {children}
        </C.LeftIcon>
    )
}

interface InputRightIconProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    topPosition: number;
    rightPosition: number;
}

function InputRightIcon({ children, topPosition, rightPosition, ...props }: InputRightIconProps) {
    return (
        <C.RightIcon
            className="material-symbols-outlined"
            topPosition={topPosition}
            rightPosition={rightPosition}
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