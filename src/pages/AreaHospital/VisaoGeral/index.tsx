import { useEffect, useState } from 'react';
import axios from 'axios';

import { PrimeiroAcesso } from '../PrimeiroAcesso';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { BarChart, PieChart } from '../../../components/Charts';

import { Activity, Syringe, ThumbsDown, ChatCenteredDots, CaretUp, X } from 'phosphor-react';

import * as C from './styles'

export function VisaoGeralHospital() {
    const [claimCount, setClaimCount] = useState<string>();
    const [dutyCount, setDutyCount] = useState<string>();
    const [medicsCount, setMedicsCount] = useState<string>();

    const [specialtyCount, setSpecialtyCount] = useState<any>();

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

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const getAdminId: any = localStorage.getItem("admin_id");
    const adminId = JSON.parse(getAdminId);

    const getFirstAccess: any = localStorage.getItem("first_access");
    const firstAccess = JSON.parse(getFirstAccess);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-usuario/reclamacao/', {
            params: {
                hospitalCount: true,
                idHospital: hospitalId
            }
        }).then(response => setClaimCount(response.data.idReclamacao));

        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                hospitalCount: true,
                idHospital: hospitalId
            }
        }).then(response => setDutyCount(response.data.idPlantao));

        axios.get('http://localhost/buscasus/api/area-hospital/medico/', {
            params: {
                hospitalCount: true,
                idHospital: hospitalId
            }
        }).then(response => setMedicsCount(response.data.idMedico));

        axios.get('http://localhost/buscasus/api/area-hospital/visao-geral/medicoEspecialidade/').then(response => setSpecialtyCount(response.data));
    }, []);

    return (
        firstAccess == 1 ? <PrimeiroAcesso adminId={adminId} /> :
            <MenuBackground menuLinks={<MenuLinksHospital />}>
                <C.TopContainer>
                    <C.TitleDiv>
                        <C.Title>Dashboard</C.Title>
                        <C.SubTitle>{weekDays[weekDay]}, {`${day}/${month}/${year}`}</C.SubTitle>
                    </C.TitleDiv>
                </C.TopContainer>
                <C.DashboardContent>
                    <C.LeftContainer>
                        <C.Quantities>
                            <C.Icons color='#49B28C'>
                                <ChatCenteredDots size={70} />
                                <C.TextContainer>
                                    <span>Notificações</span>
                                    <span>{claimCount}</span>
                                </C.TextContainer>
                            </C.Icons>
                            <C.Icons color='#349684'>
                                <Activity size={70} />
                                <C.TextContainer>
                                    <span>Plantões</span>
                                    <span>{dutyCount}</span>
                                </C.TextContainer>
                            </C.Icons>
                            <C.Icons color='#496461'>
                                <Syringe size={70} />
                                <C.TextContainer>
                                    <span>Médicos</span>
                                    <span>{medicsCount}</span>
                                </C.TextContainer>
                            </C.Icons>
                        </C.Quantities>
                        <C.ChartContainer>
                            <h3>Ausências nos últimos 4 meses</h3>
                            <BarChart.Line />
                        </C.ChartContainer>
                        <C.ChartContainer>
                            <h3>Porcentagem de médicos por especialidade</h3>
                            <PieChart.Specialty
                                spe1={specialtyCount ? parseInt(specialtyCount[0].idMedico) : null}
                                spe2={specialtyCount ? parseInt(specialtyCount[1].idMedico) : null}
                                spe3={specialtyCount ? parseInt(specialtyCount[2].idMedico) : null}
                                spe4={specialtyCount ? parseInt(specialtyCount[3].idMedico) : null}
                                spe5={specialtyCount ? parseInt(specialtyCount[4].idMedico) : null}
                                spe6={specialtyCount ? parseInt(specialtyCount[5].idMedico) : null}
                                spe7={specialtyCount ? parseInt(specialtyCount[6].idMedico) : null}
                                spe8={specialtyCount ? parseInt(specialtyCount[7].idMedico) : null}
                                spe9={specialtyCount ? parseInt(specialtyCount[8].idMedico) : null}
                                spe10={specialtyCount ? parseInt(specialtyCount[9].idMedico) : null}
                                spe11={specialtyCount ? parseInt(specialtyCount[10].idMedico) : null}
                                spe12={specialtyCount ? parseInt(specialtyCount[11].idMedico) : null}
                            />
                        </C.ChartContainer>
                    </C.LeftContainer>
                    <C.Line />
                    <C.RightContainer>
                        <C.ChartContainer>
                            <h3>Satisfação dos pacientes</h3>
                            <PieChart.Opinion />
                        </C.ChartContainer>
                        <C.ChartContainer>
                            <h3>Pesquisas pelo hospital no último mês</h3>
                            <BarChart.Search />
                        </C.ChartContainer>
                    </C.RightContainer>
                </C.DashboardContent>
            </MenuBackground>
    )
}