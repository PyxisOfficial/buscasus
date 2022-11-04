import { useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';

import { Users, UserPlus, Syringe, FirstAid, ThumbsDown, ChatCenteredDots, CaretUp, CaretDown } from 'phosphor-react';

import * as C from './styles'
import { Chart } from '../../../components/Charts';

export function VisaoGeralAdmin() {
    const [hospitalsCount, setHospitalsCount] = useState<string>();
    const [medicsCount, setMedicsCount] = useState<string>();

    const date = new Date();
    let weekDay = date.getDay();
    let day: any = "" + date.getDate();
    let month: any = date.getMonth() + 1;
    let year = "" + date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    const weekDays: any = {
        0: "domingo",
        1: "segunda-feira",
        2: "terça-feira",
        3: "quarta-feira",
        4: "quinta-feira",
        5: "sexta-feira",
        6: "sábado"
    }

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/area-admin/hospital/', {
            params: {
                count: true
            }
        }).then((response) => {
            setHospitalsCount(response.data.idHospital);
        });

        axios.get('http://localhost/buscaSusWeb/api/area-hospital/medico/', {
            params: {
                count: true
            }
        }).then((response) => {
            setMedicsCount(response.data.idMedico);
        });
    }, []);

    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>
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
                            <Users size={70} />
                            <C.TextContainer>
                                <span></span>
                                <span></span>
                            </C.TextContainer>
                        </C.Icons>
                        <C.Icons color='#349684'>
                            <FirstAid size={70} />
                            <C.TextContainer>
                                <span>Hospitais</span>
                                <span>{hospitalsCount}</span>
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
                        <h3>Algum dado qualquer</h3>
                        <Chart.Area />
                    </C.ChartContainer>
                    <C.ChartContainer>
                        <h3>Especialidades mais pesquisadas</h3>
                            <Chart.Pie />
                    </C.ChartContainer>
                </C.LeftContainer>
                <C.Line />
                <C.RightContainer>
                    <C.RightTopContainer>
                        <C.CardsContainer>
                            <C.Card>
                                <C.CardTitle>
                                    <UserPlus size={25} />
                                    <h4>Não sei</h4>
                                </C.CardTitle>
                                <C.CardDescription>
                                    <C.TextCard>
                                        0
                                    </C.TextCard>
                                    <C.PositiveData>
                                        <CaretUp size={20} weight='bold' />
                                        50%
                                    </C.PositiveData>
                                </C.CardDescription>
                            </C.Card>

                            <C.Card>
                                <C.CardTitle>
                                    <ThumbsDown size={25} />
                                    <h4>Reclamações</h4>
                                </C.CardTitle>
                                <C.CardDescription>
                                    <C.TextCard>
                                        12
                                    </C.TextCard>
                                    <C.NegativeData>
                                        <CaretUp size={20} weight='bold' />
                                        20%
                                    </C.NegativeData>
                                </C.CardDescription>
                            </C.Card>

                            <C.Card>
                                <C.CardTitle>
                                    <ChatCenteredDots size={25} />
                                    <h4>Suporte</h4>
                                </C.CardTitle>
                                <C.CardDescription>
                                    <C.TextCard>
                                        7
                                    </C.TextCard>
                                </C.CardDescription>
                            </C.Card>
                        </C.CardsContainer>
                        <C.RequestContainer>
                            <h3>Solicitações de Suporte</h3>
                            <C.RequestList>
                                <C.RequestListItem>
                                    <C.ItemHeader>
                                        Usuário
                                        Tempo
                                    </C.ItemHeader>
                                    Assunto
                                    <p>Descrição</p>
                                </C.RequestListItem>
                            </C.RequestList>
                        </C.RequestContainer>
                    </C.RightTopContainer>
                </C.RightContainer>
            </C.DashboardContent>
        </MenuBackground>
    )
}