import { InputHTMLAttributes, ReactNode } from 'react';
import { FilePdf } from 'phosphor-react';

import * as C from './styles';

interface ButtonProps extends InputHTMLAttributes<HTMLElement> {
    value: string;
    type: string;
    onClick?: any;
}

function GreenButton({ value, type, ...props }: ButtonProps) {
    return (
        <C.Button
            value={value}
            type={type}
            {...props}
        />
    )
}

function GrayButton({ value, type, ...props }: ButtonProps) {
    return (
        <C.GrayButton
            value={value}
            type={type}
            {...props}
        />
    )
}

function LoginButton({ value, type }: ButtonProps) {
    return (
        <C.LoginButton
            value={value}
            type={type}
        />
    )
}

function PdfButton() {
    return (
        <C.EditButton>
            <FilePdf size={18} weight="bold" />
            <C.Text>Download</C.Text>
        </C.EditButton>
    )
}

export const Button = {
    Green: GreenButton,
    Gray: GrayButton,
    Login: LoginButton,
    Pdf: PdfButton
}