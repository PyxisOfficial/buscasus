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

export function TipoReclamacao() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [claimType, setClaimType] = useState([]);
    const [claimTypeId, setClaimTypeId] = useState<number>();
    const [search, setSearch] = useState<string>();

    const [claimTypeInputValue, setClaimTypeInputValue] = useState<any>();
    const [isClaimTypeInputWithError, setIsClaimTypeInputWithError] = useState<boolean>();

    const [claimTypeInputValueModal, setClaimTypeInputValueModal] = useState<any>();
    const [isClaimTypeInputModalWithError, setIsClaimTypeInputModalWithError] = useState<boolean>();

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-reclamacao/').then(response => setClaimType(response.data));
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-reclamacao/', {
                params: {
                    search: search,
                }
            }).then(response => setClaimType(response.data));
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-reclamacao/').then(response => setClaimType(response.data));
        }

        setClaimTypeInputValue(null);

        setIsFormSubmitted(false);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/tipo-reclamacao/', {
            params: {
                search: search,
            }
        }).then(response => setClaimType(response.data));
    }, [search]);

    async function insertClaimType(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("tipoReclamacao", claimTypeInputValue);

        if (!claimTypeInputValue) setIsClaimTypeInputWithError(true);

        if (claimTypeInputValue) {
            await axios.post('http://localhost/buscaSusWeb/api/area-admin/tipo-reclamacao/', formData);

            setIsFormSubmitted(true);
            toast.success("Tipo de reclamação cadastrado com sucesso!");
        }
    }

    async function editClaimType(event: FormEvent) {
        event.preventDefault();

        if (!claimTypeInputValueModal) setIsClaimTypeInputModalWithError(true);

        if (claimTypeInputValueModal) {
            await axios.put('http://localhost/buscaSusWeb/api/area-admin/tipo-reclamacao/', null, {
                params: {
                    tipoReclamacao: claimTypeInputValueModal,
                    idTipoReclamacao: claimTypeId
                }
            });

            setIsFormSubmitted(true);
            toast.success("Tipo de reclamação editado com sucesso!");
        }
    }

    async function deleteClaimType() {
        await axios.delete('http://localhost/buscaSusWeb/api/area-admin/tipo-reclamacao/', {
            params: {
                idTipoReclamacao: claimTypeId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Tipo de reclamação excluído com sucesso!");
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
                    <h3>Cadastrar um novo tipo de reclamação</h3>
                    <form ref={formRef} onSubmit={insertClaimType} autoComplete="off">
                        <Label htmlFor="tipoPlantao">
                            Tipo de reclamação
                            <Input.Input
                                onChange={(e) => setClaimTypeInputValue(e.target.value)}
                                onBlur={() => claimTypeInputValue ? setIsClaimTypeInputWithError(false) : null}
                                isWithIcon={false}
                                errorText={isClaimTypeInputWithError}
                                inputSize={sizes.lg}
                                type="text"
                                id="tipoReclamacao"
                            />
                        </Label>
                        <C.ButtonContainer>
                            <Button.Gray
                                onClick={() => [setClaimTypeInputValue(null), setIsClaimTypeInputWithError(false)]}
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
                    <h3>Tipos de reclamações cadastrados</h3>
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
                            <C.Th>Tipos de reclamações</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        {claimType.map((claim: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{claim.tipoReclamacao}</C.Td>
                                <C.Td>
                                    <C.ButtonContainer>
                                        <Modal.Edit
                                            itemId={() => [setClaimTypeId(claim.idTipoReclamacao), setClaimTypeInputValueModal(claim.tipoReclamacao)]}
                                            closeModal={() => [setClaimTypeId(0), setClaimTypeInputValueModal(null), setIsClaimTypeInputModalWithError(false)]}
                                            title='Editar tipo de reclamação'
                                        >
                                            <C.Form onSubmit={editClaimType} autoComplete="off">
                                                <Label htmlFor="tipoReclamacaoModal">
                                                    Tipo de reclamação
                                                    <Input.Input
                                                        onChange={(e) => setClaimTypeInputValueModal(e.target.value)}
                                                        onBlur={() => claimTypeInputValueModal ? setIsClaimTypeInputModalWithError(false) : null}
                                                        isWithIcon={false}
                                                        errorText={isClaimTypeInputModalWithError}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        id="tipoReclamacaoModal"
                                                        defaultValue={claim.tipoReclamacao}
                                                    />
                                                </Label>

                                                <C.ButtonContainer>
                                                    <AlertDialog.Cancel asChild>
                                                        <Button.Gray
                                                            onClick={() => [setClaimTypeInputValueModal(null), setIsClaimTypeInputModalWithError(false)]}
                                                            value="Fechar"
                                                            type="button"
                                                        />
                                                    </AlertDialog.Cancel>
                                                    <Button.Green value="Salvar" type="submit" />
                                                </C.ButtonContainer>
                                            </C.Form>
                                        </Modal.Edit>
                                        <Modal.Alert
                                            itemId={() => { setClaimTypeId(claim.idTipoReclamacao) }}
                                            closeModal={() => { setClaimTypeId(0) }}
                                            title="Excluir tipo de reclamação"
                                            modalAction={deleteClaimType}
                                            cancel='Cancelar'
                                            submit='Excluir'
                                        >
                                            Deseja excluir o tipo de reclamação selecionado?
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