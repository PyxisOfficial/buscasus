import { InputHTMLAttributes } from 'react';
import * as C from './styles';

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
}

export function SubmitButton({ value, ...props }: ButtonProps) {
    return (
        <C.Button
            value={value}
            type="submit"
            {...props}
        />
    )
}

export function CancelButton({ value, ...props }: ButtonProps) {
    return (
        <C.CancelButton
            value={value}
            type="reset"
            {...props}
        />
    )
}

export function LoginButton({ value, ...props }: ButtonProps) {
    return (
        <C.LoginButton
            value={value}
            type="submit"
            {...props}
        />
    )
}

export const Button = {
    Submit: SubmitButton,
    Cancel: CancelButton,
    Login: LoginButton
}