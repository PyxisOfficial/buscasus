import { InputHTMLAttributes, ReactNode } from 'react';

import * as C from './styles';

interface ButtonProps extends InputHTMLAttributes<HTMLElement> {
    value: string;
    type: string;
}

function GreenButton({ value, type }: ButtonProps) {
    return (
        <C.Button
            value={value}
            type={type}
        />
    )
}

function GrayButton({ value, type,...props }: ButtonProps) {
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

function LogoutButton({ value, type, ...props }: ButtonProps) {
    return (
        <C.LogoutButton
            value={value}
            type={type}
            {...props}
        />
    )
}

interface IconButtonProps {
    children: ReactNode;
}

function DeleteButton({ children }: IconButtonProps) {
    return (
        <C.IconButton>
            {children}
        </C.IconButton>
    )
}

function EditButton({ children }: IconButtonProps) {
    return (
        <C.EditButton>
            {children}
        </C.EditButton>
    )
}

export const Button = {
    Green: GreenButton,
    Gray: GrayButton,
    Login: LoginButton,
    Logout: LogoutButton,
    Delete: DeleteButton,
    Edit: EditButton
}