import { MenuBackground } from '../../../components/MenuBackground';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import './styles.css';

export function Especialidade() {
    return (
        <div>
            <MenuBackground
                menuLinks={
                    <MenuLinksHospital />
                }
            >
                <div className="container-cad-esp">
                    <h3 className="titulo-medico">Cadastrar uma nova especialidade</h3>
                    <form id="formEspecialidade" method="POST" action="#">
                        <input id="idEspecialidade" type="hidden" name="idEspecialidade" />
                        <label htmlFor="nomeEspecialidade">Nome da especialidade:</label>
                        <input type="text" id="nomeEspecialidade" className="input-hospital" name="nomeEspecialidade" />
                        <input type="hidden" name="idHospital" />
                        <div className="submit-btn-esp">
                            <input id="btnReset" className="btnReset" type="reset" value="Cancelar" />
                            <input id="btnSubmit" className="btn-submit" type="button" value="Salvar" />
                        </div>
                    </form>
                </div>
                <div className="container-esp">
                    <div className="container-titulo">
                        <h3>Especialidades cadastradas</h3>
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
                                <th>Especialidade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <div className="container-btn-esp select-disable">
                                        <button className="btn-delete"><span className="material-symbols-outlined icones-apagar-editar">delete</span></button>
                                        <button className="btn-edit"><span className="material-symbols-outlined icones-apagar-editar">edit</span></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </MenuBackground>
        </div>
    )
}