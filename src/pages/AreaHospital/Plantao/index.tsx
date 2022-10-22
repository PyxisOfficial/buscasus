import { DutyCalendar } from '../../../components/Calendar';
import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { MagnifyingGlass, Trash, Pencil } from 'phosphor-react';

import * as C from './styles';

export function Plantao() {
    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>
            <C.Container>
                <C.FormContainer>
                    <h3>Cadastrar um novo plantão</h3>
                    <C.Form autoComplete="off">
                        <input hidden id="idPlantao" name="idPlantao" />
                            <C.Label htmlFor="TipoPlantao">
                                Tipo do plantão
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.lg}
                                    type="text"
                                    id="tipoPlantao"
                                    name="tipoPlantao"
                                />
                            </C.Label>
                        <C.InputContainer>
                            <C.Label htmlFor="inicioPlantao">
                                Início
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="inicioPlantao"
                                    name="inicioPlantao"
                                />
                            </C.Label>
                            <C.Label htmlFor="fimPlantao">
                                Fim
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="fimPlantao"
                                    name="fimPlantao"
                                />
                            </C.Label>
                        </C.InputContainer>
                            <C.Label htmlFor="idMedico">
                                Médico
                                <select name="idMedico" id="idMedico">
                                    <option value="0">Selecionar</option>
                                </select>
                            </C.Label>
                        <input type="hidden" name="idHospital" />

                        <DutyCalendar />

                        <C.ButtonContainer>
                            <Button.Gray value="Cancelar" type="reset" />
                            <Button.Green value="Salvar" type="submit" />
                        </C.ButtonContainer>
                    </C.Form>
                </C.FormContainer>
                <C.TableContainer>
                    <C.TableContainerHeader>
                        <h3>Plantões cadastrados</h3>
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
                                    topPosition={4}
                                    leftPosition={5}
                                >
                                    <MagnifyingGlass size={16} />
                                </Input.LeftIcon>
                            </Input.Root>
                            <Button.Green value="Download" type="button" />
                        </C.InputsContainer>
                    </C.TableContainerHeader>
                    <C.Table>
                        <C.Thead>
                            <C.Tr>
                                <C.Th>Tipo do Plantão</C.Th>
                                <C.Th>Início</C.Th>
                                <C.Th>Fim</C.Th>
                                <C.Th>Médico</C.Th>
                                <C.Th></C.Th>
                            </C.Tr>
                        </C.Thead>
                        <C.Tbody>
                            <C.Tr>
                                <td>Tipo do plantão</td>
                                <td>Início</td>
                                <td>Fim</td>
                                <td>Médico</td>
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
            </C.Container>
        </MenuBackground>
    )
}