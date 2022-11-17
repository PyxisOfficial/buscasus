import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

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

export function Especialidade() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [repeatedSpecialtyVerification, setRepeatedSpecialtyVerification] = useState<any>();

    const [specialty, setSpecialty] = useState([]);
    const [specialtyId, setSpecialtyId] = useState<number>();
    const [search, setSearch] = useState<string>();

    const [specialtyInputValue, setSpecialtyInputValue] = useState<any>();
    const [isSpecialtyInputWithError, setIsSpecialtyInputWithError] = useState<boolean>();

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/especialidade/').then(response => setSpecialty(response.data));
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/especialidade/', {
                params: {
                    search: search
                }
            }).then(response => setSpecialty(response.data));
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/especialidade/',).then(response => setSpecialty(response.data));
        }

        setSpecialtyInputValue(null);
        setRepeatedSpecialtyVerification(null);
        setIsFormSubmitted(false);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/especialidade/', {
            params: {
                search: search
            }
        }).then(response => setSpecialty(response.data));
    }, [search]);

    useEffect(() => {
        if (repeatedSpecialtyVerification > 0) {
            setIsSpecialtyInputWithError(true);
        } else {
            setIsSpecialtyInputWithError(false);
        }
    }, [repeatedSpecialtyVerification]);

    async function insertSpecialty(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("nomeEspecialidade", specialtyInputValue);

        if (!specialtyInputValue || repeatedSpecialtyVerification > 0) setIsSpecialtyInputWithError(true);

        if (specialtyInputValue && repeatedSpecialtyVerification == 0) {
            await axios.post('http://localhost/buscaSusWeb/api/area-admin/especialidade/', formData);

            setIsFormSubmitted(true);

            toast.success("Especialidade cadastrada com sucesso!");
        }
    }

    async function deleteSpecialty() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-admin/especialidade/`, {
            params: {
                idEspecialidade: specialtyId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Especialidade excluída com sucesso!");
    }

    function verifyIsSpecialtyRepeated(specialty: any) {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/especialidade/', {
            params: {
                repeatedSpecialty: specialty
            }
        }).then(response => setRepeatedSpecialtyVerification(response.data.idEspecialidade));
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
                    <h3>Cadastrar uma nova especialidade</h3>
                    <form ref={formRef} onSubmit={insertSpecialty} autoComplete="off">
                        <Label htmlFor="nomeEspecialidade">
                            Especialidade
                            <Input.Input
                                onChange={(e) => setSpecialtyInputValue(e.target.value)}
                                onBlur={(e) => [specialtyInputValue ? setIsSpecialtyInputWithError(false) : null, verifyIsSpecialtyRepeated(e.target.value)]}
                                isWithIcon={false}
                                errorText={isSpecialtyInputWithError}
                                inputSize={sizes.lg}
                                type="text"
                                id="nomeEspecialidade"
                                name="nomeEspecialidade"
                            />
                        </Label>
                        <C.ButtonContainer>
                            <Button.Gray
                                onClick={() => [setSpecialtyInputValue(null), setRepeatedSpecialtyVerification(null), setIsSpecialtyInputWithError(false)]}
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