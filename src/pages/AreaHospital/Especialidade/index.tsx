import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Button } from '../../../components/Button';

import { MagnifyingGlass, Trash, Pencil } from 'phosphor-react';

import './styles.css';

export function Especialidade() {
    return (
        <div>
            <MenuBackground menuLinks={<MenuLinksHospital />}>
                <div className="container-cad-esp">
                    <h3 className="titulo-medico">Cadastrar uma nova especialidade</h3>
                    <form id="formEspecialidade">
                        <input id="idEspecialidade" type="hidden" name="idEspecialidade" />
                        <label htmlFor="nomeEspecialidade">Nome da especialidade:</label>
                        <input type="text" id="nomeEspecialidade" className="input-hospital" name="nomeEspecialidade" />
                        <input type="hidden" name="idHospital" />
                        <div className="btn-container">
                            <Button.Gray value="Cancelar" type="reset" />
                            <Button.Green value="Salvar" type="submit" />
                        </div>
                    </form>
                </div>
                <div className="container-esp">
                    <div className="container-titulo">
                        <h3>Especialidades cadastradas</h3>
                        <div className="container-inputs">
                            <div className="container-search select-disable">
                                <input id="inputSearch" type="search" className="input-search" placeholder="Buscar" />
                                <label htmlFor="inputSearch"></label>
                            </div>
                            <Button.Green value="Download" type="button" />
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
                                        <Button.Delete>
                                            <Trash size={24} />
                                        </Button.Delete>
                                        <Button.Edit>
                                            <Pencil size={24} />
                                        </Button.Edit>
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