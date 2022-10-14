import { useState } from "react";

import * as C from './styles';

interface PasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    errorText: boolean;
}

export function PasswordInput({ errorText, ...rest }: PasswordInputProps) {
    const [eyeIcon, setEyeIcon] = useState<string>('visibility');
    const [passwordType, setPasswordType] = useState<string>('password');

    function eyeClick() {
        if (eyeIcon === 'visibility') {
            setEyeIcon('visibility_off');
            setPasswordType('text');
        } else if (eyeIcon === 'visibility_off') {
            setEyeIcon('visibility');
            setPasswordType('password');
        }
    }

    return (
        <C.InputIconContainer>
            <C.Input
                type={passwordType}
                placeholder="Senha"
                errorText={errorText}
                id="userPassword"
                {...rest}
            />
            <label htmlFor="userPassword"><C.LockIcon className="material-symbols-outlined">lock</C.LockIcon></label>
            <C.EyeIcon onClick={eyeClick} className="material-symbols-outlined">{eyeIcon}</C.EyeIcon>
            <C.ErrorText errorText={errorText}>Por favor, insira uma senha.</C.ErrorText>
        </C.InputIconContainer>
    )
}