import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { cpf } from 'cpf-cnpj-validator';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, InputImage, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { ToastContainer, toast } from 'react-toastify';
import { Toggle } from '../../../components/Toggle';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';
import 'react-toastify/dist/ReactToastify.css';

export function Medico() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [repeatedCpfVerification, setRepeatedCpfVerification] = useState<any>();

    const [medics, setMedics] = useState([]);
    const [medicId, setMedicId] = useState<number>();
    const [phoneId, setPhoneId] = useState<number>();
    const [specialty, setSpecialty] = useState([]);
    const [search, setSearch] = useState<string>();

    const [medicInputValue, setMedicInputValue] = useState<any>();
    const [cpfInputValue, setCpfInputValue] = useState<any>();
    const [crmInputValue, setCrmInputValue] = useState<any>();
    const [phoneInputValue, setPhoneInputValue] = useState<any>();
    const [specialtyInputValue, setSpecialtyInputValue] = useState<any>();
    const [medicPhoto, setMedicPhoto] = useState<any>();
    const [isMedicInputWithError, setIsMedicInputWithError] = useState<boolean>();
    const [isCpfInputWithError, setIsCpfInputWithError] = useState<boolean>();
    const [isCrmInputWithError, setIsCrmInputWithError] = useState<boolean>();
    const [isPhoneInputWithError, setIsPhoneInputWithError] = useState<boolean>();
    const [isSpecialtyInputWithError, setIsSpecialtyInputWithError] = useState<boolean>();

    const [medicInputValueModal, setMedicInputValueModal] = useState<any>();
    const [phoneInputValueModal, setPhoneInputValueModal] = useState<any>();
    const [specialtyInputValueModal, setSpecialtyInputValueModal] = useState<any>();
    const [medicPhotoModal, setMedicPhotoModal] = useState<any>();
    const [isMedicInputModalWithError, setIsMedicInputModalWithError] = useState<boolean>();
    const [isPhoneInputModalWithError, setIsPhoneInputModalWithError] = useState<boolean>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/medico/', {
            params: {
                idHospital: hospitalId
            }
        }).then(response => setMedics(response.data));

        axios.get('http://localhost/buscasus/api/area-admin/especialidade/', {
            params: {
                idHospital: hospitalId
            }
        }).then(response => setSpecialty(response.data));
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscasus/api/area-hospital/medico/', {
                params: {
                    search: search,
                    idHospital: hospitalId
                }
            }).then(response => setMedics(response.data));
        } else {
            axios.get('http://localhost/buscasus/api/area-hospital/medico/', {
                params: {
                    idHospital: hospitalId
                }
            }).then(response => setMedics(response.data));
        }

        setMedicInputValue(null);
        setCpfInputValue(null);
        setRepeatedCpfVerification(null);
        setCrmInputValue(null);
        setPhoneInputValue(null);
        setSpecialtyInputValue(null);
        setMedicPhoto(null);

        setIsFormSubmitted(false);
        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/medico/', {
            params: {
                search: search,
                idHospital: hospitalId
            }
        }).then(response => setMedics(response.data));
    }, [search]);

    useEffect(() => {
        if (repeatedCpfVerification > 0) {
            setIsCpfInputWithError(true);
        } else {
            setIsCpfInputWithError(false);
        }
    }, [repeatedCpfVerification]);

    async function insertMedic(event: FormEvent) {
        event.preventDefault();

        const formData: any = new FormData(event.target as HTMLFormElement);
        formData.append("nomeMedico", medicInputValue);
        formData.append("cpfMedico", cpfInputValue);
        formData.append("crmMedico", crmInputValue);
        formData.append("numTelefone", phoneInputValue);
        medicPhoto ? formData.append("fotoMedico", medicPhoto[0].name) : formData.append("fotoMedico", null);
        formData.append("idEspecialidade", specialtyInputValue);
        formData.append("idHospital", hospitalId);
        medicPhoto ? formData.append("picture", medicPhoto[0]) : formData.append("picture", null);

        const cpfValidation = cpf.isValid(cpfInputValue);

        if (!medicInputValue) setIsMedicInputWithError(true);
        if (!cpfInputValue || !cpfValidation || repeatedCpfVerification > 0) setIsCpfInputWithError(true);
        if (!crmInputValue) setIsCrmInputWithError(true);
        if (!phoneInputValue || phoneInputValue.length != 15) setIsPhoneInputWithError(true);
        if (specialtyInputValue == 0 || !specialtyInputValue) setIsSpecialtyInputWithError(true);

        if (medicInputValue && cpfValidation && repeatedCpfVerification == 0 && crmInputValue && phoneInputValue.length == 15 && specialtyInputValue > 0) {
            await axios.post('http://localhost/buscasus/api/area-hospital/medico/', formData);

            setIsFormSubmitted(true);

            toast.success("Médico cadastrado com sucesso!");
        }
    }

    async function editMedic(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        medicPhotoModal ? formData.append("picture", medicPhotoModal[0]) : null;
        formData.append('_method', 'PUT');

        if (!medicInputValueModal) setIsMedicInputModalWithError(true);
        if (!phoneInputValueModal || phoneInputValueModal.length != 15) setIsPhoneInputModalWithError(true);

        if (medicInputValueModal && phoneInputValueModal.length == 15 && specialtyInputValueModal != 0) {
            await axios.post('http://localhost/buscasus/api/area-hospital/medico/', formData, {
                params: {
                    nomeMedico: medicInputValueModal,
                    numTelefone: phoneInputValueModal,
                    fotoMedico: medicPhotoModal ? medicPhotoModal[0].name : null,
                    idEspecialidade: specialtyInputValueModal,
                    idMedico: medicId,
                    idTelefone: phoneId
                }
            });

            setIsFormSubmitted(true);
            toast.success("Médico editado com sucesso!");
        }
    }

    async function deleteMedic() {
        await axios.delete(`http://localhost/buscasus/api/area-hospital/medico/`, {
            params: {
                idMedico: medicId,
                idTelefone: phoneId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Médico excluído com sucesso!");
    }

    function verifyIsCpfRepeated(cpf: any) {
        axios.get('http://localhost/buscasus/api/area-hospital/medico/', {
            params: {
                repeatedCpf: cpf
            }
        }).then(response => setRepeatedCpfVerification(response.data.idMedico));
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
                    <h3>Cadastrar um novo médico</h3>
                    <form ref={formRef} onSubmit={insertMedic} autoComplete="off">
                        <C.InputsContainer>
                            <Label htmlFor="nomeMedico">
                                Nome
                                <Input.Input
                                    onChange={(e) => setMedicInputValue(e.target.value)}
                                    onBlur={() => medicInputValue ? setIsMedicInputWithError(false) : null}
                                    isWithIcon={false}
                                    errorText={isMedicInputWithError}
                                    inputSize={sizes.md}
                                    type="text"
                                    id="nomeMedico"
                                    placeholder='Mário de Andrade'
                                />
                            </Label>

                            <Label htmlFor="cpfMedico">
                                CPF
                                <Input.MaskedInput
                                    mask="000.000.000-00"
                                    onChange={(e) => setCpfInputValue(e.target.value)}
                                    onBlur={(e) => [cpf.isValid(e.target.value) ? setIsCpfInputWithError(false) : null, verifyIsCpfRepeated(e.target.value)]}
                                    isWithIcon={false}
                                    errorText={isCpfInputWithError}
                                    inputSize={sizes.md}
                                    type="text"
                                    id="cpfMedico"
                                    placeholder='123.456.789-00'
                                    value={cpfInputValue}
                                />
                            </Label>

                            <Label htmlFor="crmMedico">
                                CRM
                                <Input.MaskedInput
                                    mask="CRM/aa 000000"
                                    onChange={(e) => setCrmInputValue(e.target.value)}
                                    onBlur={() => crmInputValue ? setIsCrmInputWithError(false) : null}
                                    isWithIcon={false}
                                    errorText={isCrmInputWithError}
                                    inputSize={sizes.md}
                                    type="text"
                                    id="crmMedico"
                                    placeholder='CRM/SP 123456'
                                    value={crmInputValue}
                                />
                            </Label>

                            <Label htmlFor="numTelefone">
                                Telefone
                                <Input.MaskedInput
                                    mask="(00) 00000-0000"
                                    onChange={(e) => setPhoneInputValue(e.target.value)}
                                    onBlur={() => phoneInputValue.length == 15 ? setIsPhoneInputWithError(false) : null}
                                    isWithIcon={false}
                                    errorText={isPhoneInputWithError}
                                    inputSize={sizes.md}
                                    type="text"
                                    id="numTelefone"
                                    placeholder='(99) 99999-9999'
                                    value={phoneInputValue}
                                />
                            </Label>

                            <Label>
                                Especialidades
                                <Modal.Generic.Root>
                                <Modal.Generic.Trigger>
                                    <C.ModalTrigger>
                                        Selecione
                                    </C.ModalTrigger>
                                </Modal.Generic.Trigger>
                                <Modal.Generic.Content title='Especialidades'>
                                <C.ModalHeader>
                                    <Input.Root>
                                        <Input.Input
                                            onChange={(e) => setSearch(e.target.value)}
                                            isWithIcon
                                            errorText={false}
                                            inputSize={sizes.xl}
                                            id="adminSearch"
                                            type="search"
                                            placeholder="Buscar"
                                        />
                                        <Input.LeftIcon
                                            htmlFor="adminSearch"
                                            topPosition={4}
                                            leftPosition={5}
                                        >
                                            <MagnifyingGlass size={16} />
                                        </Input.LeftIcon>
                                    </Input.Root>
                                </C.ModalHeader>
                                <C.ModalList>
                                    <Toggle.Generic>
                                        Ortopedia
                                    </Toggle.Generic>
                                </C.ModalList>
                                </Modal.Generic.Content>
                            </Modal.Generic.Root>
                            </Label>

                            <Label>
                                Foto do médico
                                <InputImage.Root>
                                    <InputImage.NameImage nameImgInput={medicPhoto ? medicPhoto[0].name : null} />
                                    <InputImage.Label
                                        inputAction={(e: any) => setMedicPhoto(e.target.files)}
                                    />
                                </InputImage.Root>
                            </Label>
                        </C.InputsContainer>
                        <C.ButtonContainer>
                            <Button.Gray
                                onClick={() => [
                                    setMedicInputValue(null), setCpfInputValue(null), setRepeatedCpfVerification(null), setCrmInputValue(null), setPhoneInputValue(null), setSpecialtyInputValue(null), setMedicPhoto(null),
                                    setIsMedicInputWithError(false), setIsCpfInputWithError(false), setIsCrmInputWithError(false), setIsPhoneInputWithError(false), setIsSpecialtyInputWithError(false)
                                ]}
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
                            <C.Th>CPF</C.Th>
                            <C.Th>CRM</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        {medics.map((medic: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{medic.nomeMedico}</C.Td>
                                <C.Td>{medic.cpfMedico}</C.Td>
                                <C.Td>{medic.crmMedico}</C.Td>
                                <C.Td>
                                    <C.ButtonContainer>
                                        <Modal.Info title='Informações do médico'>
                                            <C.InfoModalContent>
                                                <C.InfoContainer>
                                                    <C.Text><b>Nome:</b> {medic.nomeMedico}</C.Text>
                                                    <C.Text><b>CPF:</b> {medic.cpfMedico}</C.Text>
                                                    <C.Text><b>CRM:</b> {medic.crmMedico}</C.Text>
                                                    <C.Text><b>Telefone:</b> {medic.numTelefone}</C.Text>
                                                    <C.Text><b>Especialidades:</b> </C.Text>
                                                    <C.Text><b>Ausências:</b> {medic.ausenciasMedico}</C.Text>
                                                </C.InfoContainer>
                                                <C.InfoImg
                                                    src={`http://localhost/buscasus/api/area-hospital/img/${medic.fotoMedico}`}
                                                    onError={(e: any) => (e.target.onerror = null)(
                                                        (e.target.src = "http://localhost/buscasus/api/area-hospital/img/placeholder.png")
                                                    )
                                                    }
                                                />
                                            </C.InfoModalContent>
                                        </Modal.Info>
                                        <Modal.Edit
                                            itemId={() => [setMedicInputValueModal(medic.nomeMedico), setPhoneInputValueModal(medic.numTelefone), setSpecialtyInputValueModal(medic.idEspecialidade), setMedicId(medic.idMedico), setPhoneId(medic.idTelefone)]}
                                            closeModal={() => [
                                                setMedicId(0), setPhoneId(0),
                                                setMedicInputValueModal(null), setPhoneInputValueModal(null), setSpecialtyInputValueModal(null), setMedicPhotoModal(null),
                                                setIsMedicInputModalWithError(false), setIsPhoneInputModalWithError(false)
                                            ]}
                                            title='Editar médico'
                                        >
                                            <C.Form onSubmit={editMedic} autoComplete="off">
                                                <Label htmlFor="nomeMedicoModal">
                                                    Nome
                                                    <Input.Input
                                                        onChange={(e) => setMedicInputValueModal(e.target.value)}
                                                        onBlur={() => medicInputValueModal ? setIsMedicInputModalWithError(false) : setIsMedicInputModalWithError(true)}
                                                        isWithIcon={false}
                                                        errorText={isMedicInputModalWithError}
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
                                                        inputSize={sizes.xl}
                                                        type="text"
                                                        defaultValue={medic.crmMedico}
                                                        disabled
                                                    />
                                                </Label>

                                                <Label htmlFor="numTelefoneModal">
                                                    Telefone
                                                    <Input.MaskedInput
                                                        mask="(00) 00000-0000"
                                                        onChange={(e) => setPhoneInputValueModal(e.target.value)}
                                                        onBlur={() => phoneInputValueModal.length == 15 ? setIsPhoneInputModalWithError(false) : setIsPhoneInputModalWithError(true)}
                                                        isWithIcon={false}
                                                        errorText={isPhoneInputModalWithError}
                                                        inputSize={sizes.md}
                                                        type="text"
                                                        id="numTelefoneModal"
                                                        name="numTelefone"
                                                        defaultValue={medic.numTelefone}
                                                        value={phoneInputValueModal}
                                                    />
                                                </Label>

                                                <Label>
                                                    Especialidade

                                                </Label>

                                                <Label>
                                                    Foto do médico
                                                    <InputImage.Root>
                                                        <InputImage.NameImage nameImgInput={medicPhotoModal ? medicPhotoModal[0].name : null} />
                                                        <InputImage.Label
                                                            inputAction={(e: any) => setMedicPhotoModal(e.target.files)}
                                                        />
                                                    </InputImage.Root>
                                                </Label>

                                                <C.ButtonContainer>
                                                    <AlertDialog.Cancel asChild>
                                                        <Button.Gray
                                                            onClick={() => [
                                                                setMedicId(0), setPhoneId(0),
                                                                setMedicInputValueModal(null), setPhoneInputValueModal(null), setSpecialtyInputValueModal(null), setMedicPhotoModal(null),
                                                                setIsMedicInputModalWithError(false), setIsPhoneInputModalWithError(false)
                                                            ]}
                                                            value="Fechar"
                                                            type="button"
                                                        />
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