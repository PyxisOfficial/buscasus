import { useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';
import { Toggle } from '../../../components/Toggle';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

export function PlantaoDia() {

    const [duty, setDuty] = useState([]);
    const [search, setSearch] = useState<string>();

    const getHospitalId: any = localStorage.getItem("hospital_id");
    const hospitalId = JSON.parse(getHospitalId);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                todayDuty: true,
                idHospital: hospitalId
            }
        }).then(response => setDuty(response.data));
    }, []);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-hospital/plantao/', {
            params: {
                todayDuty: true,
                search: search,
                idHospital: hospitalId
            }
        }).then(response => setDuty(response.data));
    }, [search]);

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>
            <C.TableContainer>
                <C.TableContainerHeader>
                    <h3>Plantões do dia</h3>
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
                                    <Toggle.Absence> 
                                        Ausente 
                                    </Toggle.Absence>  
                                </C.Td>
                            </C.InnerTr>
                        )}
                    </C.Tbody>
                </C.Table>
            </C.TableContainer>
        </MenuBackground>
    )
}