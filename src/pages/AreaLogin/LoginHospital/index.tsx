import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UseAuth from '../../../hooks/useAuth';

import './styles.css';

export function LoginHospital() {
    const { signIn }: any = UseAuth();
    const [userName, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isGeneralAdmin, setGeneralAdmin] = useState<boolean>();
    const [userNameError, setUserNameError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();
    const [loginError, setLoginError] = useState<string>();
    const navigate = useNavigate();

    useEffect(() => {
        setGeneralAdmin(false);

        const newUser: any[] = ["hospital", "123", false, "Hospital Geral de Guaianazes"];
        localStorage.setItem("users_db", JSON.stringify(newUser))
    }, []);

    function handleLogin() {
        if (!userName && !password) {
            setUserNameError("Por favor, insira seu nome de usuário.");
            setPasswordError("Por favor, insira sua senha.");
            return;
        }

        if (!userName) {
            setUserNameError("Por favor, insira seu nome de usuário.");
            return;
        }

        if (!password) {
            setPasswordError("Por favor, insira sua senha.");
            return;
        }

        const res = signIn(userName, password, isGeneralAdmin);

        if (res) {
            setLoginError(res);
            return;
        }

        navigate("/visao-geral-hospital");
    }

    return (
        <div>
            <div className="versao-incompativel">
                <h2 className="text-versao-incompativel">Versão incompatível!</h2>
            </div>

            <main className="container-login">

                <div className="container-logo">
                    <div className="img-logo-login"></div>
                    <h1>BuscaSUS</h1>
                    <h4>Encontrando o médico mais próximo de você!</h4>
                </div>

                <div className="container-form select-disable">
                    <div className="tipos-usuario">
                        <Link to="/" className="text-tipos-usuario"><span id="btnHospital">Hospital</span></Link>
                        <Link to="/login-admin" className="text-tipos-usuario btn-admin"><span id="btnAdmin">Administrador</span></Link>
                    </div>
                    <form action="validar-login.php" method="POST" id="form">
                        <div className="input-icone">
                            <input
                                onChange={(e) => [setUserName(e.target.value), setUserNameError("")]}
                                id="inputUsuario"
                                className="input"
                                name="nomeAdmin"
                                type="text"
                                placeholder="Usuário"
                            />
                            <label htmlFor="inputUsuario"><span className="material-symbols-outlined icone-input">mail</span></label>
                            <p className="text-erro">{userNameError}</p>
                        </div>

                        <div className="input-icone">
                            <input
                                onChange={(e) => [setPassword(e.target.value), setPasswordError("")]}
                                id="inputSenha"
                                className="input"
                                name="senhaAdmin"
                                type="password"
                                placeholder="Senha"
                            />
                            <label htmlFor="inputSenha"><span className="material-symbols-outlined icone-input">lock_open</span></label>
                            <span className="material-symbols-outlined icone-eye">visibility_off</span>
                            <p className="text-erro">{passwordError}</p>
                        </div>

                        <div className="text-form-container">
                            <a href="#" id="textEsqueceuSenha" className="text-senha">Esqueceu a senha?</a>
                        </div>

                        <input onClick={handleLogin} id="btnSubmit" className="btn-login" type="button" value="Login" />
                    </form>
                    <p id="textErroLogin">{loginError}</p>
                </div>

                <svg className="svg-login" viewBox="0 0 2308 1061" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="2308" height="1061" fill="#ffffff" />
                    <path d="M50.141 356.492C50.141 356.492 498.233 942.202 1154.52 300.973C1810.8 -340.257 2258.89 245.453 2258.89 245.453L2290.47 873.743L81.7266 984.782L50.141 356.492Z" fill="#349684" />
                    <path d="M96.333 405.968C96.333 405.968 507.342 1018.27 1202.03 418.858C1896.71 -180.555 2307.72 431.747 2307.72 431.747L2300.39 1060.79L88.9999 1035.01L96.333 405.968Z" fill="#45CA99" />
                    <rect x="14.2074" y="428.616" width="97" height="377" transform="rotate(2.15196 14.2074 428.616)" fill="#45CA99" />
                    <rect x="59.0194" y="514.36" width="97" height="377" transform="rotate(2.15196 59.0194 514.36)" fill="#45CA99" />
                </svg>
            </main>
        </div>
    )
}