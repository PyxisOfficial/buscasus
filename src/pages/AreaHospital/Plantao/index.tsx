import { MenuBackground } from '../../../components/MenuBackground';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import './styles.css';

export function Plantao() {
    return (
        <div>
            <MenuBackground
                menuLinks={
                    <MenuLinksHospital />
                }
            >
                <div className="container-cad-plant">
                    <h3 className="titulo-medico">Cadastrar uma novo plantão</h3>
                    <form id="formPlantao" method="POST" action="#">
                        <input id="idPlantao" type="hidden" name="idPlantao" />
                        <div className="container-inputs-plant">
                            <div className="input-plant">
                                <label htmlFor="TipoPlantao">Tipo do plantão:</label>
                                <input type="text" id="tipoPlantao" className="input-hospital" name="tipoPlantao" />
                            </div>
                            <div className="input-plant">
                                <div className="inicio-plant">
                                    <label htmlFor="inicioPlantao">Início:</label>
                                    <input id="inicioPlantao" type="datetime-local" className="input-hospital" name="inicioPlantao" />
                                </div>

                                <div className="fim-plant">
                                    <label htmlFor="fimPlantao">Fim:</label>
                                    <input id="fimPlantao" type="datetime-local" className="input-hospital" name="fimPlantao" />
                                </div>
                            </div>
                            <div className="input-plant">
                                <label htmlFor="idMedico">Médico:</label>
                                <select name="idMedico" id="idMedico" className="input-hospital">
                                    <option value="0">Selecionar</option>
                                </select>
                            </div>
                            <input type="hidden" name="idHospital" />
                        </div>
                        <div className="submit-btn-plant">
                            <input id="btnReset" className="btnReset" type="reset" value="Cancelar" />
                            <input id="btnSubmit" className="btn-submit" type="button" value="Salvar" />
                        </div>
                    </form>
                </div>
                <div className="container-plant">
                    <div className="container-titulo">
                        <h3>Plantões cadastrados</h3>
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
                                <th>Tipo do Plantão</th>
                                <th>Início</th>
                                <th>Fim</th>
                                <th>Médico</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
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