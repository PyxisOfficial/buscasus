import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { Toast } from '../../../components/Toast';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

export function TipoPlantao() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [dutyType, setDutyType] = useState([]);
    const [dutyTypeId, setDutyTypeId] = useState<number>();
    const [search, setSearch] = useState<string>();

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/').then(response => {
            setDutyType(response.data);
        });
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/', {
                params: {
                    search: search,
                }
            }).then(response => {
                setDutyType(response.data);
            });
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/').then(response => {
                setDutyType(response.data);
            });
        }

        setIsFormSubmitted(false);

        setTimeout(() => {
            setIsToastOpened(false);
        }, 2000);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/', {
            params: {
                search: search,
            }
        }).then(response => {
            setDutyType(response.data);
        })
    }, [search]);

    async function insertDutyType(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);
        formData.append("tipoPlantao", data.tipoPlantao);

        await axios.post('http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/', formData);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Tipo de plantão cadastrado com sucesso!");
    }

    async function editDutyType(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        await axios.put('http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/', null, {
            params: {
                tipoPlantao: data.tipoPlantao,
                idTipoPlantao: dutyTypeId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Tipo de plantão editado com sucesso!");
    }

    async function deleteDutyType() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/`, {
            params: {
                idTipoPlantao: dutyTypeId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Tipo de plantão excluído com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>

            <Toast.Root
                onOpenChange={isToastOpened}
            >
                <Toast.Description>{messageToast}</Toast.Description>
            </Toast.Root>

            <C.FormContainer>
                <h3>Cadastrar um novo tipo de plantão</h3>
                <form ref={formRef} onSubmit={insertDutyType} autoComplete="off">
                    <Label htmlFor="tipoPlantao">
                        Tipo de plantão
                        <Input.Input
                            isWithIcon={false}
                            errorText={false}
                            inputSize={sizes.lg}
                            type="text"
                            id="tipoPlantao"
                            name="tipoPlantao"
                            placeholder="COVID"
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
                                            itemId={() => { setDutyTypeId(dt.idTipoPlantao) }}
                                            closeModal={() => { setDutyTypeId(0) }}
                                            title='Editar tipo de plantão'
                                        >
                                            <C.Form onSubmit={editDutyType} autoComplete="off">
                                                <Label htmlFor="tipoPlantaoModal">
                                                    Tipo de plantão
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        id="tipoPlantaoModal"
                                                        name="tipoPlantao"
                                                        defaultValue={dt.tipoPlantao}
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