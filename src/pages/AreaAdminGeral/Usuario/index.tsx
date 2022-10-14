import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import './styles.css';

export function Usuario() {
    return (
        <div>
            <MenuBackground
                menuLinks={
                    <MenuLinksAdmin />
                }
            >
                <div className="container-geral">
                    <div className="container-column-admin">
                        <div className="container-cad-admin">
                            <h3 className="titulo-medico">Cadastrar novo administrador de um hospital</h3>
                            <form id="formAdminHospital" method="post" action="#">
                                <input type="hidden" name="idAdminHospital" />
                                <div>
                                    <label htmlFor="loginAdminHospital">Nome de usuário:</label>
                                    <input type="text" name="loginAdminHospital" id="loginAdminHospital" className="input-admin" />
                                </div>
                                <div className="input-icone">
                                    <label htmlFor="senhaAdminHospital">Senha:</label>
                                    <input type="password" name="senhaAdminHospital" id="senhaAdminHospital" className="input-admin" />
                                    <span className="material-symbols-outlined eye-admin-senha select-disable">visibility</span>
                                </div>
                                <div className="input-icone">
                                    <label htmlFor="confirmarSenha">Confirmar senha:</label>
                                    <input type="password" id="confirmarSenha" className="input-admin" />
                                    <span className="material-symbols-outlined eye-admin-confirmar select-disable">visibility</span>
                                </div>
                                <input type="hidden" name="tipoAdmin" value="1" />
                                <div>
                                    <label htmlFor="idHospital">Hospital:</label>
                                    <select id="idHospital" className="input-admin" name="idHospital">
                                        <option value="0">Selecionar</option>
                                    </select>
                                </div>
                                <div>
                                    <input id="btnReset" className="btnReset" type="reset" value="Cancelar" />
                                    <input id="btnSubmit" className="btn-submit" type="button" value="Salvar" />
                                </div>
                            </form>
                        </div>

                        <div className="container-admin-hosp">
                            <h3>Administradores de hospitais cadastrados</h3>
                            <div className="container-search-download">
                                <div className="container-inputs">
                                    <div className="container-search select-disable">
                                        <input id="inputSearchAdmin" type="search" className="input-search" placeholder="Buscar" />
                                        <label htmlFor="inputSearchAdmin"><span className="material-symbols-outlined icone-search">search</span></label>
                                    </div>
                                    <input type="button" className="btn-submit" value="Download" />
                                </div>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome de usuário</th>
                                        <th>Senha</th>
                                        <th>Id do Hospital</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button className="btn-delete select-disable"><span className="material-symbols-outlined icones-apagar-editar">delete</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="container-usuario">
                        <div className="container-titulo">
                            <h3>Usuários cadastrados</h3>
                            <div className="container-inputs">
                                <div className="container-search select-disable">
                                    <input id="inputSearchUsuario" type="search" className="input-search" placeholder="Buscar" />
                                    <label htmlFor="inputSearchUsuario"><span className="material-symbols-outlined icone-search">search</span></label>
                                </div>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </MenuBackground>
        </div>
    )
}