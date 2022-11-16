import { useState, FormEvent } from 'react';
import axios from 'axios';

import { Input } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Lock, Eye, EyeSlash } from 'phosphor-react';

import * as C from './styles';

interface FirstAccessProps {
    hospitalId: number;
}

export function PrimeiroAcesso({ hospitalId }: FirstAccessProps) {

    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [isPasswordWithError, setIsPasswordWithError] = useState<boolean>(false);
    const [isConfirmPasswordWithError, setIsConfirmPasswordWithError] = useState<boolean>(false);

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    async function editAdmin(event: FormEvent) {
        event.preventDefault();

        if (!password) setIsPasswordWithError(true);
        if (!confirmPassword || password !== confirmPassword) setIsConfirmPasswordWithError(true);

        if (password && confirmPassword && password === confirmPassword) {
            await axios.put('http://localhost/buscaSusWeb/api/area-admin/admin/', null, {
                params: {
                    senhaAdmin: password,
                    idHospital: hospitalId
                }
            });

            localStorage.setItem("first_access", JSON.stringify(0));
            location.reload();
        }
    }

    return (
        <>
            <div className="versao-incompativel">
                <h2 className="text-versao-incompativel">Versão incompatível!</h2>
            </div>

            <C.Container className="login-container">

                <C.LogoContainer>
                    <C.LogoImg src="../../../logo.png" />
                    <h1>BuscaSUS</h1>
                    <C.SloganTitle>Encontrando o médico mais próximo de você!</C.SloganTitle>
                </C.LogoContainer>

                <C.FormContainer>
                    <C.Form onSubmit={editAdmin}>
                        <C.HeaderForm>
                            <C.HeaderFormTitle>Antes de entrar no sistema...</C.HeaderFormTitle>
                            Por questões de segurança, sempre pedimos para que nossos usuários troquem a senha em seu primeiro login. Isso não ocorrerá novamente.
                        </C.HeaderForm>
                        <Input.Root>
                            <Input.Login
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Senha"
                                id="userPassword"
                                errorText={isPasswordWithError}
                                onChange={(e: any) => setPassword(e.target.value)}
                                onBlur={() => [password ? setIsPasswordWithError(false) : null, password === confirmPassword ? setIsConfirmPasswordWithError(false) : null]}
                            />

                            <Input.LeftIcon
                                htmlFor="userPassword"
                                topPosition={1}
                                leftPosition={0}
                            >
                                <Lock size={24} />
                            </Input.LeftIcon>

                            <Input.RightIcon
                                topPosition={1}
                                rightPosition={4}
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                {isPasswordVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                            </Input.RightIcon>

                            <Input.ErrorMessage
                                errorText={isPasswordWithError}
                            >
                                Por favor, insira uma senha.
                            </Input.ErrorMessage>
                        </Input.Root>

                        <Input.Root>
                            <Input.Login
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Confirmar Senha"
                                id="userPassword"
                                errorText={isConfirmPasswordWithError}
                                onChange={(e: any) => setConfirmPassword(e.target.value)}
                                onBlur={() => confirmPassword === password ? setIsConfirmPasswordWithError(false) : setIsConfirmPasswordWithError(true)}
                            />

                            <Input.LeftIcon
                                htmlFor="userPassword"
                                topPosition={1}
                                leftPosition={0}
                            >
                                <Lock size={24} />
                            </Input.LeftIcon>

                            <Input.RightIcon
                                topPosition={1}
                                rightPosition={4}
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                {isPasswordVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                            </Input.RightIcon>

                            <Input.ErrorMessage
                                errorText={isConfirmPasswordWithError}
                            >
                                Por favor, insira a mesma senha do primeiro campo.
                            </Input.ErrorMessage>
                        </Input.Root>

                        <Button.Login value="Login" type="submit" />
                    </C.Form>

                </C.FormContainer>

                <C.Svg viewBox="0 0 2308 1061" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="2308" height="1061" fill="#ffffff" />
                    <path d="M50.141 356.492C50.141 356.492 498.233 942.202 1154.52 300.973C1810.8 -340.257 2258.89 245.453 2258.89 245.453L2290.47 873.743L81.7266 984.782L50.141 356.492Z" fill="#349684" />
                    <path d="M96.333 405.968C96.333 405.968 507.342 1018.27 1202.03 418.858C1896.71 -180.555 2307.72 431.747 2307.72 431.747L2300.39 1060.79L88.9999 1035.01L96.333 405.968Z" fill="#45CA99" />
                    <rect x="14.2074" y="428.616" width="97" height="377" transform="rotate(2.15196 14.2074 428.616)" fill="#45CA99" />
                    <rect x="59.0194" y="514.36" width="97" height="377" transform="rotate(2.15196 59.0194 514.36)" fill="#45CA99" />
                </C.Svg>
            </C.Container>
        </>
    )
}