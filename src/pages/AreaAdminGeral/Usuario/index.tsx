import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { ToastContainer, toast } from 'react-toastify';

import { MagnifyingGlass, EyeSlash, Eye } from 'phosphor-react';
import 'react-toastify/dist/ReactToastify.css';

import * as C from './styles';

export function Usuario() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [adminUsers, setAdminUsers] = useState([]);
    const [adminUserId, setAdminUserId] = useState<number>();
    const [hospital, setHospital] = useState([]);
    const [searchAdmin, setSearchAdmin] = useState<string>();

    const [loginInputValue, setLoginInputValue] = useState<any>();
    const [passwordInputValue, setPasswordInputValue] = useState<any>();
    const [confirmPasswordInputValue, setConfirmPasswordInputValue] = useState<any>();
    const [hospitalInputValue, setHospitalInputValue] = useState<any>();
    const [isLoginInputWithError, setIsLoginInputWithError] = useState<boolean>();
    const [isPasswordInputWithError, setIsPasswordInputWithError] = useState<boolean>();
    const [isConfirmPasswordInputWithError, setIsConfirmPasswordInputWithError] = useState<boolean>();
    const [isHospitalInputWithError, setIsHospitalInputWithError] = useState<boolean>();

    const [passwordInputValueModal, setPasswordInputValueModal] = useState<any>();
    const [confirmPasswordInputValueModal, setConfirmPasswordInputValueModal] = useState<any>();
    const [isPasswordInputModalWithError, setIsPasswordInputModalWithError] = useState<boolean>();
    const [isConfirmPasswordInputModalWithError, setIsConfirmPasswordInputModalWithError] = useState<boolean>();

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState<boolean>(false);
    const [isConfirmPasswordModalVisible, setIsConfirmPasswordModalVisible] = useState<boolean>(false);

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/').then(response => setAdminUsers(response.data));
        axios.get('http://localhost/buscaSusWeb/api/area-admin/hospital/').then(response => setHospital(response.data));
    }, []);

    useEffect(() => {
        if (searchAdmin) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/', {
                params: {
                    search: searchAdmin
                }
            }).then(response => setAdminUsers(response.data));
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/').then(response => setAdminUsers(response.data));
        }

        setLoginInputValue(null);
        setPasswordInputValue(null);
        setConfirmPasswordInputValue(null);
        setHospitalInputValue(null);

        setIsFormSubmitted(false);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/admin/', {
            params: {
                search: searchAdmin,
            }
        }).then(response => setAdminUsers(response.data));
    }, [searchAdmin]);

    async function insertUser(event: FormEvent) {
        event.preventDefault();

        if (!loginInputValue) setIsLoginInputWithError(true);
        if (!passwordInputValue) setIsPasswordInputWithError(true);
        if (confirmPasswordInputValue !== passwordInputValue || !confirmPasswordInputValue) setIsConfirmPasswordInputWithError(true);
        if (hospitalInputValue == 0 || !hospitalInputValue) setIsHospitalInputWithError(true);

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("loginAdmin", loginInputValue);
        formData.append("senhaAdmin", passwordInputValue);
        formData.append("idHospital", hospitalInputValue);

        if (loginInputValue && passwordInputValue && confirmPasswordInputValue && hospitalInputValue > 0 && passwordInputValue === confirmPasswordInputValue) {
            await axios.post('http://localhost/buscaSusWeb/api/area-admin/admin/', formData);

            setIsFormSubmitted(true);
            toast.success("Administrador cadastrado com sucesso!");
        }
    }

    async function editUser(event: FormEvent) {
        event.preventDefault();

        if (!passwordInputValueModal) setIsPasswordInputModalWithError(true);
        if (confirmPasswordInputValueModal !== confirmPasswordInputValueModal || !confirmPasswordInputValueModal) setIsConfirmPasswordInputModalWithError(true);

        if (passwordInputValueModal && confirmPasswordInputValueModal && passwordInputValueModal === confirmPasswordInputValueModal) {
            await axios.put('http://localhost/buscaSusWeb/api/area-admin/admin/', null, {
                params: {
                    senhaAdmin: passwordInputValueModal,
                    idAdmin: adminUserId
                }
            });

            setIsFormSubmitted(true);
            toast.success("Administrador editado com sucesso!");
        }
    }

    async function deleteUser() {
        await axios.delete('http://localhost/buscaSusWeb/api/area-admin/admin/', {
            params: {
                idAdmin: adminUserId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Administrador excluído com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <C.InsertContainer>
                <C.FormContainer>
                    <C.Title>Cadastrar novo administrador de um hospital</C.Title>
                    <form ref={formRef} onSubmit={insertUser} autoComplete="off">
                        <C.InputsContainer>
                            <Label htmlFor="loginAdmin">
                                Nome de usuário
                                <Input.Input
                                    onChange={(e) => setLoginInputValue(e.target.value)}
                                    onBlur={() => loginInputValue ? setIsLoginInputWithError(false) : null}
                                    isWithIcon={false}
                                    errorText={isLoginInputWithError}
                                    inputSize={sizes.sm}
                                    type="text"
                                    id="loginAdmin"
                                />
                            </Label>


                            <Label htmlFor="senhaAdmin">
                                Senha
                                <Input.Root>
                                    <Input.Input
                                        onChange={(e) => setPasswordInputValue(e.target.value)}
                                        onBlur={() => [passwordInputValue ? setIsPasswordInputWithError(false) : null, passwordInputValue === confirmPasswordInputValue ? setIsConfirmPasswordInputWithError(false) : setIsConfirmPasswordInputWithError(true)]}
                                        isWithIcon={false}
                                        errorText={isPasswordInputWithError}
                                        inputSize={sizes.sm}
                                        type={isPasswordVisible ? "text" : "password"}
                                        id="senhaAdmin"
                                    />

                                    <Input.RightIcon
                                        topPosition={1}
                                        rightPosition={4}
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    >
                                        {isPasswordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
                                    </Input.RightIcon>

                                </Input.Root>
                            </Label>


                            <Label htmlFor="confirmarSenha">
                                Confirmar senha
                                <Input.Root>
                                    <Input.Input
                                        onChange={(e) => setConfirmPasswordInputValue(e.target.value)}
                                        onBlur={() => confirmPasswordInputValue === passwordInputValue ? setIsConfirmPasswordInputWithError(false) : setIsConfirmPasswordInputWithError(true)}
                                        isWithIcon={false}
                                        errorText={isConfirmPasswordInputWithError}
                                        inputSize={sizes.sm}
                                        type={isConfirmPasswordVisible ? "text" : "password"}
                                        id="confirmarSenha"
                                    />

                                    <Input.RightIcon
                                        topPosition={1}
                                        rightPosition={4}
                                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                    >
                                        {isConfirmPasswordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
                                    </Input.RightIcon>

                                </Input.Root>
                            </Label>

                            <Label htmlFor="idHospital">
                                Hospital
                                <C.Select
                                    onChange={(e) => setHospitalInputValue(e.target.value)}
                                    onBlur={() => hospitalInputValue > 0 ? setIsHospitalInputWithError(false) : null}
                                    errorText={isHospitalInputWithError}
                                >
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
                            <Button.Gray
                                onClick={() => [
                                    setLoginInputValue(null), setPasswordInputValue(null), setConfirmPasswordInputValue(null), setHospitalInputValue(null),
                                    setIsLoginInputWithError(false), setIsPasswordInputWithError(false), setIsConfirmPasswordInputWithError(false), setIsHospitalInputWithError(false)
                                ]}
                                value="Cancelar"
                                type="reset"
                            />
                            <Button.Green value="Salvar" type="submit" />
                        </C.ButtonContainer>
                    </form>
                </C.FormContainer>
            </C.InsertContainer>

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
                            <C.Th>Nome do hospital</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        {adminUsers.map((user: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{user.loginAdmin}</C.Td>
                                <C.OccultedTd>{user.senhaAdmin}</C.OccultedTd>
                                <C.Td>{user.nomeHospital}</C.Td>
                                <C.Td>
                                    <C.ButtonContainer>
                                        <Modal.Edit
                                            itemId={() => setAdminUserId(user.idAdmin)}
                                            closeModal={() => [
                                                setAdminUserId(0), setPasswordInputValueModal(null), setConfirmPasswordInputValueModal(null),
                                                setIsPasswordInputModalWithError(false), setIsConfirmPasswordInputWithError(false)
                                            ]}
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
                                                        id="loginAdminModal"
                                                        defaultValue={user.loginAdmin}
                                                        disabled
                                                    />
                                                </Label>
                                                <Label htmlFor="senhaAdminModal">
                                                    Nova senha
                                                    <Input.Root>
                                                        <Input.Input
                                                            onChange={(e) => setPasswordInputValueModal(e.target.value)}
                                                            onBlur={() => [passwordInputValueModal ? setIsPasswordInputModalWithError(false) : null, passwordInputValueModal === confirmPasswordInputValueModal ? setIsConfirmPasswordInputModalWithError(false) : setIsConfirmPasswordInputModalWithError(true)]}
                                                            isWithIcon={false}
                                                            errorText={isPasswordInputModalWithError}
                                                            inputSize={sizes.xl}
                                                            type={isPasswordModalVisible ? "text" : "password"}
                                                            id="senhaAdminModal"
                                                        />

                                                        <Input.RightIcon
                                                            topPosition={1}
                                                            rightPosition={4}
                                                            onClick={() => setIsPasswordModalVisible(!isPasswordModalVisible)}
                                                        >
                                                            {isPasswordModalVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                                                        </Input.RightIcon>

                                                    </Input.Root>
                                                </Label>
                                                <Label htmlFor="confirmarSenhaModal">
                                                    Confirmar nova senha
                                                    <Input.Root>
                                                        <Input.Input
                                                            onChange={(e) => setConfirmPasswordInputValueModal(e.target.value)}
                                                            onBlur={() => confirmPasswordInputValueModal === passwordInputValueModal ? setIsConfirmPasswordInputModalWithError(false) : setIsConfirmPasswordInputModalWithError(true)}
                                                            isWithIcon={false}
                                                            errorText={isConfirmPasswordInputModalWithError}
                                                            inputSize={sizes.xl}
                                                            type={isConfirmPasswordModalVisible ? "text" : "password"}
                                                            id="confirmarSenhaModal"
                                                        />

                                                        <Input.RightIcon
                                                            topPosition={1}
                                                            rightPosition={4}
                                                            onClick={() => setIsConfirmPasswordModalVisible(!isConfirmPasswordModalVisible)}
                                                        >
                                                            {isConfirmPasswordModalVisible ? <EyeSlash size={24} /> : <Eye size={24} />}
                                                        </Input.RightIcon>

                                                    </Input.Root>
                                                </Label>
                                                <C.ButtonContainer>
                                                    <AlertDialog.Cancel asChild>
                                                        <Button.Gray
                                                            onClick={() => [
                                                                setPasswordInputValueModal(null), setConfirmPasswordInputValueModal(null),
                                                                setIsPasswordInputModalWithError(false), setIsConfirmPasswordInputModalWithError(false)
                                                            ]}
                                                            value="Fechar"
                                                            type="button"
                                                        />
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