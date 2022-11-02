import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';

import { Users, UserPlus,Syringe, FirstAid, ThumbsDown, ChatCenteredDots, CaretUp, CaretDown} from 'phosphor-react'

import * as C from './styles'

export function VisaoGeralAdmin() {
    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>
            <C.TopContainer>
                <C.TitleDiv>
                    <C.Title>Dashboard</C.Title>
                    <C.SubTitle>quarta-feira, 07/11/2022</C.SubTitle>
                </C.TitleDiv>
            </C.TopContainer>
            <C.DashboardContent>
                <C.LeftContainer>
                    <C.Quantities>
                        <C.Icons color='#49B28C'>
                            <Users size={70} />
                            <C.TextContainer>
                                <span>Usuários</span>
                                <span>3</span>
                            </C.TextContainer>
                        </C.Icons>
                        <C.Icons color='#349684'>
                            <FirstAid size={70} />
                            <C.TextContainer>
                                <span>Hospitais</span>
                                <span>26</span>
                            </C.TextContainer>
                        </C.Icons>
                        <C.Icons color='#496461'>
                            <Syringe size={70} />
                            <C.TextContainer>
                                <span>Médicos</span>
                                <span>32</span>
                            </C.TextContainer>
                        </C.Icons>
                    </C.Quantities>
                    <C.ChartContainer>
                        <h3>Fluxo mensal de Usuários</h3>
                        <C.ChartMonth />
                    </C.ChartContainer>
                    <C.ChartContainer>
                        <h3>Idade dos usuários</h3>
                        <C.ChartUsers>
                            
                        </C.ChartUsers>
                    </C.ChartContainer>
                </C.LeftContainer>
                <C.Line />
                <C.RightContainer>
                    <C.RightTopContainer>
                        <C.CardsContainer>
                            <C.Card>
                                <C.CardTitle>
                                    <UserPlus size={25}/>
                                    <h4>Novos Usuários</h4>
                                </C.CardTitle>
                                <C.CardDescription>
                                    <C.TextCard>
                                        230
                                    </C.TextCard>
                                    <C.PositiveData>
                                        <CaretUp size={20} weight='bold'/>
                                        50%
                                    </C.PositiveData>
                                </C.CardDescription>
                            </C.Card>

                            <C.Card>
                                <C.CardTitle>
                                    <ThumbsDown size={25}/>
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
                                    <ChatCenteredDots size={25}/>
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