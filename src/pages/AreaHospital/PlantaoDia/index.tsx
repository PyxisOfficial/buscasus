import { useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { ToggleAbsence } from '../../../components/Toggle';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

export function PlantaoDia() {
        const [claimCount, setClaimCount] = useState<string>();
        const [dutyCount, setDutyCount] = useState<string>();
        const [medicsCount, setMedicsCount] = useState<string>();
    
        const date = new Date();
        let weekDay = date.getDay();
        let day: any = "" + date.getDate();
        let month: any = date.getMonth() + 1;
        let year = "" + date.getFullYear();
    
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
    
        const weekDays: any = {
            0: "Domingo",
            1: "Segunda-feira",
            2: "Terça-feira",
            3: "Quarta-feira",
            4: "Quinta-feira",
            5: "Sexta-feira",
            6: "Sábado"
        }

    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [duty, setDuty] = useState([]);
    const [search, setSearch] = useState<string>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    useEffect(() => {
        if (search) {
            axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
                params: {
                    todayDuty: true,
                    search: search,
                    idHospital: hospitalId
                }
            }).then(response => setDuty(response.data));
        } else {
            axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
                params: {
                    todayDuty: true,
                    idHospital: hospitalId
                }
            }).then(response => setDuty(response.data));
        }

        setIsFormSubmitted(false);
    }, [isFormSubmitted]);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                todayDuty: true,
                search: search,
                idHospital: hospitalId
            }
        }).then(response => setDuty(response.data));
    }, [search]);

    async function alterMedicPresence(dutyId: string, medicPresence: boolean) {
        await axios.put('http://localhost/buscasus/api/area-hospital/plantao/', null, {
            params: {
                idPlantao: dutyId,
                presencaMedico: medicPresence
            }
        });

        setIsFormSubmitted(true);
    }

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>
            <C.TitleDiv>
                <C.Title>Plantões do dia</C.Title>
                <C.SubTitle>{weekDays[weekDay]}, {`${day}/${month}/${year}`}</C.SubTitle>
            </C.TitleDiv>
            <C.TableContainer>
                <C.TableContainerHeader>
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
                    <Button.Pdf />
                </C.TableContainerHeader>
                <C.Table>
                    <C.Thead>
                        <C.Tr>
                            <C.Th>Médico</C.Th>
                            <C.Th>Especialidade</C.Th>
                            <C.Th>Início</C.Th>
                            <C.Th>Fim</C.Th>
                            <C.Th></C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        {duty.map((duty: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{duty.nomeMedico}</C.Td>
                                <C.Td>{duty.nomeEspecialidade}</C.Td>
                                <C.Td>{duty.inicioPlantao}</C.Td>
                                <C.Td>{duty.fimPlantao}</C.Td>
                                <C.Td>
                                    <ToggleAbsence
                                        pressed={duty.presencaMedico == 1 ? true : false}
                                        onPressedChange={() => duty.presencaMedico == 1 ? alterMedicPresence(duty.idPlantao, false) : alterMedicPresence(duty.idPlantao, true)}
                                    >
                                        Presente
                                    </ToggleAbsence>
                                </C.Td>
                            </C.InnerTr>
                        )}
                    </C.Tbody>
                </C.Table>
            </C.TableContainer>
        </MenuBackground>
    )
}