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

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';
import 'react-toastify/dist/ReactToastify.css';

export function TipoPlantao() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [dutyType, setDutyType] = useState([]);
    const [dutyTypeId, setDutyTypeId] = useState<number>();
    const [search, setSearch] = useState<string>();

    const [dutyTypeInputValue, setDutyTypeInputValue] = useState<any>();
    const [isDutyTypeInputWithError, setIsDutyTypeInputWithError] = useState<boolean>();

    const [dutyTypeInputValueModal, setDutyTypeInputValueModal] = useState<any>();
    const [isDutyTypeInputModalWithError, setIsDutyTypeInputModalWithError] = useState<boolean>();

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-plantao/').then(response => setDutyType(response.data));
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-plantao/', {
                params: {
                    search: search,
                }
            }).then(response => setDutyType(response.data));
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-plantao/').then(response => setDutyType(response.data));
        }

        setDutyTypeInputValue(null);

        setIsFormSubmitted(false);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-plantao/', {
            params: {
                search: search,
            }
        }).then(response => setDutyType(response.data));
    }, [search]);

    async function insertDutyType(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("tipoPlantao", dutyTypeInputValue);

        if (!dutyTypeInputValue) setIsDutyTypeInputWithError(true);

        if (dutyTypeInputValue) {
            await axios.post('http://localhost/buscaSusWeb/api/area-admin/tipo-plantao/', formData);

            setIsFormSubmitted(true);
            toast.success("Tipo de plantão cadastrado com sucesso!");
        }
    }

    async function editDutyType(event: FormEvent) {
        event.preventDefault();

        if (!dutyTypeInputValueModal) setIsDutyTypeInputModalWithError(true);

        if (dutyTypeInputValueModal) {
            await axios.put('http://localhost/buscaSusWeb/api/area-admin/tipo-plantao/', null, {
                params: {
                    tipoPlantao: dutyTypeInputValueModal,
                    idTipoPlantao: dutyTypeId
                }
            });

            setIsFormSubmitted(true);
            toast.success("Tipo de plantão editado com sucesso!");
        }
    }

    async function deleteDutyType() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-admin/tipo-plantao/`, {
            params: {
                idTipoPlantao: dutyTypeId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Tipo de plantão excluído com sucesso!");
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
                    <h3>Cadastrar um novo tipo de plantão</h3>
                    <form ref={formRef} onSubmit={insertDutyType} autoComplete="off">
                        <Label htmlFor="tipoPlantao">
                            Tipo de plantão
                            <Input.Input
                                onChange={(e) => setDutyTypeInputValue(e.target.value)}
                                onBlur={() => dutyTypeInputValue ? setIsDutyTypeInputWithError(false) : setIsDutyTypeInputWithError(true)}
                                isWithIcon={false}
                                errorText={isDutyTypeInputWithError}
                                inputSize={sizes.lg}
                                type="text"
                                id="tipoPlantao"
                            />
                        </Label>
                        <C.ButtonContainer>
                            <Button.Gray
                                onClick={() => [setDutyTypeInputValue(null), setIsDutyTypeInputWithError(false)]}
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
                    <h3>Tipos de plantões cadastrados</h3>
                    <C.InputsContainer>
                        <Input.Root>
                            <Input.Input
                                onChange={(e) => setSearch(e.target.value)}
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
                        <Button.Pdf />
                    </C.InputsContainer>
                </C.TableContainerHeader>
                <C.Table>
                    <C.Thead>
                        <C.Tr>
                            <C.Th>Tipos de plantões</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        {dutyType.map((dt: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{dt.tipoPlantao}</C.Td>
                                <C.Td>
                                    <C.ButtonContainer>
                                        <Modal.Edit
                                            itemId={() => [setDutyTypeId(dt.idTipoPlantao), setDutyTypeInputValueModal(dt.tipoPlantao)]}
                                            closeModal={() => [setDutyTypeId(0), setDutyTypeInputValueModal(null), setIsDutyTypeInputModalWithError(false)]}
                                            title='Editar tipo de plantão'
                                        >
                                            <C.Form onSubmit={editDutyType} autoComplete="off">
                                                <Label htmlFor="tipoPlantaoModal">
                                                    Tipo de plantão
                                                    <Input.Input
                                                        onChange={(e) => setDutyTypeInputValueModal(e.target.value)}
                                                        onBlur={() => dutyTypeInputValueModal ? setIsDutyTypeInputModalWithError(false) : setIsDutyTypeInputModalWithError(true)}
                                                        isWithIcon={false}
                                                        errorText={isDutyTypeInputModalWithError}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        id="tipoPlantaoModal"
                                                        defaultValue={dt.tipoPlantao}
                                                    />
                                                </Label>

                                                <C.ButtonContainer>
                                                    <AlertDialog.Cancel asChild>
                                                        <Button.Gray
                                                            onClick={() => [setDutyTypeInputValueModal(null), setIsDutyTypeInputModalWithError(false)]}
                                                            value="Fechar"
                                                            type="button"
                                                        />
                                                    </AlertDialog.Cancel>
                                                    <Button.Green value="Salvar" type="submit" />
                                                </C.ButtonContainer>
                                            </C.Form>
                                        </Modal.Edit>
                                        <Modal.Alert
                                            itemId={() => { setDutyTypeId(dt.idTipoPlantao) }}
                                            closeModal={() => { setDutyTypeId(0) }}
                                            title="Excluir tipo de plantão"
                                            modalAction={deleteDutyType}
                                            cancel='Cancelar'
                                            submit='Excluir'
                                        >
                                            Deseja excluir o tipo de plantão selecionado?
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