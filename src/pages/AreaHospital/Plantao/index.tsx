import { useState } from 'react';

import { DutyCalendar } from '../../../components/Calendar';
import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Input, sizes } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Button } from '../../../components/Button';
import { Label } from '../../../components/Label';

import { MagnifyingGlass, Trash, Pencil } from 'phosphor-react';

import * as C from './styles';

import { Value } from 'react-multi-date-picker';

export function Plantao() {
    const [dates, setDates] = useState<Value>();

    return (
        <MenuBackground menuLinks={<MenuLinksHospital />}>
            <C.Container>
                <C.FormContainer>
                    <h3>Cadastrar um novo plantão</h3>
                    <C.Form autoComplete="off">
                        <input hidden id="idPlantao" name="idPlantao" />
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
                            <Select.Root
                                onValueChange={null}
                                errorText={false}
                                selectSize={sizes.xl}
                            >
                                <Select.Item
                                    id={1}
                                    value="1"
                                    title="Dorivaldo Benegripe"
                                />
                            </Select.Root>
                        </Label>
                        <input type="hidden" name="idHospital" />

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
                            <Button.Green value="Download" type="button" />
                        </C.InputsContainer>
                    </C.TableContainerHeader>
                    <C.Table>
                        <C.Thead>
                            <C.Tr>
                                <C.Th>Tipo do Plantão</C.Th>
                                <C.Th>Início</C.Th>
                                <C.Th>Fim</C.Th>
                                <C.Th>Médico</C.Th>
                                <C.Th></C.Th>
                            </C.Tr>
                        </C.Thead>
                        <C.Tbody>
                            <C.InnerTr>
                                <C.Td>Tipo do plantão</C.Td>
                                <C.Td>Início</C.Td>
                                <C.Td>Fim</C.Td>
                                <C.Td>Médico</C.Td>
                                <C.Td>
                                    <C.ButtonContainer>
                                        <Button.Delete>
                                            <Trash size={24} />
                                        </Button.Delete>
                                        <Button.Edit>
                                            <Pencil size={24} />
                                        </Button.Edit>
                                    </C.ButtonContainer>
                                </C.Td>
                            </C.InnerTr>
                        </C.Tbody>
                    </C.Table>
                </C.TableContainer>
            </C.Container>
        </MenuBackground>
    )
}