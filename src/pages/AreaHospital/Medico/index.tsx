import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Button } from '../../../components/Button';

import * as Dialog from '@radix-ui/react-dialog';


import { MagnifyingGlass, Trash, Pencil, X } from 'phosphor-react';

import * as C from './styles';

export function Medico() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [selectItem, setSelectItem] = useState<string>();
    const [medics, setMedics] = useState([]);
    const [medicId, setMedicId] = useState<number>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-hospital/medico/${hospitalId}`).then((response) => {
            setMedics(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-hospital/medico/${hospitalId}`).then((response) => {
            setMedics(response.data);
        });
        setIsFormSubmitted(false);
    }, [isFormSubmitted]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/medico/', {
            nomeMedico: data.nomeMedico,
            cpfMedico: data.cpfMedico,
            crmMedico: data.crmMedico,
            fotoMedico: data.fotoMedico.name,
            idEspecialidade: selectItem,
            idHospital: hospitalId
        })

        setIsFormSubmitted(true);
    }

    async function editMedic(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        await axios.put(`http://localhost/buscaSusWeb/api/area-hospital/medico/${medicId}`, {
            nomeMedico: data.nomeMedico,
            cpfMedico: data.cpfMedico,
            crmMedico: data.crmMedico,
            fotoMedico: data.fotoMedico.name,
            idEspecialidade: selectItem
        });

        setIsFormSubmitted(true);
    }

    async function deleteMedic() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-hospital/medico/${medicId}`)
        setIsFormSubmitted(true);
    }


    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>
            <C.FormContainer>
                <h3>Cadastrar um novo médico</h3>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <input hidden name="idMedico" />
                    <C.InputsContainer>
                        <C.Label htmlFor="nomeMedico">
                            Nome
                            <Input.Input
                                name="nomeMedico"
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                id="nomeMedico"
                                placeholder='Mário de Andrade'
                            />
                        </C.Label>

                        <C.Label htmlFor="cpfMedico">
                            CPF
                            <Input.Input
                                name="cpfMedico"
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                id="cpfMedico"
                                placeholder='123.456.789-00'
                            />
                        </C.Label>

                        <C.Label htmlFor="crmMedico">
                            CRM
                            <Input.Input
                                name="crmMedico"
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                id="crmMedico"
                                placeholder='SP/123456'
                            />
                        </C.Label>

                        <C.Label htmlFor="idEspecialidade">
                            Especialidade

                            <Select.Root
                                onValueChange={setSelectItem}
                                errorText={false}
                                selectSize={sizes.xs}
                            >
                                <Select.Item
                                    id={1}
                                    value="1"
                                    title="Pediatra"
                                />
                            </Select.Root>

                        </C.Label>

                        <C.Label>
                            Foto do médico
                            <input
                                name="fotoMedico"
                                type="file"
                                accept=".jpg, .png"
                                id="fotoMedico"
                            />
                        </C.Label>
                    </C.InputsContainer>
                    <C.ButtonContainer>
                        <Button.Gray value="Cancelar" type="reset" />
                        <Button.Green value="Salvar" type="submit" />
                    </C.ButtonContainer>
                </form>
            </C.FormContainer>
            <C.TableContainer>
                <C.TableContainerHeader>
                    <h3>Médicos cadastrados</h3>
                    <C.InputsContainer>
                        <Input.Root>
                            <Input.Input
                                isWithIcon
                                errorText={false}
                                inputSize={sizes.sm}
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
                            <C.Th>Foto</C.Th>
                            <C.Th>Nome</C.Th>
                            <C.Th>CPF</C.Th>
                            <C.Th>CRM</C.Th>
                            <C.Th>Especialidade</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>

                        {medics.map((medic: any, key) =>
                            <C.Tr key={key}>
                                <td><C.Img src={`../../../../api/area-hospital/img/${medic.fotoMedico}`} /></td>
                                <td>{medic.nomeMedico}</td>
                                <td>{medic.cpfMedico}</td>
                                <td>{medic.crmMedico}</td>
                                <td>{medic.nomeEspecialidade}</td>
                                <td>
                                    <C.ButtonContainer>
                                        <Modal.Alert
                                            medicId={() => { setMedicId(medic.idMedico) }}
                                            closeModal={() => { setMedicId(0) }}
                                        >
                                            <Trash size={40} />
                                        </Modal.Alert>

                                        <Dialog.Root>
                                            <Dialog.Trigger
                                                asChild
                                                onClick={() => setMedicId(medic.idMedico)}
                                            >
                                                <Pencil size={24} />
                                            </Dialog.Trigger>
                                            <Dialog.Portal>
                                                <Dialog.Overlay />
                                                <Dialog.Content>
                                                    <Dialog.Title />
                                                    <Dialog.Description />
                                                    <Dialog.Close asChild>
                                                        <X
                                                            size={16}
                                                            onClick={() => setMedicId(0)}
                                                        />
                                                    </Dialog.Close>
                                                </Dialog.Content>
                                            </Dialog.Portal>
                                        </Dialog.Root>

                                    </C.ButtonContainer>
                                </td>
                            </C.Tr>
                        )}
                    </C.Tbody>
                </C.Table>
            </C.TableContainer>
        </MenuBackground>
    )
}