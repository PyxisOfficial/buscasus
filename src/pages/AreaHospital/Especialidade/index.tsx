import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Label';
import { Toast } from '../../../components/Toast';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

export function Especialidade() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [specialty, setSpecialty] = useState([]);
    const [specialtyId, setSpecialtyId] = useState<number>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-hospital/especialidade/${hospitalId}`).then((response) => {
            setSpecialty(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-hospital/especialidade/${hospitalId}`).then((response) => {
            setSpecialty(response.data);
        });

        setIsFormSubmitted(false);

        setTimeout(() => {
            setIsToastOpened(false);
        }, 2000);

        formRef.current.reset();
    }, [isFormSubmitted]);

    async function insertSpecialty(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        const allFormData = new FormData(event.target as HTMLFormElement);
        allFormData.append("nomeEspecialidade", data.nomeEspecialidade);
        allFormData.append("idHospital", hospitalId);

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/especialidade/', allFormData);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Especialidade cadastrada com sucesso!");
    }

    async function editSpecialty(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        await axios.put('http://localhost/buscaSusWeb/api/area-hospital/especialidade/', null, {
            params: {
                nomeEspecialidade: data.nomeEspecialidade,
                idEspecialidade: specialtyId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Especialidade editada com sucesso!");
    }

    async function deleteSpecialty() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-hospital/especialidade/${specialtyId}`);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Especialidade excluída com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>

            <Toast.Root
                onOpenChange={isToastOpened}
            >
                <Toast.Description>{messageToast}</Toast.Description>
            </Toast.Root>

            <C.FormContainer>
                <h3>Cadastrar uma nova especialidade</h3>
                <form ref={formRef} onSubmit={insertSpecialty} autoComplete="off">
                    <Label htmlFor="nomeEspecialidade">
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
                    </Label>
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
                        {specialty.map((spe: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{spe.nomeEspecialidade}</C.Td>
                                <C.Td>
                                    <C.ButtonContainer>
                                        <Modal.Edit
                                            itemId={() => { setSpecialtyId(spe.idEspecialidade) }}
                                            closeModal={() => { setSpecialtyId(0) }}
                                            title='Editar especialidade'
                                        >
                                            <C.Form onSubmit={editSpecialty} autoComplete="off">
                                                <Label htmlFor="nomeEspecialidadeModal">
                                                    Nome
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        id="nomeEspecialidadeModal"
                                                        name="nomeEspecialidade"
                                                        defaultValue={spe.nomeEspecialidade}
                                                    />
                                                </Label>

                                                <C.ButtonContainer>
                                                    <AlertDialog.Cancel asChild>
                                                        <Button.Gray value="Fechar" type="button" />
                                                    </AlertDialog.Cancel>
                                                    <Button.Green value="Salvar" type="submit" />
                                                </C.ButtonContainer>
                                            </C.Form>
                                        </Modal.Edit>
                                        <Modal.Alert
                                            itemId={() => { setSpecialtyId(spe.idEspecialidade) }}
                                            closeModal={() => { setSpecialtyId(0) }}
                                            title="Excluir especialidade"
                                            modalAction={deleteSpecialty}
                                            cancel='Cancelar'
                                            submit='Excluir'
                                        >
                                            Deseja excluir a especialidade selecionada?
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