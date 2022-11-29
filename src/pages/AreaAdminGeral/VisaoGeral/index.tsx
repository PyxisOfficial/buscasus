import { useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { BarChart, PieChart } from '../../../components/Charts';
import { DialogModal } from '../../../components/Modal';
import { Button } from '../../../components/Button';
import * as Dialog from '@radix-ui/react-dialog';

import { Users, UserPlus, Syringe, FirstAid, ThumbsDown, ChatCenteredDots, CaretUp, X } from 'phosphor-react';

import * as C from './styles'

export function VisaoGeralAdmin() {
    const [usersCount, setUsersCount] = useState<string>();
    const [todayUsersCount, setTodayUsersCount] = useState<string>();
    const [weekUsers, setWeekUsers] = useState<any>();
    const [hospitalsCount, setHospitalsCount] = useState<string>();
    const [medicsCount, setMedicsCount] = useState<string>();
    const [claimCount, setClaimCount] = useState<string>();
    const [claim, setClaim] = useState([]);

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

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-usuario/usuario/', {
            params: {
                count: true
            }
        }).then(response => setUsersCount(response.data.idUsuario));

        axios.get('http://localhost/buscasus/api/area-usuario/usuario/', {
            params: {
                todayCount: true
            }
        }).then(response => setTodayUsersCount(response.data.idUsuario));

        axios.get('http://localhost/buscasus/api/area-admin/hospital/', {
            params: {
                count: true
            }
        }).then(response => setHospitalsCount(response.data.idHospital));

        axios.get('http://localhost/buscasus/api/area-hospital/medico/', {
            params: {
                count: true
            }
        }).then(response => setMedicsCount(response.data.idMedico));

        axios.get('http://localhost/buscasus/api/area-admin/visao-geral/usuario-semanal/').then(response => setWeekUsers(response.data));

        axios.get('http://localhost/buscasus/api/area-usuario/reclamacao/', {
            params: {
                count: true
            }
        }).then(response => setClaimCount(response.data.idReclamacao));

        axios.get('http://localhost/buscasus/api/area-usuario/reclamacao/').then(response => setClaim(response.data));
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
                                <span>Usuários Totais</span>
                                <span>{usersCount}</span>
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
                        <h3>Quantidade de novos usuários nas últimas 4 semanas</h3>
                        <BarChart.Area
                            wu1={weekUsers ? parseInt(weekUsers[0].idUsuario) : null}
                            wu2={weekUsers ? parseInt(weekUsers[1].idUsuario) : null}
                            wu3={weekUsers ? parseInt(weekUsers[2].idUsuario) : null}
                            wu4={weekUsers ? parseInt(weekUsers[3].idUsuario) : null}
                        />
                    </C.ChartContainer>
                    <C.ChartContainer>
                        <h3>Especialidades mais pesquisadas</h3>
                        <PieChart.Specialty
                            spe1={1}
                            spe2={1}
                            spe3={1}
                            spe4={2}
                            spe5={3}
                        />
                    </C.ChartContainer>
                </C.LeftContainer>
                <C.Line />
                <C.RightContainer>
                    <C.RightTopContainer>
                        <C.CardsContainer>
                            <C.Card>
                                <C.CardTitle>
                                    <UserPlus size={25} />
                                    <h4>Novos usuários</h4>
                                </C.CardTitle>
                                <C.CardDescription>
                                    <C.TextCard>
                                        {todayUsersCount}
                                    </C.TextCard>
                                </C.CardDescription>
                            </C.Card>

                            <C.Card>
                                <C.CardTitle>
                                    <ThumbsDown size={25} />
                                    <h4>Reclamações</h4>
                                </C.CardTitle>
                                <C.CardDescription>
                                    <C.TextCard>
                                        {claimCount}
                                    </C.TextCard>
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
                            <h3>Reclamações</h3>
                            <C.RequestList>

                                {claim.map((claim: any, key) => {
                                    return (
                                        <DialogModal.Root key={key}>
                                            <Dialog.Trigger asChild>
                                                <C.RequestListItem>
                                                    <C.ItemHeader>
                                                        <span>{claim.tipoReclamacao}</span>
                                                        <span>{claim.dataReclamacao}</span>
                                                    </C.ItemHeader>
                                                    <C.ItemContent>
                                                        <C.ItemDesc>
                                                            {claim.txtReclamacao}
                                                        </C.ItemDesc>
                                                    </C.ItemContent>
                                                </C.RequestListItem>
                                            </Dialog.Trigger>
                                            <DialogModal.Content>
                                                <C.DialogHeader>
                                                    <h3>{claim.tipoReclamacao}</h3>
                                                    <C.DialogHeaderEnd>
                                                        <C.Time>{claim.dataReclamacao}</C.Time>
                                                        <Dialog.Close asChild>
                                                            <C.Close size={20} />
                                                        </Dialog.Close>
                                                    </C.DialogHeaderEnd>
                                                </C.DialogHeader>
                                                <C.DialogDescription>
                                                    {claim.txtReclamacao}
                                                </C.DialogDescription>
                                                <C.DialogFooter>
                                                    <C.Email>{claim.emailUsuario}</C.Email>
                                                    <Button.Green type='submit' value='Marcar como lido' />
                                                </C.DialogFooter>
                                            </DialogModal.Content>
                                        </DialogModal.Root>
                                    )
                                })}
                            </C.RequestList>
                        </C.RequestContainer>
                    </C.RightTopContainer>
                    <C.ChartContainer>
                        <h3>Regiões mais utilizadas</h3>
                        <PieChart.Region />
                    </C.ChartContainer>
                </C.RightContainer>
            </C.DashboardContent>
        </MenuBackground>
    )
}