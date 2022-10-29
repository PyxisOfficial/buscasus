import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { MagnifyingGlass, Trash, Pencil } from 'phosphor-react';

import * as C from './styles';

export function Especialidade() {
    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>
            <C.FormContainer>
                <h3>Cadastrar uma nova especialidade</h3>
                <form autoComplete="off">
                    <input hidden id="idEspecialidade" name="idEspecialidade" />
                    <C.Label htmlFor="nomeEspecialidade">
                        Especialidade
                        <Input.Input
                            isWithIcon={false}
                            errorText={false}
                            inputSize={sizes.lg}
                            type="text"
                            id="nomeEspecialidade"
                            name="nomeEspecialidade"
                            placeholder='Pediatra'
                        />
                    </C.Label>
                    <input hidden name="idHospital" />
                    <C.ButtonContainer>
                        <Button.Gray value="Cancelar" type="reset" />
                        <Button.Green value="Salvar" type="submit" />
                    </C.ButtonContainer>
                </form>
            </C.FormContainer>
            <C.TableContainer>
                <C.TableContainerHeader>
                    <h3>Especialidades cadastradas</h3>
                    <C.InputsContainer>
                        <Input.Root>
                            <Input.Input
                                isWithIcon
                                errorText={false}
                                inputSize={sizes.lg}
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
                            <C.Th>Especialidade</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        <C.Tr>
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