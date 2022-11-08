import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { cnpj } from 'cpf-cnpj-validator';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Modal } from '../../../components/Modal';
import { Input, InputImage, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { ToastContainer, toast } from 'react-toastify';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';
import 'react-toastify/dist/ReactToastify.css';

export function Hospital() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [hospital, setHospital] = useState([]);
    const [hospitalId, setHospitalId] = useState<number>();
    const [phoneId, setPhoneId] = useState<number>();
    const [search, setSearch] = useState<string>();

    const [hospitalInputValue, setHospitalInputValue] = useState<any>();
    const [emailInputValue, setEmailInputValue] = useState<any>();
    const [phoneInputValue, setPhoneInputValue] = useState<any>();
    const [startTimeInputValue, setStartTimeInputValue] = useState<any>();
    const [endTimeInputValue, setEndTimeInputValue] = useState<any>();
    const [cnpjInputValue, setCnpjInputValue] = useState<any>();
    const [cepInputValue, setCepInputValue] = useState<any>();
    const [ufInputValue, setUfInputValue] = useState<any>();
    const [publicPlaceInputValue, setPublicPlaceInputValue] = useState<any>();
    const [cityInputValue, setCityInputValue] = useState<any>();
    const [districtInputValue, setDistrictInputValue] = useState<any>();
    const [complementInputValue, setComplementInputValue] = useState<any>();
    const [hospitalPhoto, setHospitalPhoto] = useState<any>();
    const [isHospitalInputWithError, setIsHospitalInputWithError] = useState<boolean>();
    const [isEmailInputWithError, setIsEmailInputWithError] = useState<boolean>();
    const [isPhoneInputWithError, setIsPhoneInputWithError] = useState<boolean>();
    const [isStartTimeInputWithError, setIsStartTimeInputWithError] = useState<boolean>();
    const [isEndTimeInputWithError, setIsEndTimeInputWithError] = useState<boolean>();
    const [isCnpjInputWithError, setIsCnpjInputWithError] = useState<boolean>();
    const [isCepInputWithError, setIsCepInputWithError] = useState<boolean>();
    const [isUfInputWithError, setIsUfInputWithError] = useState<boolean>();
    const [isPublicPlaceInputWithError, setIsPublicPlaceInputWithError] = useState<boolean>();
    const [isCityInputWithError, setIsCityInputWithError] = useState<boolean>();
    const [isDistrictInputWithError, setIsDistrictInputWithError] = useState<boolean>();
    const [isHospitalPhotoWithError, setIsHospitalPhotoWithError] = useState<boolean>();

    const [hospitalInputValueModal, setHospitalInputValueModal] = useState<any>();
    const [emailInputValueModal, setEmailInputValueModal] = useState<any>();
    const [phoneInputValueModal, setPhoneInputValueModal] = useState<any>();
    const [startTimeInputValueModal, setStartTimeInputValueModal] = useState<any>();
    const [endTimeInputValueModal, setEndTimeInputValueModal] = useState<any>();
    const [cnpjInputValueModal, setCnpjInputValueModal] = useState<any>();
    const [cepInputValueModal, setCepInputValueModal] = useState<any>();
    const [ufInputValueModal, setUfInputValueModal] = useState<any>();
    const [publicPlaceInputValueModal, setPublicPlaceInputValueModal] = useState<any>();
    const [cityInputValueModal, setCityInputValueModal] = useState<any>();
    const [districtInputValueModal, setDistrictInputValueModal] = useState<any>();
    const [complementInputValueModal, setComplementInputValueModal] = useState<any>();
    const [hospitalPhotoModal, setHospitalPhotoModal] = useState<any>();
    const [isHospitalInputModalWithError, setIsHospitalInputModalWithError] = useState<boolean>();
    const [isEmailInputModalWithError, setIsEmailInputModalWithError] = useState<boolean>();
    const [isPhoneInputModalWithError, setIsPhoneInputModalWithError] = useState<boolean>();
    const [isStartTimeInputModalWithError, setIsStartTimeInputModalWithError] = useState<boolean>();
    const [isEndTimeInputModalWithError, setIsEndTimeInputModalWithError] = useState<boolean>();
    const [isCepInputModalWithError, setIsCepInputModalWithError] = useState<boolean>();

    const [cep, setCep] = useState<any>();
    const [cepModal, setCepModal] = useState<any>();

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-admin/hospital/`).then((response) => setHospital(response.data));
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/hospital/', {
                params: {
                    search: search
                }
            }).then(response => setHospital(response.data));
        } else {
            axios.get(`http://localhost/buscaSusWeb/api/area-admin/hospital/`).then((response) => setHospital(response.data));
        }

        setHospitalInputValue(null);
        setEmailInputValue(null);
        setPhoneInputValue(null);
        setStartTimeInputValue(null);
        setEndTimeInputValue(null);
        setCnpjInputValue(null);
        setCepInputValue(null);
        setUfInputValue(null);
        setPublicPlaceInputValue(null);
        setCityInputValue(null);
        setDistrictInputValue(null);
        setComplementInputValue(null);
        setHospitalPhoto(null);

        setIsFormSubmitted(false);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/hospital/', {
            params: {
                search: search,
            }
        }).then(response => setHospital(response.data));
    }, [search]);

    useEffect(() => {
        if (cep) {
            setUfInputValue(cep.uf);
            setPublicPlaceInputValue(cep.logradouro);
            setCityInputValue(cep.localidade);
            setDistrictInputValue(cep.bairro);

            setIsUfInputWithError(false);
            setIsPublicPlaceInputWithError(false);
            setIsCityInputWithError(false);
            setIsDistrictInputWithError(false);
        }

        if (cepModal) {
            setUfInputValueModal(cepModal.uf);
            setPublicPlaceInputValueModal(cepModal.logradouro);
            setCityInputValueModal(cepModal.localidade);
            setDistrictInputValueModal(cepModal.bairro);
        }
    }, [cep, cepModal]);

    useEffect(() => {
        setIsHospitalPhotoWithError(false);
    }, [hospitalPhoto]);

    async function insertHospital(event: FormEvent) {
        event.preventDefault();

        const formData: any = new FormData(event.target as HTMLFormElement);
        formData.append("nomeHospital", hospitalInputValue);
        formData.append("emailHospital", emailInputValue);
        formData.append("numTelefone", phoneInputValue);
        formData.append("aberturaHospital", startTimeInputValue);
        formData.append("fechamentoHospital", endTimeInputValue);
        formData.append("cnpjHospital", cnpjInputValue);
        formData.append("ufHospital", ufInputValue);
        formData.append("logradouroHospital", publicPlaceInputValue);
        complementInputValue ? formData.append("complementoHospital", complementInputValue) : formData.append("complementoHospital", '');
        formData.append("cepHospital", cepInputValue);
        formData.append("cidadeHospital", cityInputValue);
        formData.append("bairroHospital", districtInputValue);
        hospitalPhoto ? formData.append("fotoHospital", hospitalPhoto[0].name) : formData.append("fotoHospital", null);
        hospitalPhoto ? formData.append("picture", hospitalPhoto[0]) : formData.append("picture", null);

        const cnpjValidation = cnpj.isValid(cnpjInputValue);

        if (!hospitalInputValue) setIsHospitalInputWithError(true);
        if (!emailInputValue) setIsEmailInputWithError(true);
        if (!phoneInputValue || phoneInputValue.length != 14) setIsPhoneInputWithError(true);
        if (!startTimeInputValue) setIsStartTimeInputWithError(true);
        if (!endTimeInputValue) setIsEndTimeInputWithError(true);
        if (!cnpjInputValue || !cnpjValidation) setIsCnpjInputWithError(true);
        if (!cepInputValue || cepInputValue.length != 9) setIsCepInputWithError(true);
        if (!ufInputValue) setIsUfInputWithError(true);
        if (!publicPlaceInputValue) setIsPublicPlaceInputWithError(true);
        if (!cityInputValue) setIsCityInputWithError(true);
        if (!districtInputValue) setIsDistrictInputWithError(true);
        if (!hospitalPhoto) setIsHospitalPhotoWithError(true);

        if (hospitalInputValue && emailInputValue && phoneInputValue.length == 14 && startTimeInputValue && endTimeInputValue && cnpjValidation && ufInputValue
            && publicPlaceInputValue && cepInputValue.length == 9 && cityInputValue && districtInputValue && hospitalPhoto) {
            await axios.post('http://localhost/buscaSusWeb/api/area-admin/hospital/', formData);

            setIsFormSubmitted(true);
            toast.success("Hospital cadastrado com sucesso!");
        }
    }

    async function editHospital(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        hospitalPhotoModal ? formData.append("picture", hospitalPhotoModal[0]) : null;
        formData.append('_method', 'PUT');

        if (!hospitalInputValueModal) setIsHospitalInputModalWithError(true);
        if (!emailInputValueModal) setIsEmailInputModalWithError(true);
        if (!phoneInputValueModal || phoneInputValueModal.length != 14) setIsPhoneInputModalWithError(true);
        if (!startTimeInputValueModal) setIsStartTimeInputModalWithError(true);
        if (!endTimeInputValueModal) setIsEndTimeInputModalWithError(true);
        if (!cepInputValueModal) setIsCepInputModalWithError(true);

        if (hospitalInputValueModal && emailInputValueModal && phoneInputValueModal.length == 14 && startTimeInputValueModal && endTimeInputValueModal && cnpjInputValueModal && ufInputValueModal
            && publicPlaceInputValueModal && cepInputValueModal.length == 9 && cityInputValueModal && districtInputValueModal) {
            await axios.post('http://localhost/buscaSusWeb/api/area-admin/hospital/', formData, {
                params: {
                    nomeHospital: hospitalInputValueModal,
                    emailHospital: emailInputValueModal,
                    numTelefone: phoneInputValueModal,
                    aberturaHospital: startTimeInputValueModal,
                    fechamentoHospital: endTimeInputValueModal,
                    ufHospital: ufInputValueModal,
                    logradouroHospital: publicPlaceInputValueModal,
                    complementoHospital: complementInputValueModal,
                    cepHospital: cepInputValueModal,
                    cidadeHospital: cityInputValueModal,
                    bairroHospital: districtInputValueModal,
                    fotoHospital: hospitalPhotoModal ? hospitalPhotoModal[0].name : null,
                    idHospital: hospitalId,
                    idTelefone: phoneId
                }
            });

            setIsFormSubmitted(true);
            toast.success("Hospital editado com sucesso!");
        }
    }

    async function deleteHospital() {
        await axios.delete('http://localhost/buscaSusWeb/api/area-admin/hospital/', {
            params: {
                idHospital: hospitalId,
                idTelefone: phoneId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Hospital excluído com sucesso!");
    }

    function getCep(e: any) {
        const cep: any = e.replace(/\D/g, '');
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => setCep(response.data));
    }

    function getCepModal(e: any) {
        const cep: any = e.replace(/\D/g, '');
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => setCepModal(response.data));
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

            <C.Container>
                <C.FormContainer>
                    <C.Title>Cadastrar um novo hospital</C.Title>
                    <C.Form ref={formRef} onSubmit={insertHospital} autoComplete="off">
                        <C.Label htmlFor="nomeHospital">
                            Nome do hospital
                            <Input.Input
                                onChange={(e) => setHospitalInputValue(e.target.value)}
                                onBlur={() => hospitalInputValue ? setIsHospitalInputWithError(false) : null}
                                isWithIcon={false}
                                errorText={isHospitalInputWithError}
                                inputSize={sizes.xl}
                                type="text"
                                id="nomeHospital"
                            />
                        </C.Label>
                        <C.Label htmlFor="emailHospital">
                            Endereço de e-mail do hospital
                            <Input.Input
                                onChange={(e) => setEmailInputValue(e.target.value)}
                                onBlur={() => emailInputValue ? setIsEmailInputWithError(false) : null}
                                isWithIcon={false}
                                errorText={isEmailInputWithError}
                                inputSize={sizes.xl}
                                type="text"
                                id="emailHospital"
                            />
                        </C.Label>
                        <C.Label htmlFor="numTelefone">
                            Número de telefone do hospital
                            <Input.MaskedInput
                                mask="(00) 0000-0000"
                                onChange={(e) => setPhoneInputValue(e.target.value)}
                                onBlur={() => phoneInputValue.length == 14 ? setIsPhoneInputWithError(false) : null}
                                isWithIcon={false}
                                errorText={isPhoneInputWithError}
                                inputSize={sizes.sm}
                                type="text"
                                id="numTelefone"
                                value={phoneInputValue}
                            />
                        </C.Label>

                        <C.InputContainer>
                            <C.Label htmlFor="aberturaHospital">
                                Horário de abertura
                                <Input.Input
                                    onChange={(e) => setStartTimeInputValue(e.target.value)}
                                    onBlur={() => startTimeInputValue ? setIsStartTimeInputWithError(false) : null}
                                    isWithIcon={false}
                                    errorText={isStartTimeInputWithError}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="aberturaHospital"
                                />
                            </C.Label>

                            <C.Label htmlFor="fechamentoHospital">
                                Horário de fechamento
                                <Input.Input
                                    onChange={(e) => setEndTimeInputValue(e.target.value)}
                                    onBlur={() => endTimeInputValue ? setIsEndTimeInputWithError(false) : null}
                                    isWithIcon={false}
                                    errorText={isEndTimeInputWithError}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="fechamentoHospital"
                                />
                            </C.Label>
                        </C.InputContainer>

                        <C.InputContainer>
                            <C.Label htmlFor="cnpjHospital">
                                CNPJ
                                <Input.MaskedInput
                                    mask="00.000.000/0000-00"
                                    onChange={(e) => setCnpjInputValue(e.target.value)}
                                    onBlur={(e) => cnpj.isValid(e.target.value) ? setIsCnpjInputWithError(false) : null}
                                    isWithIcon={false}
                                    errorText={isCnpjInputWithError}
                                    inputSize={sizes.sm}
                                    type="text"
                                    id="cnpjHospital"
                                    value={cnpjInputValue}
                                />
                            </C.Label>

                            <C.Label htmlFor="cepHospital">
                                CEP
                                <Input.MaskedInput
                                    mask="00000-000"
                                    onChange={(e) => setCepInputValue(e.target.value)}
                                    onBlur={(e) => [cepInputValue.length == 9 ? setIsCepInputWithError(false) : null, getCep(e.target.value)]}
                                    isWithIcon={false}
                                    errorText={isCepInputWithError}
                                    inputSize={sizes.sm}
                                    type="text"
                                    name="cepHospital"
                                    id="cepHospital"
                                    value={cepInputValue}
                                />
                            </C.Label>

                            <C.Label htmlFor="ufHospital">
                                UF
                                <Input.Input
                                    defaultValue={ufInputValue}
                                    isWithIcon={false}
                                    errorText={isUfInputWithError}
                                    inputSize={sizes.xs}
                                    type="text"
                                    id="cepHospital"
                                    disabled
                                />
                            </C.Label>
                        </C.InputContainer>

                        <C.Label htmlFor="logradouroHospital">
                            Logradouro
                            <Input.Input
                                defaultValue={publicPlaceInputValue}
                                isWithIcon={false}
                                errorText={isPublicPlaceInputWithError}
                                inputSize={sizes.md}
                                type="text"
                                id="logradouroHospital"
                                disabled
                            />
                        </C.Label>

                        <C.Label htmlFor="cidadeHospital">
                            Cidade
                            <Input.Input
                                defaultValue={cityInputValue}
                                isWithIcon={false}
                                errorText={isCityInputWithError}
                                inputSize={sizes.md}
                                type="text"
                                id="cidadeHospital"
                                disabled
                            />
                        </C.Label>

                        <C.Label htmlFor="bairroHospital">
                            Bairro
                            <Input.Input
                                defaultValue={districtInputValue}
                                isWithIcon={false}
                                errorText={isDistrictInputWithError}
                                inputSize={sizes.md}
                                type="text"
                                id="bairroHospital"
                                disabled
                            />
                        </C.Label>

                        <C.Label htmlFor="complementoHospital">
                            Complemento
                            <Input.Input
                                onChange={(e) => setComplementInputValue(e.target.value)}
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.xl}
                                type="text"
                                id="complementoHospital"
                            />
                        </C.Label>

                        <C.Label>
                            <InputImage.Root
                                error={isHospitalPhotoWithError}
                            >
                                <InputImage.NameImage nameImgInput={hospitalPhoto ? hospitalPhoto[0].name : null} />
                                <InputImage.Label
                                    inputAction={(e: any) => setHospitalPhoto(e.target.files)}
                                />
                            </InputImage.Root>
                        </C.Label>
                        <C.ButtonContainer>
                            <Button.Gray
                                onClick={() => [
                                    setHospitalInputValue(null), setEmailInputValue(null), setPhoneInputValue(null), setStartTimeInputValue(null),
                                    setEndTimeInputValue(null), setCnpjInputValue(null), setCepInputValue(null), setUfInputValue(null), setPublicPlaceInputValue(null),
                                    setCityInputValue(null), setDistrictInputValue(null), setComplementInputValue(null), setHospitalPhoto(null),
                                    setIsHospitalInputWithError(false), setIsEmailInputWithError(false), setIsPhoneInputWithError(false),
                                    setIsStartTimeInputWithError(false), setIsEndTimeInputWithError(false), setIsCnpjInputWithError(false), setIsCepInputWithError(false),
                                    setIsUfInputWithError(false), setIsPublicPlaceInputWithError(false), setIsCityInputWithError(false),
                                    setIsDistrictInputWithError(false), setIsHospitalPhotoWithError(false)
                                ]}
                                value="Cancelar"
                                type="reset"
                            />
                            <Button.Green value="Salvar" type="submit" />
                        </C.ButtonContainer>
                    </C.Form>
                </C.FormContainer>
                <C.TableContainer>
                    <C.TableContainerHeader>
                        <h3>Hospitais cadastrados</h3>
                        <C.InputsContainer>
                            <Input.Root>
                                <Input.Input
                                    onChange={(e) => setSearch(e.target.value)}
                                    isWithIcon
                                    errorText={false}
                                    inputSize={sizes.md}
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
                                <C.Th>Nome do hospital</C.Th>
                                <C.Th></C.Th>
                            </C.Tr>
                        </C.Thead>
                        <C.Tbody>

                            {hospital.map((hosp: any, key) =>
                                <C.InnerTr key={key}>
                                    <C.Td>{hosp.nomeHospital}</C.Td>
                                    <C.Td>
                                        <C.ButtonContainer>
                                            <Modal.Info
                                                closeModal={() => { setHospitalId(0) }}
                                                title='Informações do hospital'
                                            >
                                                <C.InfoModalContent>
                                                    <C.InfoContainer>
                                                        <C.Text><b>Nome:</b> {hosp.nomeHospital}</C.Text>
                                                        <C.Text><b>Email:</b> {hosp.emailHospital}</C.Text>
                                                        <C.Text><b>Telefone:</b> {hosp.numTelefone}</C.Text>
                                                        <C.Text><b>Horário de abertura:</b> {hosp.aberturaHospital}</C.Text>
                                                        <C.Text><b>Horário de fechamento:</b> {hosp.fechamentoHospital}</C.Text>
                                                        <C.Text><b>CNPJ:</b> {hosp.cnpjHospital}</C.Text>
                                                        <C.Text><b>UF:</b> {hosp.ufHospital}</C.Text>
                                                        <C.Text><b>Logradouro:</b> {hosp.logradouroHospital}</C.Text>

                                                        {hosp.complementoHospital ?
                                                            <C.Text><b>Complemento:</b> {hosp.complementoHospital}</C.Text> :
                                                            null
                                                        }

                                                        <C.Text><b>CEP:</b> {hosp.cepHospital}</C.Text>
                                                        <C.Text><b>Cidade:</b> {hosp.cidadeHospital}</C.Text>
                                                        <C.Text><b>Bairro:</b> {hosp.bairroHospital}</C.Text>
                                                    </C.InfoContainer>
                                                    <C.InfoImg src={`http://localhost/buscaSusWeb/api/area-admin/img/${hosp.fotoHospital}`} />
                                                </C.InfoModalContent>
                                            </Modal.Info>
                                            <Modal.Edit
                                                itemId={() => [
                                                    setHospitalId(hosp.idHospital), setPhoneId(hosp.idTelefone), setHospitalInputValueModal(hosp.nomeHospital), setEmailInputValueModal(hosp.emailHospital), setPhoneInputValueModal(hosp.numTelefone), setStartTimeInputValueModal(hosp.aberturaHospital),
                                                    setEndTimeInputValueModal(hosp.fechamentoHospital), setCnpjInputValueModal(hosp.cnpjHospital), setCepInputValueModal(hosp.cepHospital), setUfInputValueModal(hosp.ufHospital), setPublicPlaceInputValueModal(hosp.logradouroHospital),
                                                    setCityInputValueModal(hosp.cidadeHospital), setDistrictInputValueModal(hosp.bairroHospital), setComplementInputValueModal(hosp.complementoHospital)
                                                ]}
                                                closeModal={() => [
                                                    setHospitalId(0), setPhoneId(0), setHospitalInputValueModal(null), setEmailInputValueModal(null), setPhoneInputValueModal(null), setStartTimeInputValueModal(null),
                                                    setEndTimeInputValueModal(null), setCnpjInputValueModal(null), setCepInputValueModal(null), setUfInputValueModal(null), setPublicPlaceInputValueModal(null),
                                                    setCityInputValueModal(null), setDistrictInputValueModal(null), setComplementInputValueModal(null), setHospitalPhotoModal(null),
                                                    setIsHospitalInputModalWithError(false), setIsEmailInputModalWithError(false), setIsPhoneInputModalWithError(false),
                                                    setIsStartTimeInputModalWithError(false), setIsEndTimeInputModalWithError(false), setIsCepInputModalWithError(false)
                                                ]}
                                                title='Editar hospital'
                                            >
                                                <C.Form onSubmit={editHospital} autoComplete="off">
                                                    <C.Label htmlFor="nomeHospitalModal">
                                                        Nome do hospital
                                                        <Input.Input
                                                            onChange={(e) => setHospitalInputValueModal(e.target.value)}
                                                            onBlur={() => hospitalInputValueModal ? setIsHospitalInputModalWithError(false) : null}
                                                            isWithIcon={false}
                                                            errorText={isHospitalInputModalWithError}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            id="nomeHospitalModal"
                                                            defaultValue={hosp.nomeHospital}
                                                        />
                                                    </C.Label>
                                                    <C.Label htmlFor="emailHospitalModal">
                                                        Endereço de e-mail do hospital
                                                        <Input.Input
                                                            onChange={(e) => setEmailInputValueModal(e.target.value)}
                                                            onBlur={() => emailInputValueModal ? setIsEmailInputModalWithError(false) : null}
                                                            isWithIcon={false}
                                                            errorText={isEmailInputModalWithError}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            id="emailHospitalModal"
                                                            defaultValue={hosp.emailHospital}
                                                        />
                                                    </C.Label>
                                                    <C.Label htmlFor="numTelefoneModal">
                                                        Número de telefone do hospital
                                                        <Input.MaskedInput
                                                            mask="(00) 0000-0000"
                                                            onChange={(e) => setPhoneInputValueModal(e.target.value)}
                                                            onBlur={() => phoneInputValueModal.length == 14 ? setIsPhoneInputModalWithError(false) : null}
                                                            isWithIcon={false}
                                                            errorText={isPhoneInputModalWithError}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            id="numTelefoneModal"
                                                            defaultValue={hosp.numTelefone}
                                                            value={phoneInputValueModal}
                                                        />
                                                    </C.Label>

                                                    <C.InputContainer>
                                                        <C.Label htmlFor="aberturaHospitalModal">
                                                            Horário de abertura
                                                            <Input.Input
                                                                onChange={(e) => setStartTimeInputValueModal(e.target.value)}
                                                                onBlur={() => startTimeInputValueModal ? setIsStartTimeInputModalWithError(false) : null}
                                                                isWithIcon={false}
                                                                errorText={isStartTimeInputModalWithError}
                                                                inputSize={sizes.xs}
                                                                type="time"
                                                                id="aberturaHospitalModal"
                                                                defaultValue={hosp.aberturaHospital}
                                                            />
                                                        </C.Label>

                                                        <C.Label htmlFor="fechamentoHospitalModal">
                                                            Horário de fechamento
                                                            <Input.Input
                                                                onChange={(e) => setEndTimeInputValueModal(e.target.value)}
                                                                onBlur={() => endTimeInputValueModal ? setIsEndTimeInputModalWithError(false) : null}
                                                                isWithIcon={false}
                                                                errorText={isEndTimeInputModalWithError}
                                                                inputSize={sizes.xs}
                                                                type="time"
                                                                id="fechamentoHospitalModal"
                                                                defaultValue={hosp.fechamentoHospital}
                                                            />
                                                        </C.Label>
                                                    </C.InputContainer>

                                                    <C.InputContainer>
                                                        <C.Label>
                                                            CNPJ
                                                            <Input.Input
                                                                onChange={(e) => setCnpjInputValueModal(e.target.value)}
                                                                isWithIcon={false}
                                                                errorText={false}
                                                                inputSize={sizes.sm}
                                                                type="text"
                                                                value={hosp.cnpjHospital}
                                                                disabled
                                                            />
                                                        </C.Label>

                                                        <C.Label htmlFor="cepHospitalModal">
                                                            CEP
                                                            <Input.MaskedInput
                                                                mask="00000-000"
                                                                onChange={(e) => setCepInputValueModal(e.target.value)}
                                                                onBlur={(e) => [cepInputValueModal.length == 9 ? setIsCepInputModalWithError(false) : null, getCepModal(e.target.value)]}
                                                                isWithIcon={false}
                                                                errorText={isCepInputModalWithError}
                                                                inputSize={sizes.sm}
                                                                type="text"
                                                                id="cepHospitalModal"
                                                                defaultValue={hosp.cepHospital}
                                                                value={cepInputValueModal}
                                                            />
                                                        </C.Label>

                                                        <C.Label htmlFor="ufHospitalModal">
                                                            UF
                                                            <Input.Input
                                                                onChange={(e) => setUfInputValueModal(e.target.value)}
                                                                isWithIcon={false}
                                                                errorText={false}
                                                                inputSize={sizes.xxs}
                                                                type="text"
                                                                id="ufHospitalModal"
                                                                value={cepModal ? ufInputValueModal : hosp.ufHospital}
                                                                disabled
                                                            />
                                                        </C.Label>
                                                    </C.InputContainer>

                                                    <C.Label htmlFor="logradouroHospitalModal">
                                                        Logradouro
                                                        <Input.Input
                                                            onChange={(e) => setPublicPlaceInputValueModal(e.target.value)}
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            id="logradouroHospitalModal"
                                                            value={cepModal ? publicPlaceInputValueModal : hosp.logradouroHospital}
                                                            disabled
                                                        />
                                                    </C.Label>

                                                    <C.Label htmlFor="cidadeHospitalModal">
                                                        Cidade
                                                        <Input.Input
                                                            onChange={(e) => setCityInputValueModal(e.target.value)}
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            id="cidadeHospitalModal"
                                                            value={cepModal ? cityInputValueModal : hosp.cidadeHospital}
                                                            disabled
                                                        />
                                                    </C.Label>

                                                    <C.Label htmlFor="bairroHospitalModal">
                                                        Bairro
                                                        <Input.Input
                                                            onChange={(e) => setDistrictInputValueModal(e.target.value)}
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            id="bairroHospitalModal"
                                                            value={cepModal ? districtInputValueModal : hosp.bairroHospital}
                                                            disabled
                                                        />
                                                    </C.Label>

                                                    <C.Label htmlFor="complementoHospitalModal">
                                                        Complemento
                                                        <Input.Input
                                                            onChange={(e) => setComplementInputValueModal(e.target.value)}
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            id="complementoHospitalModal"
                                                            defaultValue={hosp.complementoHospital}
                                                        />
                                                    </C.Label>

                                                    <C.Label>
                                                        <InputImage.Root>
                                                            <InputImage.NameImage nameImgInput={hospitalPhotoModal ? hospitalPhotoModal[0].name : null} />
                                                            <InputImage.Label
                                                                inputAction={(e: any) => setHospitalPhotoModal(e.target.files)}
                                                            />
                                                        </InputImage.Root>
                                                    </C.Label>

                                                    <C.ButtonContainer>
                                                        <AlertDialog.Cancel asChild>
                                                            <Button.Gray
                                                                onClick={() => [
                                                                    setHospitalId(0), setPhoneId(0), setHospitalInputValueModal(null), setEmailInputValueModal(null), setPhoneInputValueModal(null), setStartTimeInputValueModal(null),
                                                                    setEndTimeInputValueModal(null), setCnpjInputValueModal(null), setCepInputValueModal(null), setUfInputValueModal(null), setPublicPlaceInputValueModal(null),
                                                                    setCityInputValueModal(null), setDistrictInputValueModal(null), setComplementInputValueModal(null), setHospitalPhotoModal(null),
                                                                    setIsHospitalInputModalWithError(false), setIsEmailInputModalWithError(false), setIsPhoneInputModalWithError(false),
                                                                    setIsStartTimeInputModalWithError(false), setIsEndTimeInputModalWithError(false), setIsCepInputModalWithError(false)
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
                                                itemId={() => [setHospitalId(hosp.idHospital), setPhoneId(hosp.idTelefone)]}
                                                closeModal={() => [setHospitalId(0), setPhoneId(0)]}
                                                title="Excluir hospital"
                                                modalAction={deleteHospital}
                                                cancel='Cancelar'
                                                submit='Excluir'
                                            >
                                                Deseja excluir o hospital selecionado?
                                            </Modal.Alert>
                                        </C.ButtonContainer>
                                    </C.Td>
                                </C.InnerTr>
                            )}
                        </C.Tbody>
                    </C.Table>
                </C.TableContainer>
            </C.Container>
        </MenuBackground>
    )
}