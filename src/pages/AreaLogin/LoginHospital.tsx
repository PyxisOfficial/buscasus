import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UseAuth from '../../hooks/useAuth';

import { Input } from '../../components/Input';
import { LoginError } from '../../components/LoginError';
import { Button } from '../../components/Button';
import { User, Lock, Eye, EyeSlash } from 'phosphor-react';

import * as C from './styles';

export function LoginHospital() {
    const { signIn }: any = UseAuth();

    const [userName, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isUserNameWithError, setIsUserNameWithError] = useState<boolean>(false);
    const [isPasswordWithError, setIsPasswordWithError] = useState<boolean>(false);
    const [isLoginWithError, setIsLoginWithError] = useState<boolean>(false);

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const newUser: any[] = ["hospital", "123", false, "Hospital Geral de Guaianazes"];
        localStorage.setItem("users_db", JSON.stringify(newUser))
    }, []);

    function handleLogin(event: FormEvent) {
        event.preventDefault();

        const isGeneralAdminActivated = false;

        if (!userName && !password) {
            setIsUserNameWithError(true);
            setIsPasswordWithError(true);
            return;
        }

        if (!userName) {
            setIsUserNameWithError(true);
            return;
        }

        if (!password) {
            setIsPasswordWithError(true);
            return;
        }

        const res = signIn(userName, password, isGeneralAdminActivated);

        if (res) {
            setIsLoginWithError(res);
            return;
        }

        navigate("/visao-geral-hospital");
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
                    <C.UserType>
                        <Link to="/" className="hospital-link">Hospital</Link>
                        <Link to="/login-admin" className="adm-link active">Administrador</Link>
                    </C.UserType>
                    <C.Form onSubmit={handleLogin}>

                        <Input.Root>
                            <Input.Login
                                type="text"
                                placeholder="Usuário"
                                id="userName"
                                errorText={isUserNameWithError}
                                onChange={(e: any) => [setUserName(e.target.value), setIsUserNameWithError(false)]}
                            />

                            <Input.LeftIcon
                                htmlFor="userName"
                            >
                                <User size={24} />
                            </Input.LeftIcon>

                            <Input.ErrorMessage
                                errorText={isUserNameWithError}
                            >
                                Por favor, insira um nome de usuário.
                            </Input.ErrorMessage>
                        </Input.Root>

                        <Input.Root>
                            <Input.Login
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Senha"
                                id="userPassword"
                                errorText={isPasswordWithError}
                                onChange={(e: any) => [setPassword(e.target.value), setIsPasswordWithError(false)]}
                            />

                            <Input.LeftIcon
                                htmlFor="userPassword"
                            >
                                <Lock size={24} />
                            </Input.LeftIcon>

                            <Input.RightIcon
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

                        <C.ForgotPasswordContainer>
                            <C.ForgotPasswordText href="#">Esqueceu a senha?</C.ForgotPasswordText>
                        </C.ForgotPasswordContainer>

                        <Button.Login
                            value="Login"
                        />
                    </C.Form>

                    <LoginError error={isLoginWithError} />

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