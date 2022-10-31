import { useState } from 'react';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Input, sizes } from '../../../components/Input';
import { Select } from '../../../components/Select';
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
                                <Select.Root
                                    onValueChange={null}
                                    errorText={false}
                                    selectSize={sizes.lg}
                                >
                                    <Select.Item
                                        id={1}
                                        value="1"
                                        title="Hospital Geral de Guaianazes"
                                    />
                                </Select.Root>
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
                                <C.InnerTr>
                                    <C.Td>Nome</C.Td>
                                    <C.Td>*******</C.Td>
                                    <C.Td>Id Hospital</C.Td>
                                    <C.Td>
                                        <C.ButtonContainer>
                                            <Button.Delete>
                                                <Trash size={24} />
                                            </Button.Delete>
                                            <Button.Edit>
                                                <Pencil size={24} />
                                            </Button.Edit>
                                        </C.ButtonContainer>
                                    </C.Td>
                                </C.InnerTr>
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
                            <C.InnerTr>
                                <C.Td>Id</C.Td>
                                <C.Td>Nome</C.Td>
                                <C.Td>Cpf</C.Td>
                            </C.InnerTr>
                        </C.Tbody>
                    </C.Table>
                </C.UserColumn>
            </C.Container>
        </MenuBackground>
    )
}