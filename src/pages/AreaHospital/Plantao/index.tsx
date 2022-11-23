import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { Checkbox } from '../../../components/Form/Checkbox';
import { ToastContainer, toast } from 'react-toastify';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';
import 'react-toastify/dist/ReactToastify.css';

import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/layouts/prime.css"

export function Plantao() {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [duty, setDuty] = useState([]);
    const [dutyId, setDutyId] = useState<number>();
    const [medics, setMedics] = useState([]);
    const [specialty, setSpecialty] = useState([]);
    const [search, setSearch] = useState<string>();

    const [specialtyInputValue, setSpecialtyInputValue] = useState<any>(1);
    const [startTime, setStartTime] = useState<any>();
    const [endTime, setEndTime] = useState<any>();
    const [medicInputValue, setMedicInputValue] = useState<any>();
    const [dates, setDates] = useState<any>();

    const [isSpecialtyInputWithError, setIsSpecialtyInputWithError] = useState<boolean>();
    const [isStartTimeInputWithError, setIsStartTimeInputWithError] = useState<boolean>();
    const [isEndTimeInputWithError, setIsEndTimeInputWithError] = useState<boolean>();
    const [isMedicInputWithError, setIsMedicInputWithError] = useState<boolean>();

    const [isMultipleDateActive, setIsMultipleDateActive] = useState<boolean>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                idHospital: hospitalId
            }
        }).then(response => setDuty(response.data));

        axios.get('http://localhost/buscasus/api/area-admin/especialidade/').then((response) => setSpecialty(response.data));
    }, []);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                idEspecialidade: specialtyInputValue,
                idHospital: hospitalId
            }
        }).then(response => setMedics(response.data));
    }, [specialtyInputValue]);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
                params: {
                    search: search,
                    idHospital: hospitalId
                }
            }).then(response => setDuty(response.data));
        } else {
            axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
                params: {
                    idHospital: hospitalId
                }
            }).then(response => setDuty(response.data));
        }

        setIsFormSubmitted(false);
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                search: search,
                idHospital: hospitalId
            }
        }).then(response => setDuty(response.data));
    }, [search]);

    useEffect(() => {
        if (isMultipleDateActive == false) setDates('');
    }, [isMultipleDateActive]);

    function formatDate(date: any) {
        let d: any = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + (d.getDate());
        let year = '' + (d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${year}-${month}-${day}`;
    }

    async function insertDuty(event: FormEvent) {
        event.preventDefault();

        if (!startTime) setIsStartTimeInputWithError(true);
        if (!endTime) setIsEndTimeInputWithError(true);
        if (specialtyInputValue == 0 || !specialtyInputValue) setIsSpecialtyInputWithError(true);
        if (medicInputValue == 0 || !medicInputValue) setIsMedicInputWithError(true);

        const formData = new FormData(event.target as HTMLFormElement);
        dates.length > 1 ? dates.map((date: any) => formData.append("dataPlantao[]", formatDate(date))) : formData.append("dataPlantao[]", formatDate(dates));
        formData.append("inicioPlantao", startTime);
        formData.append("fimPlantao", endTime);
        formData.append("idEspecialidade", specialtyInputValue);
        formData.append("idMedico", medicInputValue);
        formData.append("idHospital", hospitalId);

        if (dates && startTime && endTime && specialtyInputValue > 0 && medicInputValue > 0) {
            await axios.post('http://localhost/buscasus/api/area-hospital/plantao/', formData);

            setIsFormSubmitted(true);
            setDates('');
            toast.success("Plantão cadastrado com sucesso!");
        }
    }

    async function deleteDuty() {
        await axios.delete('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                idPlantao: dutyId
            }
        });

        setIsFormSubmitted(true);
        toast.success("Plantão excluído com sucesso!");
    }

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>

            <ToastContainer
                position="top-right"
                autoClose={2000}
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
                    <h3>Cadastrar um novo plantão</h3>
                    <C.Form onSubmit={insertDuty} autoComplete="off">
                        <C.InnerFormContainer>
                            <C.InputContainer>
                                <Label>
                                    Especialidade
                                    <C.Select
                                        onChange={(e) => setSpecialtyInputValue(e.target.value)}
                                        onBlur={() => specialtyInputValue != 0 ? setIsSpecialtyInputWithError(false) : null}
                                        errorText={isSpecialtyInputWithError}
                                    >
                                        <option value="1">Clínico Geral</option>
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
                                <Label htmlFor="idMedico">
                                    Médicos
                                    <C.Select
                                        onChange={(e) => setMedicInputValue(e.target.value)}
                                        onBlur={() => medicInputValue != 0 ? setIsMedicInputWithError(false) : null}
                                        errorText={isMedicInputWithError}
                                    >
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
                            </C.InputContainer>
                            <C.InputContainer>
                                <Label htmlFor="inicioPlantao">
                                    Início
                                    <Input.Input
                                        onChange={(e) => setStartTime(e.target.value)}
                                        onBlur={() => startTime ? setIsStartTimeInputWithError(false) : null}
                                        isWithIcon={false}
                                        errorText={isStartTimeInputWithError}
                                        inputSize={sizes.xs}
                                        type="time"
                                        id="inicioPlantao"
                                    />
                                </Label>
                                <Label htmlFor="fimPlantao">
                                    Fim
                                    <Input.Input
                                        onChange={(e) => setEndTime(e.target.value)}
                                        onBlur={() => endTime ? setIsEndTimeInputWithError(false) : null}
                                        isWithIcon={false}
                                        errorText={isEndTimeInputWithError}
                                        inputSize={sizes.xs}
                                        type="time"
                                        id="fimPlantao"
                                    />
                                </Label>
                            </C.InputContainer>
                        </C.InnerFormContainer>
                        <C.CheckboxContainer>
                            <Checkbox isCheckboxChecked={isMultipleDateActive} checkAction={() => [setIsMultipleDateActive(!isMultipleDateActive)]} />
                            Selecionar múltiplas datas com os mesmos horários
                        </C.CheckboxContainer>

                        <Calendar
                            multiple={isMultipleDateActive}
                            value={dates}
                            onChange={setDates}
                            format="DD/MM/YYYY"
                            months={months}
                            weekDays={weekDays}
                            className="rmdp-prime green myDatePicker"
                            showOtherDays
                            disableYearPicker
                            plugins={[
                                <DatePanel
                                    position="right"
                                    header="Data(s)"
                                />]
                            }
                        />

                        <C.ButtonContainer>
                            <Button.Gray
                                value="Cancelar"
                                type="reset"
                                onClick={() => [
                                    setDates(''), setSpecialtyInputValue(null), setMedicInputValue(null), setStartTime(null), setEndTime(null), setIsMultipleDateActive(false),
                                    setIsSpecialtyInputWithError(false), setIsMedicInputWithError(false), setIsStartTimeInputWithError(false), setIsEndTimeInputWithError(false)
                                ]} />
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
                                    <C.Th>Especialidade</C.Th>
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
                                        <C.Td>{duty.nomeEspecialidade}</C.Td>
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