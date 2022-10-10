import { useState } from "react";

import './styles.css';

interface PasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    passwordError: any;
}

export function PasswordInput({ passwordError, ...rest }: PasswordInputProps) {
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
        <div className="input-icone">
            <input
                className="input"
                type={passwordType}
                placeholder="Senha"
                {...rest}
            />
            <label htmlFor="inputSenha"><span className="material-symbols-outlined icone-input">lock</span></label>
            <span onClick={eyeClick} className="material-symbols-outlined icone-eye">{eyeIcon}</span>
            <p className="text-erro">{passwordError}</p>
        </div>
    )
}