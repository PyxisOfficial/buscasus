import { useEffect, useState } from 'react';
import axios from 'axios';

import { DutyCalendar } from '../../../components/Calendar';
import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Modal } from '../../../components/Modal';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Form/Label';
import { Toast } from '../../../components/Toast';

import { MagnifyingGlass, Pencil } from 'phosphor-react';

import * as C from './styles';

import { Value } from 'react-multi-date-picker';

export function Plantao() {
    const [dates, setDates] = useState<Value>();

    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const [isToastOpened, setIsToastOpened] = useState<boolean>(false);
    const [messageToast, setMessageToast] = useState<string>();

    const [duty, setDuty] = useState([]);
    const [dutyId, setDutyId] = useState<number>();
    const [medics, setMedics] = useState([]);
    const [search, setSearch] = useState<string>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

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
                    <C.Form autoComplete="off">
                        <Label htmlFor="TipoPlantao">
                            Tipo do plantão
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.xl}
                                type="text"
                                id="tipoPlantao"
                                name="tipoPlantao"
                            />
                        </Label>
                        <C.InputContainer>
                            <Label htmlFor="inicioPlantao">
                                Início
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="inicioPlantao"
                                    name="inicioPlantao"
                                />
                            </Label>
                            <Label htmlFor="fimPlantao">
                                Fim
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    id="fimPlantao"
                                    name="fimPlantao"
                                />
                            </Label>
                        </C.InputContainer>
                        <Label htmlFor="idMedico">
                            Médico
                            <C.Select>
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

                        <DutyCalendar
                            dates={dates}
                            setDates={setDates}
                        />

                        <C.ButtonContainer>
                            <Button.Gray value="Cancelar" type="reset" onClick={() => setDates([])} />
                            <Button.Green value="Salvar" type="submit" />
                        </C.ButtonContainer>
                    </C.Form>
                </C.FormContainer>
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
                                            <Button.Edit>
                                                <Pencil size={24} />
                                            </Button.Edit>
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
            </C.Container>
        </MenuBackground>
    )
}