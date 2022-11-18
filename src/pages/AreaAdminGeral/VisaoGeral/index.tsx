import { useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { BarChart, PieChart } from '../../../components/Charts';
import { DialogModal } from '../../../components/Modal';
import { Button } from '../../../components/Button';
import { HoverCard } from '../../../components/HoverCard';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as Dialog from '@radix-ui/react-dialog';

import { Users, UserPlus, Syringe, FirstAid, ThumbsDown, ChatCenteredDots, CaretUp, X } from 'phosphor-react';

import * as C from './styles'

export function VisaoGeralAdmin() {
    const [usersCount, setUsersCount] = useState<string>();
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
        0: "Domingo",
        1: "Segunda-feira",
        2: "Terça-feira",
        3: "Quarta-feira",
        4: "Quinta-feira",
        5: "Sexta-feira",
        6: "Sábado"
    }

    useEffect(() => {
        axios.get('http://localhost/buscasus-web/api/area-usuario/usuario/', {
            params: {
                count: true
            }
        }).then(response => setUsersCount(response.data.idUsuario));

        axios.get('http://localhost/buscasus-web/api/area-admin/hospital/', {
            params: {
                count: true
            }
        }).then(response => setHospitalsCount(response.data.idHospital));

        axios.get('http://localhost/buscasus-web/api/area-hospital/medico/', {
            params: {
                count: true
            }
        }).then(response => setMedicsCount(response.data.idMedico));
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
                        <h3>Quantidade de novos usuários por semana do mês</h3>
                        <BarChart.Area />
                    </C.ChartContainer>
                    <C.ChartContainer>
                        <h3>Especialidades mais pesquisadas</h3>
                        <PieChart.Specialty />
                    </C.ChartContainer>
                </C.LeftContainer>
                <C.Line />
                <C.RightContainer>
                    <C.RightTopContainer>
                        <C.CardsContainer>
                            <C.Card>
                                <C.CardTitle>
                                    <UserPlus size={25} />
                                    <h4>Usuários</h4>
                                </C.CardTitle>
                                <C.CardDescription>
                                    <C.TextCard>
                                        0
                                    </C.TextCard>
                                    <HoverCard.Root>
                                        <HoverCardPrimitive.Trigger asChild>
                                            <C.PositiveData>
                                                <CaretUp size={20} weight='bold' />
                                                50%
                                            </C.PositiveData>
                                        </HoverCardPrimitive.Trigger>
                                        <HoverCard.Content>
                                            Aumento de 50% comparado ao último mês
                                        </HoverCard.Content>
                                    </HoverCard.Root>
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
                                    <HoverCard.Root>
                                        <HoverCardPrimitive.Trigger asChild>
                                            <C.NegativeData>
                                                <CaretUp size={20} weight='bold' />
                                                20%
                                            </C.NegativeData>
                                        </HoverCardPrimitive.Trigger>
                                        <HoverCard.Content>
                                            Aumento de 20% comparado ao último mês
                                        </HoverCard.Content>
                                    </HoverCard.Root>
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
                                <DialogModal.Root>
                                    <Dialog.Trigger asChild>
                                        <C.RequestListItem>
                                            <C.ItemHeader>
                                                <span>Médico ausente</span>
                                                <span>Há 20 minutos</span>
                                            </C.ItemHeader>
                                            <C.ItemContent>
                                                <C.ItemDesc>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus sint repudiandae quod corporis,
                                                    nostrum, nobis impedit illum quasi aut iste voluptates hic, modi praesentium error aliquid debitis distinctio eos!
                                                </C.ItemDesc>
                                            </C.ItemContent>
                                        </C.RequestListItem>
                                    </Dialog.Trigger>
                                    <DialogModal.Content>
                                        <C.DialogHeader>
                                            <h3>Médico ausente</h3>
                                            <C.DialogHeaderEnd>
                                                <C.Time>Há 20 minutos</C.Time>
                                                <Dialog.Close asChild>
                                                    <C.Close size={20} />
                                                </Dialog.Close>
                                            </C.DialogHeaderEnd>
                                        </C.DialogHeader>
                                        <C.DialogDescription>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, perferendis!
                                            Sapiente excepturi voluptate earum quas, iure tenetur incidunt necessitatibus distinctio est,
                                            itaque deleniti dignissimos cum temporibus. Enim a similique iste?
                                        </C.DialogDescription>
                                        <C.DialogFooter>
                                            <C.Email>gabrieldantas@email.com</C.Email>
                                            <Button.Green type='submit' value='Marcar como lido' />
                                        </C.DialogFooter>
                                    </DialogModal.Content>
                                </DialogModal.Root>
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