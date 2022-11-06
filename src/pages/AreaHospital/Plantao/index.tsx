import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { Toast } from '../../../components/Toast';
import { Checkbox } from '../../../components/Checkbox';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

import { Calendar, Value } from "react-multi-date-picker";

export function Plantao() {
    const [startTime, setStartTime] = useState<any>([]);
    const [endTime, setEndTime] = useState<any>([]);
    const [dates, setDates] = useState<Value>();
    const [arrayDates, setArrayDates] = useState<any>([]);

    const [isMultipleDateActive, setIsMultipleDateActive] = useState<boolean>();

    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [duty, setDuty] = useState([]);
    const [dutyId, setDutyId] = useState<number>();
    const [medics, setMedics] = useState([]);
    const [dutyType, setDutyType] = useState([]);
    const [search, setSearch] = useState<string>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-hospital/plantao/', {
            params: {
                idHospital: hospitalId
            }
        }).then((response) => {
            setDuty(response.data);
        });

        axios.get('http://localhost/buscaSusWeb/api/area-hospital/medico/', {
            params: {
                idHospital: hospitalId
            }
        }).then((response) => {
            setMedics(response.data);
        });

        axios.get('http://localhost/buscaSusWeb/api/area-admin/tipoPlantao/').then((response) => {
            setDutyType(response.data);
        });
    }, []);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscaSusWeb/api/area-hospital/plantao/', {
                params: {
                    search: search,
                    idHospital: hospitalId
                }
            }).then(response => {
                setDuty(response.data);
            });
        } else {
            axios.get('http://localhost/buscaSusWeb/api/area-hospital/plantao/', {
                params: {
                    idHospital: hospitalId
                }
            }).then((response) => {
                setDuty(response.data);
            });
        }

        setIsFormSubmitted(false);

        setTimeout(() => {
            setIsToastOpened(false);
        }, 2000);
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-hospital/plantao/', {
            params: {
                search: search,
                idHospital: hospitalId
            }
        }).then(response => {
            setDuty(response.data);
        });
    }, [search]);

    useEffect(() => {
        if (dates && isMultipleDateActive) {
            let date: any = [];
            for (let i = 0; i < dates.length; i++) {
                date = new Date(dates[i]).toISOString().split('T');
            }
            if (date) setArrayDates([...arrayDates, date[0]]);
        } else {
            let date: any = new Date(dates);
            let month = '' + (date.getMonth() + 1);
            let day = '' + (date.getDate());
            let year = '' + (date.getFullYear());

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            let formattedDate = year + '-' + month + '-' + day;

            if (dates) setArrayDates([formattedDate]);
        }
    }, [dates]);

    useEffect(() => {
        if (isMultipleDateActive == false) {
            setArrayDates([]);
            setDates('');
        }
    }, [isMultipleDateActive]);

    async function insertDuty(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: any = Object.fromEntries(formData);
        arrayDates.map((date: any) => formData.append("dataPlantao[]", date));
        formData.append("inicioPlantao", startTime);
        formData.append("fimPlantao", endTime);
        formData.append("idTipoPlantao", data.idTipoPlantao);
        formData.append("idMedico", data.idMedico);
        formData.append("idHospital", hospitalId);

        await axios.post('http://localhost/buscaSusWeb/api/area-hospital/plantao/', formData);

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Plantão cadastrado com sucesso!");
    }

    async function deleteDuty() {
        await axios.delete('http://localhost/buscaSusWeb/api/area-hospital/plantao/', {
            params: {
                idPlantao: dutyId
            }
        });

        setIsFormSubmitted(true);

        setIsToastOpened(true);
        setMessageToast("Plantão excluído com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>

            <Toast.Root
                onOpenChange={isToastOpened}
            >
                <Toast.Description>{messageToast}</Toast.Description>
            </Toast.Root>

            <C.Container>
                <C.FormContainer>
                    <h3>Cadastrar um novo plantão</h3>
                    <C.Form onSubmit={insertDuty} autoComplete="off">
                        <Label htmlFor="TipoPlantao">
                            Tipo do plantão
                            <C.Select name="idTipoPlantao">
                                <option value="0">Selecione</option>
                                {dutyType.map((dt: any) =>
                                    <option
                                        key={dt.idTipoPlantao}
                                        value={dt.idTipoPlantao}
                                    >
                                        {dt.tipoPlantao}
                                    </option>
                                )}
                            </C.Select>
                        </Label>
                        <C.InputContainer>
                            <Label htmlFor="inicioPlantao">
                                Início
                                <Input.Input
                                    onChange={(e) => setStartTime(e.target.value)}
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="inicioPlantao"
                                />
                            </Label>
                            <Label htmlFor="fimPlantao">
                                Fim
                                <Input.Input
                                    onChange={(e) => setEndTime(e.target.value)}
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="fimPlantao"
                                />
                            </Label>
                        </C.InputContainer>
                        <Label htmlFor="idMedico">
                            Médico
                            <C.Select name="idMedico">
                                <option value="0">Selecione</option>
                                {medics.map((medic: any) =>
                                    <option
                                        key={medic.idMedico}
                                        value={medic.idMedico}
                                    >
                                        {medic.nomeMedico}
                                    </option>
                                )}
                            </C.Select>
                        </Label>
                        <C.CheckboxContainer>
                            <Checkbox checkAction={() => setIsMultipleDateActive(!isMultipleDateActive)} />
                            Selecionar múltiplas datas com o mesmo horário
                        </C.CheckboxContainer>

                        <Calendar
                            multiple={isMultipleDateActive}
                            value={dates}
                            onChange={setDates}
                            format="DD/MM/YYYY"
                            months={months}
                            weekDays={weekDays}
                            className="green"
                            showOtherDays
                        />

                        <C.ButtonContainer>
                            <Button.Gray value="Cancelar" type="reset" onClick={() => [setDates(''), setArrayDates([]), setStartTime([]), setEndTime([])]} />
                            <Button.Green value="Salvar" type="submit" />
                        </C.ButtonContainer>
                    </C.Form>
                </C.FormContainer>

                <C.FormColumn>
                    <C.TableContainer>
                        <C.TableContainerHeader>
                            <h3>Plantões cadastrados</h3>
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
                                    <C.Th>Data</C.Th>
                                    <C.Th>Início</C.Th>
                                    <C.Th>Fim</C.Th>
                                    <C.Th>Médico</C.Th>
                                    <C.Th></C.Th>
                                </C.Tr>
                            </C.Thead>
                            <C.Tbody>
                                {duty.map((duty: any, key) =>
                                    <C.InnerTr key={key}>
                                        <C.Td>{duty.dataPlantao}</C.Td>
                                        <C.Td>{duty.inicioPlantao}</C.Td>
                                        <C.Td>{duty.fimPlantao}</C.Td>
                                        <C.Td>{duty.nomeMedico}</C.Td>
                                        <C.Td>
                                            <C.ButtonContainer>

                                                <Modal.Alert
                                                    itemId={() => { setDutyId(duty.idPlantao) }}
                                                    closeModal={() => { setDutyId(0) }}
                                                    title="Excluir plantão"
                                                    modalAction={deleteDuty}
                                                    cancel='Cancelar'
                                                    submit='Excluir'
                                                >
                                                    Deseja excluir o plantão selecionado?
                                                </Modal.Alert>
                                            </C.ButtonContainer>
                                        </C.Td>
                                    </C.InnerTr>
                                )}
                            </C.Tbody>
                        </C.Table>
                    </C.TableContainer>
                </C.FormColumn>
            </C.Container>
        </MenuBackground>
    )
}