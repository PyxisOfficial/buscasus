import { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import * as C from './styles';

export const sizes = {
    xxs: '2vw',
    xs: '5vw',
    sm: '8vw',
    md: '12vw',
    lg: '15vw',
    xl: '100%'
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
    errorText?: any;
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

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText?: any;
    inputSize: string;
    isWithIcon: boolean;
    mask?: any;
    value?: any;
}

function InputMask({ errorText, inputSize, isWithIcon, mask, value, ...props }: InputMaskProps) {
    return (
        <C.MaskedInput
            value={value}
            mask={mask}
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

interface InputImageRootProps {
    children: ReactNode
    error?: any;
}

function InputImageRoot({ children, error }: InputImageRootProps) {
    return (
        <C.ImageInputContainer
            error={error}
        >
            {children}
        </C.ImageInputContainer>
    )
}

interface NameImageInputProps {
    nameImgInput: any;
}


function NameImageInput({ nameImgInput }: NameImageInputProps) {
    return (
        <C.NameImageInput>{nameImgInput}</C.NameImageInput>
    )
}

interface ImageLabelProps {
    inputAction: any;
}

function ImageLabel({ inputAction }: ImageLabelProps) {
    return (
        <C.ImageLabel>Escolher foto
            <input
                onChange={inputAction}
                type="file"
                accept=".jpg, .png"
                hidden
            />
        </C.ImageLabel>
    )
}

export const Input = {
    Root: InputRoot,
    Input: InputInput,
    MaskedInput: InputMask,
    Login: InputLogin,
    LeftIcon: InputLeftIcon,
    RightIcon: InputRightIcon,
    ErrorMessage: InputErrorMessage
}

export const InputImage = {
    Root: InputImageRoot,
    NameImage: NameImageInput,
    Label: ImageLabel
}