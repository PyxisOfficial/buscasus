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

export function Medico() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [medics, setMedics] = useState([]);
    const [medicId, setMedicId] = useState<number>();
    const [specialty, setSpecialty] = useState([]);
    const [medicPhoto, setMedicPhoto] = useState<any>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-hospital/medico/${hospitalId}`).then((response) => {
            setMedics(response.data);
        });

        axios.get(`http://localhost/buscaSusWeb/api/area-hospital/especialidade/${hospitalId}`).then((response) => {
            setSpecialty(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-hospital/medico/${hospitalId}`).then((response) => {
            setMedics(response.data);
        });

        setIsFormSubmitted(false);

        setTimeout(() => {
            setIsToastOpened(false);
        }, 2000);

        formRef.current.reset();
    }, [isFormSubmitted]);

    async function insertMedic(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        const allFormData = new FormData(event.target as HTMLFormElement);
        allFormData.append("nomeMedico", data.nomeMedico);
        allFormData.append("cpfMedico", data.cpfMedico);
        allFormData.append("crmMedico", data.crmMedico);
        allFormData.append("fotoMedico", data.fotoMedico.name);
        allFormData.append("idEspecialidade", data.idEspecialidade);
        allFormData.append("idHospital", hospitalId);
        allFormData.append("picture", medicPhoto[0]);

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/medico/', allFormData);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Médico cadastrado com sucesso!");
    }

    async function editMedic(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        const allFormData = new FormData(event.target as HTMLFormElement);
        medicPhoto ? allFormData.append("picture", medicPhoto[0]) : allFormData.append("picture", "");
        allFormData.append('_method', 'PUT');

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/medico/', allFormData, {
            params: {
                nomeMedico: data.nomeMedico,
                cpfMedico: data.cpfMedico,
                crmMedico: data.crmMedico,
                fotoMedico: data.fotoMedico.name,
                idEspecialidade: data.idEspecialidade,
                idMedico: medicId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Médico editado com sucesso!");
    }

    async function deleteMedic() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-hospital/medico/${medicId}`);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Médico excluído com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>

            <Toast.Root
                onOpenChange={isToastOpened}
            >
                <Toast.Description>{messageToast}</Toast.Description>
            </Toast.Root>

            <C.FormContainer>
                <h3>Cadastrar um novo médico</h3>
                <form ref={formRef} onSubmit={insertMedic} autoComplete="off">
                    <C.InputsContainer>
                        <Label htmlFor="nomeMedico">
                            Nome
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                id="nomeMedico"
                                name="nomeMedico"
                                placeholder='Mário de Andrade'
                            />
                        </Label>

                        <Label htmlFor="cpfMedico">
                            CPF
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                id="cpfMedico"
                                name="cpfMedico"
                                placeholder='123.456.789-00'
                            />
                        </Label>

                        <Label htmlFor="crmMedico">
                            CRM
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                id="crmMedico"
                                name="crmMedico"
                                placeholder='SP/123456'
                            />
                        </Label>

                        <Label htmlFor="idEspecialidade">
                            Especialidade

                            <select name="idEspecialidade">
                                <option value="0">Selecione</option>
                                {specialty.map((spe: any) =>
                                    <option
                                        key={spe.idEspecialidade}
                                        value={spe.idEspecialidade}
                                    >
                                        {spe.nomeEspecialidade}
                                    </option>
                                )}
                            </select>

                        </Label>

                        <Label>
                            Foto do médico
                            <input
                                onChange={(e) => setMedicPhoto(e.target.files)}
                                type="file"
                                accept=".jpg, .png"
                                name="fotoMedico"
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
                            <C.Th>Nome</C.Th>
                            <C.Th>Especialidade</C.Th>
                            <C.Th>CRM</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>

                        {medics.map((medic: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{medic.nomeMedico}</C.Td>
                                <C.Td>{medic.nomeEspecialidade}</C.Td>
                                <C.Td>{medic.crmMedico}</C.Td>
                                <C.Td>
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
                                                    <C.Text><b>Especialidade:</b> {medic.nomeEspecialidade}</C.Text>
                                                    <C.Text><b>Ausências:</b> {medic.ausenciasMedico}</C.Text>
                                                </C.InfoContainer>
                                                <C.InfoImg src={`http://localhost/buscaSusWeb/api/area-hospital/img/${medic.fotoMedico}`} />
                                            </C.InfoModalContent>
                                        </Modal.Info>
                                        <Modal.Edit
                                            itemId={() => { setMedicId(medic.idMedico) }}
                                            closeModal={() => { setMedicId(0) }}
                                            title='Editar médico'
                                        >
                                            <C.Form onSubmit={editMedic} autoComplete="off">
                                                <Label htmlFor="nomeMedicoModal">
                                                    Nome
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        id="nomeMedicoModal"
                                                        name="nomeMedico"
                                                        defaultValue={medic.nomeMedico}
                                                    />
                                                </Label>

                                                <Label htmlFor="cpfMedicoModal">
                                                    CPF
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        id="cpfMedicoModal"
                                                        name="cpfMedico"
                                                        defaultValue={medic.cpfMedico}
                                                    />
                                                </Label>

                                                <Label htmlFor="crmMedicoModal">
                                                    CRM
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        id="crmMedicoModal"
                                                        name="crmMedico"
                                                        defaultValue={medic.crmMedico}
                                                    />
                                                </Label>

                                                <Label>
                                                    Especialidade

                                                    <select name="idEspecialidade">
                                                        <option value={medic.idEspecialidade}>{medic.nomeEspecialidade}</option>
                                                        {specialty.map((spe: any) =>
                                                            <option
                                                                key={spe.idEspecialidade}
                                                                value={spe.idEspecialidade}
                                                            >
                                                                {spe.nomeEspecialidade}
                                                            </option>
                                                        )}
                                                    </select>
                                                </Label>

                                                <Label>
                                                    Foto do médico
                                                    <input
                                                        onChange={(e) => setMedicPhoto(e.target.files)}
                                                        type="file"
                                                        accept=".jpg, .png"
                                                        name="fotoMedico"
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
                                            itemId={() => { setMedicId(medic.idMedico) }}
                                            closeModal={() => { setMedicId(0) }}
                                            title="Excluir médico"
                                            modalAction={deleteMedic}
                                            cancel='Cancelar'
                                            submit='Excluir'
                                        >
                                            Deseja excluir o médico selecionado?
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