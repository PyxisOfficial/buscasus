import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { Toast } from '../../../components/Toast';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

export function Medico() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [medics, setMedics] = useState([]);
    const [medicId, setMedicId] = useState<number>();
    const [phoneId, setPhoneId] = useState<number>();
    const [specialty, setSpecialty] = useState([]);
    const [medicPhoto, setMedicPhoto] = useState<any>();
    const [search, setSearch] = useState<string>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-hospital/medico/', {
            params: {
                idHospital: hospitalId
            }
        }).then(response => {
            setMedics(response.data);
        });

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
            axios.get('http://localhost/buscaSusWeb/api/area-hospital/medico/', {
                params: {
                    search: search,
                    idHospital: hospitalId
                }
            }).then(response => {
                setMedics(response.data);
            });
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-hospital/medico/', {
                params: {
                    idHospital: hospitalId
                }
            }).then(response => {
                setMedics(response.data);
            });
        }

        setIsFormSubmitted(false);
        setMedicPhoto(null);

        setTimeout(() => {
            setIsToastOpened(false);
        }, 2000);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-hospital/medico/', {
            params: {
                search: search,
                idHospital: hospitalId
            }
        }).then(response => {
            setMedics(response.data);
        });
    }, [search]);

    async function insertMedic(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);
        formData.append("nomeMedico", data.nomeMedico);
        formData.append("cpfMedico", data.cpfMedico);
        formData.append("crmMedico", data.crmMedico);
        formData.append("numTelefone", data.numTelefone);
        formData.append("fotoMedico", data.fotoMedico.name);
        formData.append("idEspecialidade", data.idEspecialidade);
        formData.append("idHospital", hospitalId);
        formData.append("picture", medicPhoto[0]);

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/medico/', formData);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Médico cadastrado com sucesso!");
    }

    async function editMedic(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);
        medicPhoto ? formData.append("picture", medicPhoto[0]) : null;
        formData.append('_method', 'PUT');

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/medico/', formData, {
            params: {
                nomeMedico: data.nomeMedico,
                numTelefone: data.numTelefone,
                fotoMedico: data.fotoMedico.name,
                idEspecialidade: data.idEspecialidade,
                idMedico: medicId,
                idTelefone: phoneId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Médico editado com sucesso!");
    }

    async function deleteMedic() {
        await axios.delete(`http://localhost/buscaSusWeb/api/area-hospital/medico/`, {
            params: {
                idMedico: medicId,
                idTelefone: phoneId
            }
        });

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

                        <Label htmlFor="numTelefone">
                            Telefone
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                id="numTelefone"
                                name="numTelefone"
                                placeholder='(99) 99999-9999'
                            />
                        </Label>

                        <Label htmlFor="idEspecialidade">
                            Especialidade

                            <C.Select name="idEspecialidade">
                                <option value="0">Selecione</option>
                                {specialty.map((spe: any) =>
                                    <option
                                        key={spe.idEspecialidade}
                                        value={spe.idEspecialidade}
                                    >
                                        {spe.nomeEspecialidade}
                                    </option>
                                )}
                            </C.Select>

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
                                                    <C.Text><b>Telefone:</b> {medic.numTelefone}</C.Text>
                                                    <C.Text><b>Especialidade:</b> {medic.nomeEspecialidade}</C.Text>
                                                    <C.Text><b>Ausências:</b> {medic.ausenciasMedico}</C.Text>
                                                </C.InfoContainer>
                                                <C.InfoImg src={`http://localhost/buscaSusWeb/api/area-hospital/img/${medic.fotoMedico}`} />
                                            </C.InfoModalContent>
                                        </Modal.Info>
                                        <Modal.Edit
                                            itemId={() => [setMedicId(medic.idMedico), setPhoneId(medic.idTelefone)]}
                                            closeModal={() => [setMedicId(0), setPhoneId(0)]}
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

                                                <Label>
                                                    CPF
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        defaultValue={medic.cpfMedico}
                                                        disabled
                                                    />
                                                </Label>

                                                <Label>
                                                    CRM
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        defaultValue={medic.crmMedico}
                                                        disabled
                                                    />
                                                </Label>

                                                <Label htmlFor="numTelefoneModal">
                                                    Telefone
                                                    <Input.Input
                                                        isWithIcon={false}
                                                        errorText={false}
                                                        inputSize={sizes.md}
                                                        type="text"
                                                        id="numTelefoneModal"
                                                        name="numTelefone"
                                                        defaultValue={medic.numTelefone}
                                                    />
                                                </Label>

                                                <Label>
                                                    Especialidade

                                                    <C.Select name="idEspecialidade">
                                                        <option value={medic.idEspecialidade}>{medic.nomeEspecialidade}</option>
                                                        {specialty.map((spe: any) =>
                                                            <option
                                                                key={spe.idEspecialidade}
                                                                value={spe.idEspecialidade}
                                                            >
                                                                {spe.nomeEspecialidade}
                                                            </option>
                                                        )}
                                                    </C.Select>
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
                                            itemId={() => [setMedicId(medic.idMedico), setPhoneId(medic.idTelefone)]}
                                            closeModal={() => [setMedicId(0), setPhoneId(0)]}
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