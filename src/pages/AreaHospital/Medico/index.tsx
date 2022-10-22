import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { MagnifyingGlass, Trash, Pencil } from 'phosphor-react';

import * as C from './styles';

export function Medico() {
    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>
            <C.FormContainer>
                <C.Title>Cadastrar um novo médico</C.Title>
                <form autoComplete="off">
                    <input hidden name="idMedico" />
                    <C.InputsContainer>
                        <C.InputContainer>
                            <label htmlFor="nomeMedico">Nome:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                id="nomeMedico"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="cpfMedico">CPF:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                id="cpfMedico"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="crmMedico">CRM:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                id="crmMedico"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="idEspecialidade">Especialidade:</label>
                            <select id="idEspecialidade" className="input-hospital" name="idEspecialidade">
                                <option value="0">Selecionar</option>
                            </select>
                        </C.InputContainer>

                        <label>Foto do médico:</label>
                        <input
                            type="file"
                            accept=".jpg, .png"
                            id="fotoMedico"
                        />

                        <input type="hidden" name="idHospital" />
                    </C.InputsContainer>
                    <C.ButtonContainer>
                        <Button.Gray value="Cancelar" type="reset" />
                        <Button.Green value="Salvar" type="submit" />
                    </C.ButtonContainer>
                </form>
            </C.FormContainer>
            <C.TableContainer>
                <C.TableContainerHeader>
                    <h3>Médicos cadastrados</h3>
                    <C.InputsContainer>
                        <Input.Root>
                            <Input.Input
                                isWithIcon
                                errorText={false}
                                inputSize={sizes.sm}
                                id="search"
                                type="search"
                                placeholder="Buscar"
                            />
                            <Input.LeftIcon
                                htmlFor="search"
                                topPosition={2}
                                leftPosition={3}
                            >
                                <MagnifyingGlass size={20} />
                            </Input.LeftIcon>
                        </Input.Root>
                        <Button.Green value="Download" type="button" />
                    </C.InputsContainer>
                </C.TableContainerHeader>
                <C.Table>
                    <C.Thead>
                        <C.Tr>
                            <C.Th>Foto</C.Th>
                            <C.Th>Nome</C.Th>
                            <C.Th>CPF</C.Th>
                            <C.Th>CRM</C.Th>
                            <C.Th>Especialidade</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        <C.Tr>
                            <td><C.Img src="" /></td>
                            <td>Nome do médico</td>
                            <td>CPF</td>
                            <td>CRM</td>
                            <td>Especialidade</td>
                            <td>
                                <C.ButtonContainer>
                                    <Button.Delete>
                                        <Trash size={24} />
                                    </Button.Delete>
                                    <Button.Edit>
                                        <Pencil size={24} />
                                    </Button.Edit>
                                </C.ButtonContainer>
                            </td>
                        </C.Tr>
                    </C.Tbody>
                </C.Table>
            </C.TableContainer>
        </MenuBackground>
    )
}