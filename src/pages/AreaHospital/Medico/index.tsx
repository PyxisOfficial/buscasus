import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Label';

import { MagnifyingGlass, Trash, Pencil, Pen } from 'phosphor-react';

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
                        <Label htmlFor="nomeMedico">
                            Nome
                            <Input.Input
                                name="nomeMedico"
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                id="nomeMedico"
                                placeholder='Mário de Andrade'
                            />
                        </Label>

                        <Label htmlFor="cpfMedico">
                            CPF
                            <Input.Input
                                name="cpfMedico"
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                id="cpfMedico"
                                placeholder='123.456.789-00'
                            />
                        </Label>

                        <Label htmlFor="crmMedico">
                            CRM
                            <Input.Input
                                name="crmMedico"
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                id="crmMedico"
                                placeholder='SP/123456'
                            />
                        </Label>

                        <Label htmlFor="idEspecialidade">
                            Especialidade

                            <Select.Root
                                onValueChange={setSelectItem}
                                errorText={false}
                                selectSize={sizes.xs}
                            >
                                <Select.Item
                                    specialtyKey={1}
                                    value="1"
                                    title="Pediatra"
                                />
                            </Select.Root>

                        </Label>

                        <Label>
                            Foto do médico
                            <input
                                name="fotoMedico"
                                type="file"
                                accept=".jpg, .png"
                                id="fotoMedico"
                            />
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
                    <h3>Médicos cadastrados</h3>
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
                                <td>{medic.nomeMedico}</td>
                                <td>{medic.nomeEspecialidade}</td>
                                <td>
                                    <C.ButtonContainer>
                                        <Modal.Info
                                            closeModal={() => { setMedicId(0) }}
                                            title='Informações do médico'
                                        >
                                            <C.InfoModalContent>
                                                <C.InfoContainer>
                                                    <C.Text><b>Nome:</b> {medic.nomeMedico}</C.Text>
                                                    <C.Text><b>CPF:</b> {medic.cpfMedico}</C.Text>
                                                    <C.Text><b>CRM:</b> {medic.crmMedico}</C.Text>
                                                    <C.Text><b>Especialidade</b>: {medic.nomeEspecialidade}</C.Text>
                                                    <C.Text><b>Ausências:</b> X</C.Text>
                                                </C.InfoContainer>
                                                <C.InfoImg src={`../../../../api/area-hospital/img/${medic.fotoMedico}`} /> 
                                            </C.InfoModalContent>
                                        </Modal.Info>
                                        <Modal.Dialog
                                            medicId={() => { setMedicId(medic.idMedico) }}
                                            closeModal={() => { setMedicId(0) }}
                                            title='Editar médico'
                                        >
                                            <C.Form action="">
                                                <Label htmlFor='editarNome'>
                                                    Editar nome
                                                <Input.Root>
                                                    <Input.Input 
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.lg}
                                                        id="editarNome"
                                                        type='text'
                                                        placeholder='Editar nome'
                                                    />
                                                </Input.Root>
                                                </Label>
                                                <Label>
                                                    Editar especialidade
                                                    <Select.Root
                                                        onValueChange={setSelectItem}
                                                        errorText={false}
                                                        selectSize={sizes.lg}
                                                    >
                                                        <Select.Item
                                                            specialtyKey={1}
                                                            value="1"
                                                            title="Pediatra"
                                                        />
                                                    </Select.Root>
                                                </Label>
                                                <Label>
                                                    Editar foto do médico
                                                    <input
                                                        name="fotoMedico"
                                                        type="file"
                                                        accept=".jpg, .png"
                                                        id="fotoMedico"
                                                    />
                                                </Label>
                                                <C.ButtonContainer>
                                                    <Button.Gray 
                                                        value='Cancelar'
                                                        type='reset'
                                                    />
                                                    <Button.Green 
                                                        value='Salvar'
                                                        type='submit' 
                                                    />
                                                </C.ButtonContainer>
                                            </C.Form>
                                        </Modal.Dialog>
                                        <Modal.Alert
                                            medicId={() => { setMedicId(medic.idMedico) }}
                                            closeModal={() => { setMedicId(0) }}
                                            title="Excluir médico"
                                            deleteMedic={deleteMedic}
                                        >
                                                <Trash size={38} />
                                        </Modal.Alert>
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