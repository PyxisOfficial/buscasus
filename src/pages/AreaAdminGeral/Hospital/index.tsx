import { MenuBackground } from '../../../components/MenuBackground';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import './styles.css';

export function Hospital() {
    return (
        <div>
            <MenuBackground
                menuLinks={
                    <MenuLinksAdmin />
                }
            >
                <div className="container-geral">
                    <div className="container-cad-hospital">
                        <h3>Cadastrar um novo hospital</h3>
                        <div className="scroll-inputs">
                            <form id="formHospital" method="post" action="#">
                                <input type="hidden" name="idHospital" />
                                <div>
                                    <label htmlFor="nomeHospital">Nome do hospital:</label>
                                    <input type="text" name="nomeHospital" id="nomeHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="emailHospital">Endereço de e-mail do hospital:</label>
                                    <input type="text" name="emailHospital" id="emailHospital" className="input-admin" />
                                </div>
                                <div>
                                    <input type="hidden" name="idTelefoneHospital" />
                                    <label htmlFor="telefoneHospital">Número de telefone do hospital:</label>
                                    <input type="text" name="numTelefoneHospital" id="telefoneHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="aberturaHospital">Horário de abertura:</label>
                                    <input type="time" name="aberturaHospital" id="aberturaHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="fechamentoHospital">Horário de fechamento:</label>
                                    <input type="time" name="fechamentoHospital" id="fechamentoHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="cnpjHospital">CNPJ:</label>
                                    <input type="text" name="cnpjHospital" id="cnpjHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="cepHospital">CEP:</label>
                                    <input type="text" name="cepHospital" id="cepHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="ufHospital">UF:</label>
                                    <input type="text" name="ufHospital" id="ufHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="logradouroHospital">Logradouro:</label>
                                    <input type="text" name="logradouroHospital" id="logradouroHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="complementoHospital">Complemento:</label>
                                    <input type="text" name="complementoHospital" id="complementoHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="cidadeHospital">Cidade:</label>
                                    <input type="text" name="cidadeHospital" id="cidadeHospital" className="input-admin" />
                                </div>
                                <div>
                                    <label htmlFor="bairroHospital">Bairro:</label>
                                    <input type="text" name="bairroHospital" id="bairroHospital" className="input-admin" />
                                </div>
                                <div>
                                    <div id="containerFoto" className="container-foto">
                                        <input id="inputCaminhoImg" type="text" disabled />
                                        <label className="btnFoto select-disable" htmlFor="fotoHospital">Escolher foto</label>
                                    </div>
                                    <input hidden type="file" accept=".jpg, .png" name="fotoHospital" id="fotoHospital" />
                                </div>

                                <div className="submit-btn-hosp">
                                    <input id="btnReset" className="btnReset" type="reset" value="Cancelar" />
                                    <input id="btnSubmit" className="btn-submit" type="button" value="Salvar" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container-hosp">
                        <div className="container-titulo">
                            <h3>Hospitais cadastrados</h3>
                            <div className="container-inputs">
                                <div className="container-search select-disable">
                                    <input id="inputSearch" type="search" className="input-search" placeholder="Buscar" />
                                    <label htmlFor="inputSearch"><span className="material-symbols-outlined icone-search">search</span></label>
                                </div>
                                <input type="button" className="btn-submit" value="Download" />
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome do hospital</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button className="btn-info btn-hospital-list select-disable"><span className="material-symbols-outlined icones-apagar-editar">info</span></button>
                                        <button className="btn-delete btn-hospital-list select-disable"><span className="material-symbols-outlined icones-apagar-editar">delete</span></button>
                                        <button className="btn-edit btn-hospital-list select-disable"><span className="material-symbols-outlined icones-apagar-editar">edit</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </MenuBackground>
        </div>
    )
}