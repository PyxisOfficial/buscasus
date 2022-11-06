import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { ToastContainer, toast } from 'react-toastify';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';
import 'react-toastify/dist/ReactToastify.css';

export function Especialidade() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [specialty, setSpecialty] = useState([]);
    const [specialtyId, setSpecialtyId] = useState<number>();
    const [search, setSearch] = useState<string>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-hospital/especialidade/', {
            params: {
                idHospital: hospitalId
            }
        }).then(response => {
            setSpecialty(response.data);
        });
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-hospital/especialidade/', {
                params: {
                    search: search,
                    idHospital: hospitalId
                }
            }).then(response => {
                setSpecialty(response.data);
            });
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-hospital/especialidade/', {
                params: {
                    idHospital: hospitalId
                }
            }).then(response => {
                setSpecialty(response.data);
            });
        }

        setIsFormSubmitted(false);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-hospital/especialidade/', {
            params: {
                search: search,
                idHospital: hospitalId
            }
        }).then(response => {
            setSpecialty(response.data);
        })
    }, [search]);

    async function insertSpecialty(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);
        formData.append("nomeEspecialidade", data.nomeEspecialidade);
        formData.append("idHospital", hospitalId);

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/especialidade/', formData);

        setIsFormSubmitted(true);

        toast.success("Especialidade cadastrada com sucesso!");
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
        toast.success("Especialidade editada com sucesso!");
    }

    async function deleteSpecialty() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-hospital/especialidade/`, {
            params: {
                idEspecialidade: specialtyId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Especialidade excluída com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>

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
            </C.InsertContainer>
            <C.TableContainer>
                <C.TableContainerHeader>
                    <h3>Especialidades cadastradas</h3>
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