import { FormEvent, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Toast } from '../../../components/Toast';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

export function Hospital() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [hospital, setHospital] = useState([]);
    const [hospitalId, setHospitalId] = useState<number>();
    const [phoneId, setPhoneId] = useState<number>();
    const [hospitalPhoto, setHospitalPhoto] = useState<any>();
    const [search, setSearch] = useState<string>();

    const formRef = useRef<any>();

    useEffect(() => {
        axios.get(`http://localhost/buscaSusWeb/api/area-admin/hospital/`).then((response) => {
            setHospital(response.data);
        });
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-admin/hospital/', {
                params: {
                    search: search
                }
            }).then(response => {
                setHospital(response.data);
            });
        } else {
            axios.get(`http://localhost/buscaSusWeb/api/area-admin/hospital/`).then((response) => {
                setHospital(response.data);
            });
        }

        setIsFormSubmitted(false);
        setHospitalPhoto(null);

        setTimeout(() => {
            setIsToastOpened(false);
        }, 2000);

        formRef.current.reset();
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/hospital/', {
            params: {
                search: search,
            }
        }).then(response => {
            setHospital(response.data);
        });
    }, [search]);

    async function insertHospital(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        const allFormData = new FormData(event.target as HTMLFormElement);
        allFormData.append("nomeHospital", data.nomeHospital);
        allFormData.append("emailHospital", data.emailHospital);
        allFormData.append("numTelefone", data.numTelefone);
        allFormData.append("aberturaHospital", data.aberturaHospital);
        allFormData.append("fechamentoHospital", data.fechamentoHospital);
        allFormData.append("cnpjHospital", data.cnpjHospital);
        allFormData.append("ufHospital", data.ufHospital);
        allFormData.append("logradouroHospital", data.logradouroHospital);
        allFormData.append("complementoHospital", data.complementoHospital);
        allFormData.append("cepHospital", data.cepHospital);
        allFormData.append("cidadeHospital", data.cidadeHospital);
        allFormData.append("bairroHospital", data.bairroHospital);
        allFormData.append("fotoHospital", data.fotoHospital.name);
        allFormData.append("picture", hospitalPhoto[0]);

        await axios.post('http://localhost/buscaSusWeb/api/area-admin/hospital/', allFormData);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Hospital cadastrado com sucesso!");
    }

    async function editHospital(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);

        const allFormData = new FormData(event.target as HTMLFormElement);
        hospitalPhoto ? allFormData.append("picture", hospitalPhoto[0]) : null;
        allFormData.append('_method', 'PUT');

        await axios.post('http://localhost/buscaSusWeb/api/area-admin/hospital/', allFormData, {
            params: {
                nomeHospital: data.nomeHospital,
                emailHospital: data.emailHospital,
                numTelefone: data.numTelefone,
                aberturaHospital: data.aberturaHospital,
                fechamentoHospital: data.fechamentoHospital,
                ufHospital: data.ufHospital,
                logradouroHospital: data.logradouroHospital,
                complementoHospital: data.complementoHospital,
                cepHospital: data.cepHospital,
                cidadeHospital: data.cidadeHospital,
                bairroHospital: data.bairroHospital,
                fotoHospital: data.fotoHospital.name,
                idHospital: hospitalId,
                idTelefone: phoneId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Hospital editado com sucesso!");
    }

    async function deleteHospital() {
        await axios.delete('http://localhost/buscaSusWeb/api/area-admin/hospital/', {
            params: {
                idHospital: hospitalId,
                idTelefone: phoneId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Hospital excluído com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>

            <Toast.Root
                onOpenChange={isToastOpened}
            >
                <Toast.Description>{messageToast}</Toast.Description>
            </Toast.Root>

            <C.Container>
                <C.FormContainer>
                    <C.Title>Cadastrar um novo hospital</C.Title>
                    <C.Form ref={formRef} onSubmit={insertHospital} autoComplete="off">
                        <C.Label htmlFor="nomeHospital">
                            Nome do hospital
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.xl}
                                type="text"
                                name="nomeHospital"
                                id="nomeHospital"
                            />
                        </C.Label>
                        <C.Label htmlFor="emailHospital">
                            Endereço de e-mail do hospital
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.xl}
                                type="text"
                                name="emailHospital"
                                id="emailHospital"
                            />
                        </C.Label>
                        <C.Label htmlFor="numTelefone">
                            Número de telefone do hospital
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="numTelefone"
                                id="numTelefone"
                            />
                        </C.Label>

                        <C.InputContainer>
                            <C.Label htmlFor="aberturaHospital">
                                Horário de abertura
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    name="aberturaHospital"
                                    id="aberturaHospital"
                                />
                            </C.Label>

                            <C.Label htmlFor="fechamentoHospital">
                                Horário de fechamento
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    name="fechamentoHospital"
                                    id="fechamentoHospital"
                                />
                            </C.Label>
                        </C.InputContainer>

                        <C.InputContainer>
                            <C.Label htmlFor="cnpjHospital">
                                CNPJ
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    type="text"
                                    name="cnpjHospital"
                                    id="cnpjHospital"
                                />
                            </C.Label>

                            <C.Label htmlFor="cepHospital">
                                CEP
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="text"
                                    name="cepHospital"
                                    id="cepHospital"
                                />
                            </C.Label>

                            <C.Label htmlFor="ufHospital">
                                UF
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xxs}
                                    type="text"
                                    name="ufHospital"
                                    id="ufHospital"
                                />
                            </C.Label>
                        </C.InputContainer>

                        <C.Label htmlFor="logradouroHospital">
                            Logradouro
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                name="logradouroHospital"
                                id="logradouroHospital"
                            />
                        </C.Label>

                        <C.Label htmlFor="cidadeHospital">
                            Cidade
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                name="cidadeHospital"
                                id="cidadeHospital"
                            />
                        </C.Label>

                        <C.Label htmlFor="bairroHospital">
                            Bairro
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                name="bairroHospital"
                                id="bairroHospital"
                            />
                        </C.Label>

                        <C.Label htmlFor="complementoHospital">
                            Complemento
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.md}
                                type="text"
                                name="complementoHospital"
                                id="complementoHospital"
                            />
                        </C.Label>

                        <input
                            onChange={(e) => setHospitalPhoto(e.target.files)}
                            type="file"
                            accept=".jpg, .png"
                            name="fotoHospital"
                        />
                        <C.ButtonContainer>
                            <Button.Gray value="Cancelar" type="reset" />
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
                                                itemId={() => [setHospitalId(hosp.idHospital), setPhoneId(hosp.idTelefone)]}
                                                closeModal={() => [setHospitalId(0), setPhoneId(0)]}
                                                title='Editar hospital'
                                            >
                                                <C.Form onSubmit={editHospital} autoComplete="off">
                                                    <C.Label htmlFor="nomeHospitalModal">
                                                        Nome do hospital
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            name="nomeHospital"
                                                            id="nomeHospitalModal"
                                                            defaultValue={hosp.nomeHospital}
                                                        />
                                                    </C.Label>
                                                    <C.Label htmlFor="emailHospitalModal">
                                                        Endereço de e-mail do hospital
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.xl}
                                                            type="text"
                                                            name="emailHospital"
                                                            id="emailHospitalModal"
                                                            defaultValue={hosp.emailHospital}
                                                        />
                                                    </C.Label>
                                                    <C.Label htmlFor="numTelefoneModal">
                                                        Número de telefone do hospital
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.sm}
                                                            type="text"
                                                            name="numTelefone"
                                                            id="numTelefoneModal"
                                                            defaultValue={hosp.numTelefone}
                                                        />
                                                    </C.Label>

                                                    <C.InputContainer>
                                                        <C.Label htmlFor="aberturaHospitalModal">
                                                            Horário de abertura
                                                            <Input.Input
                                                                isWithIcon={false}
                                                                errorText={false}
                                                                inputSize={sizes.xs}
                                                                type="time"
                                                                name="aberturaHospital"
                                                                id="aberturaHospitalModal"
                                                                defaultValue={hosp.aberturaHospital}
                                                            />
                                                        </C.Label>

                                                        <C.Label htmlFor="fechamentoHospitalModal">
                                                            Horário de fechamento
                                                            <Input.Input
                                                                isWithIcon={false}
                                                                errorText={false}
                                                                inputSize={sizes.xs}
                                                                type="time"
                                                                name="fechamentoHospital"
                                                                id="fechamentoHospitalModal"
                                                                defaultValue={hosp.fechamentoHospital}
                                                            />
                                                        </C.Label>
                                                    </C.InputContainer>

                                                    <C.InputContainer>
                                                        <C.Label>
                                                            CNPJ
                                                            <Input.Input
                                                                isWithIcon={false}
                                                                errorText={false}
                                                                inputSize={sizes.sm}
                                                                type="text"
                                                                defaultValue={hosp.cnpjHospital}
                                                                disabled
                                                            />
                                                        </C.Label>

                                                        <C.Label htmlFor="cepHospitalModal">
                                                            CEP
                                                            <Input.Input
                                                                isWithIcon={false}
                                                                errorText={false}
                                                                inputSize={sizes.xs}
                                                                type="text"
                                                                name="cepHospital"
                                                                id="cepHospitalModal"
                                                                defaultValue={hosp.cepHospital}
                                                            />
                                                        </C.Label>

                                                        <C.Label htmlFor="ufHospitalModal">
                                                            UF
                                                            <Input.Input
                                                                isWithIcon={false}
                                                                errorText={false}
                                                                inputSize={sizes.xxs}
                                                                type="text"
                                                                name="ufHospital"
                                                                id="ufHospitalModal"
                                                                defaultValue={hosp.ufHospital}
                                                            />
                                                        </C.Label>
                                                    </C.InputContainer>

                                                    <C.Label htmlFor="logradouroHospitalModal">
                                                        Logradouro
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.md}
                                                            type="text"
                                                            name="logradouroHospital"
                                                            id="logradouroHospitalModal"
                                                            defaultValue={hosp.logradouroHospital}
                                                        />
                                                    </C.Label>

                                                    <C.Label htmlFor="cidadeHospitalModal">
                                                        Cidade
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.md}
                                                            type="text"
                                                            name="cidadeHospital"
                                                            id="cidadeHospitalModal"
                                                            defaultValue={hosp.cidadeHospital}
                                                        />
                                                    </C.Label>

                                                    <C.Label htmlFor="bairroHospitalModal">
                                                        Bairro
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.md}
                                                            type="text"
                                                            name="bairroHospital"
                                                            id="bairroHospitalModal"
                                                            defaultValue={hosp.bairroHospital}
                                                        />
                                                    </C.Label>

                                                    <C.Label htmlFor="complementoHospitalModal">
                                                        Complemento
                                                        <Input.Input
                                                            isWithIcon={false}
                                                            errorText={false}
                                                            inputSize={sizes.md}
                                                            type="text"
                                                            name="complementoHospital"
                                                            id="complementoHospitalModal"
                                                            defaultValue={hosp.complementoHospital}
                                                        />
                                                    </C.Label>

                                                    <input
                                                        onChange={(e) => setHospitalPhoto(e.target.files)}
                                                        type="file"
                                                        accept=".jpg, .png"
                                                        name="fotoHospital"
                                                    />

                                                    <C.ButtonContainer>
                                                        <AlertDialog.Cancel asChild>
                                                            <Button.Gray value="Fechar" type="button" />
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