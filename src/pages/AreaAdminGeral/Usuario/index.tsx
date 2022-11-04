import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Toast } from '../../../components/Toast';
import { Label } from '../../../components/Form/Label';

import { MagnifyingGlass, EyeSlash, Eye } from 'phosphor-react';

import * as C from './styles';

export function Usuario() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [adminUsers, setAdminUsers] = useState([]);
    const [adminUserId, setAdminUserId] = useState<number>();
    const [hospital, setHospital] = useState([]);
    const [searchAdmin, setSearchAdmin] = useState<string>();

    const formRef = useRef<any>();

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/').then((response) => {
            setAdminUsers(response.data);
        });

        axios.get('http://localhost/buscaSusWeb/api/area-admin/hospital/').then((response) => {
            setHospital(response.data);
        });
    }, []);

    useEffect(() => {
        if (searchAdmin) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/', {
                params: {
                    search: searchAdmin
                }
            }).then((response) => {
                setAdminUsers(response.data);
            });
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/').then((response) => {
                setAdminUsers(response.data);
            });
        }

        setIsFormSubmitted(false);

        setTimeout(() => {
            setIsToastOpened(false);
        }, 2000);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/', {
            params: {
                search: searchAdmin,
            }
        }).then(response => {
            setAdminUsers(response.data);
        });
    }, [searchAdmin]);

    async function insertUser(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);
        formData.append("loginAdmin", data.loginAdmin);
        formData.append("senhaAdmin", data.senhaAdmin);
        formData.append("idHospital", data.idHospital);

        await axios.post('http://localhost/buscaSusWeb/api/area-admin/admin/', formData);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Administrador cadastrado com sucesso!");
    }

    async function editUser(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        await axios.put('http://localhost/buscaSusWeb/api/area-admin/admin/', null, {
            params: {
                senhaAdmin: data.senhaAdmin,
                idAdmin: adminUserId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Administrador editado com sucesso!");
    }

    async function deleteUser() {
        await axios.delete('http://localhost/buscaSusWeb/api/area-admin/admin/', {
            params: {
                idAdmin: adminUserId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Administrador excluído com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>

            <Toast.Root
                onOpenChange={isToastOpened}
            >
                <Toast.Description>{messageToast}</Toast.Description>
            </Toast.Root>

            <C.FormContainer>
                <C.Title>Cadastrar novo administrador de um hospital</C.Title>
                <form ref={formRef} onSubmit={insertUser} autoComplete="off">
                    <C.InputsContainer>
                        <Label htmlFor="loginAdmin">
                            Nome de usuário
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="loginAdmin"
                                id="loginAdmin"
                            />
                        </Label>


                        <Label htmlFor="senhaAdmin">
                            Senha
                            <Input.Root>
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="senhaAdmin"
                                    id="senhaAdmin"
                                />

                                <Input.RightIcon
                                    topPosition={1}
                                    rightPosition={4}
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                >
                                    {isPasswordVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                                </Input.RightIcon>

                            </Input.Root>
                        </Label>


                        <Label htmlFor="confirmarSenha">
                            Confirmar senha
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
                        </Label>

                        <Label htmlFor="idHospital">
                            Hospital
                            <C.Select name="idHospital">
                                <option value="0">Selecione</option>
                                {hospital.map((hosp: any) =>
                                    <option
                                        key={hosp.idHospital}
                                        value={hosp.idHospital}
                                    >
                                        {hosp.nomeHospital}
                                    </option>
                                )}
                            </C.Select>
                        </Label>
                    </C.InputsContainer>


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
                                onChange={(e) => setSearchAdmin(e.target.value)}
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
                        <Button.Pdf />
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
                        {adminUsers.map((user: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{user.loginAdmin}</C.Td>
                                <C.Td>{user.senhaAdmin}</C.Td>
                                <C.Td>{user.idHospital}</C.Td>
                                <C.Td>
                                    <C.ButtonContainer>
                                        <Modal.Edit
                                            itemId={() => { setAdminUserId(user.idAdmin) }}
                                            closeModal={() => { setAdminUserId(0) }}
                                            title='Editar administrador'
                                        >
                                            <form onSubmit={editUser} autoComplete="off">
                                                <Label htmlFor="loginAdminModal">
                                                    Nome de usuário
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        name="loginAdmin"
                                                        id="loginAdminModal"
                                                        defaultValue={user.loginAdmin}
                                                        disabled
                                                    />
                                                </Label>
                                                <Label htmlFor="senhaAdminModal">
                                                    Nova senha
                                                    <Input.Root>
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type={isPasswordVisible ? "text" : "password"}
                                                            name="senhaAdmin"
                                                            id="senhaAdminModal"
                                                        />

                                                        <Input.RightIcon
                                                            topPosition={1}
                                                            rightPosition={4}
                                                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                                        >
                                                            {isPasswordVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                                                        </Input.RightIcon>

                                                    </Input.Root>
                                                </Label>
                                                <Label htmlFor="confirmarSenhaModal">
                                                    Confirmar nova senha
                                                    <Input.Root>
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type={isConfirmPasswordVisible ? "text" : "password"}
                                                            id="confirmarSenhaModal"
                                                        />

                                                        <Input.RightIcon
                                                            topPosition={1}
                                                            rightPosition={4}
                                                            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                                        >
                                                            {isConfirmPasswordVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                                                        </Input.RightIcon>

                                                    </Input.Root>
                                                </Label>
                                                <C.ButtonContainer>
                                                    <AlertDialog.Cancel asChild>
                                                        <Button.Gray value="Fechar" type="button" />
                                                    </AlertDialog.Cancel>
                                                    <Button.Green value="Salvar" type="submit" />
                                                </C.ButtonContainer>
                                            </form>
                                        </Modal.Edit>
                                        <Modal.Alert
                                            itemId={() => { setAdminUserId(user.idAdmin) }}
                                            closeModal={() => { setAdminUserId(0) }}
                                            title="Excluir administrador"
                                            modalAction={deleteUser}
                                            cancel='Cancelar'
                                            submit='Excluir'
                                        >
                                            Deseja excluir o administrador selecionado?
                                        </Modal.Alert>
                                    </C.ButtonContainer>
                                </C.Td>
                            </C.InnerTr>
                        )}
                    </C.Tbody>
                </C.Table>
            </C.TableContainer>
        </MenuBackground>
    )
}