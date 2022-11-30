import { useEffect, useState } from 'react';
import axios from 'axios';

import { PrimeiroAcesso } from '../PrimeiroAcesso';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { BarChart, PieChart } from '../../../components/Charts';

import { Activity, Syringe, WarningCircle } from 'phosphor-react';

import * as C from './styles'

export function VisaoGeralHospital() {
    const [medicAbsenceCount, setMedicAbsenceCount] = useState<string>();
    const [dutyCount, setDutyCount] = useState<string>();
    const [medicsCount, setMedicsCount] = useState<string>();

    const [specialtyCount, setSpecialtyCount] = useState<any>();
    const [absencesCount, setAbsencesCount] = useState<any>();

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

    const months: any = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro"
    }

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    const getAdminId: any = localStorage.getItem("admin_id");
    const adminId = JSON.parse(getAdminId);

    const getFirstAccess: any = localStorage.getItem("first_access");
    const firstAccess = JSON.parse(getFirstAccess);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                medicAbsenceCount: true,
                idHospital: hospitalId
            }
        }).then(response => setMedicAbsenceCount(response.data.idPlantao));

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

        axios.get('http://localhost/buscasus/api/area-hospital/visao-geral/medico-especialidade/', {
            params: {
                idHospital: hospitalId
            }
        }).then(response => setSpecialtyCount(response.data));

        axios.get('http://localhost/buscasus/api/area-hospital/visao-geral/medico-ausencia/', {
            params: {
                idHospital: hospitalId
            }
        }).then(response => setAbsencesCount(response.data));
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
                                <WarningCircle size={70} />
                                <C.TextContainer>
                                    <span>Ausências do dia</span>
                                    <span>{medicAbsenceCount}</span>
                                </C.TextContainer>
                            </C.Icons>
                            <C.Icons color='#349684'>
                                <Activity size={70} />
                                <C.TextContainer>
                                    <span>Total de plantões</span>
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
                            <BarChart.Line
                                m1={absencesCount ? months[absencesCount[0].mes] : null}
                                m2={absencesCount ? months[absencesCount[1].mes] : null}
                                m3={absencesCount ? months[absencesCount[2].mes] : null}
                                m4={absencesCount ? months[absencesCount[3].mes] : null}
                                abs1={absencesCount ? parseInt(absencesCount[0].ausenciasMedico) : null}
                                abs2={absencesCount ? parseInt(absencesCount[1].ausenciasMedico) : null}
                                abs3={absencesCount ? parseInt(absencesCount[2].ausenciasMedico) : null}
                                abs4={absencesCount ? parseInt(absencesCount[3].ausenciasMedico) : null}
                            />
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