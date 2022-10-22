import { useState } from 'react';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { MagnifyingGlass, Trash, Pencil, EyeSlash, Eye } from 'phosphor-react';

import * as C from './styles';

export function Usuario() {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>
            <C.Container>
                <C.AdminColumn>
                    <C.FormContainer>
                        <C.Title>Cadastrar novo administrador de um hospital</C.Title>
                        <form autoComplete="off">
                            <input hidden name="idAdminHospital" />
                            <C.InputContainer>
                                <label htmlFor="loginAdminHospital">Nome de usuário:</label>
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    type="text"
                                    name="loginAdminHospital"
                                    id="loginAdminHospital"
                                />
                            </C.InputContainer>
                            <C.InputContainer>
                                <label htmlFor="senhaAdminHospital">Senha:</label>
                                <Input.Root>
                                    <Input.Input
                                        isWithIcon={false}
                                        errorText={false}
                                        inputSize={sizes.sm}
                                        type={isPasswordVisible ? "text" : "password"}
                                        name="senhaAdminHospital"
                                        id="senhaAdminHospital"
                                    />

                                    <Input.RightIcon
                                        topPosition={1}
                                        rightPosition={4}
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    >
                                        {isPasswordVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                                    </Input.RightIcon>

                                </Input.Root>
                            </C.InputContainer>
                            <C.InputContainer>
                                <label htmlFor="confirmarSenha">Confirmar senha:</label>
                                <Input.Root>
                                    <Input.Input
                                        isWithIcon={false}
                                        errorText={false}
                                        inputSize={sizes.sm}
                                        type={isConfirmPasswordVisible ? "text" : "password"}
                                        id="confirmarSenha"
                                    />

                                    <Input.RightIcon
                                        topPosition={1}
                                        rightPosition={4}
                                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                    >
                                        {isConfirmPasswordVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                                    </Input.RightIcon>

                                </Input.Root>
                            </C.InputContainer>
                            <input type="hidden" name="tipoAdmin" value="1" />
                            <C.InputContainer>
                                <label htmlFor="idHospital">Hospital:</label>
                                <select id="idHospital" className="input-admin" name="idHospital">
                                    <option value="0">Selecionar</option>
                                </select>
                            </C.InputContainer>
                            <C.ButtonContainer>
                                <Button.Gray value="Cancelar" type="reset" />
                                <Button.Green value="Salvar" type="submit" />
                            </C.ButtonContainer>
                        </form>
                    </C.FormContainer>

                    <C.TableContainer>
                        <C.TableContainerHeader>
                            <h3>Administradores cadastrados</h3>
                            <C.InputsContainer>
                                <Input.Root>
                                    <Input.Input
                                        isWithIcon
                                        errorText={false}
                                        inputSize={sizes.sm}
                                        id="adminSearch"
                                        type="search"
                                        placeholder="Buscar"
                                    />
                                    <Input.LeftIcon
                                        htmlFor="adminSearch"
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
                                    <C.Th>Nome de usuário</C.Th>
                                    <C.Th>Senha</C.Th>
                                    <C.Th>Id do Hospital</C.Th>
                                    <C.Th></C.Th>
                                </C.Tr>
                            </C.Thead>
                            <C.Tbody>
                                <C.Tr>
                                    <td>Nome</td>
                                    <td>*******</td>
                                    <td>Id Hospital</td>
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
                </C.AdminColumn>
                <C.UserColumn>
                    <C.TableContainerHeader>
                        <h3>Usuários cadastrados</h3>
                        <C.InputsContainer>
                            <Input.Root>
                                <Input.Input
                                    isWithIcon
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    id="userSearch"
                                    type="search"
                                    placeholder="Buscar"
                                />
                                <Input.LeftIcon
                                    htmlFor="userSearch"
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
                                <C.Th>Id</C.Th>
                                <C.Th>Nome</C.Th>
                                <C.Th>CPF</C.Th>
                            </C.Tr>
                        </C.Thead>
                        <C.Tbody>
                            <C.Tr>
                                <td>Id</td>
                                <td>Nome</td>
                                <td>Cpf</td>
                            </C.Tr>
                        </C.Tbody>
                    </C.Table>
                </C.UserColumn>
            </C.Container>
        </MenuBackground>
    )
}