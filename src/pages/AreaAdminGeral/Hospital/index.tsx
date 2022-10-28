import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { MagnifyingGlass, Trash, Pencil, Info } from 'phosphor-react';

import * as C from './styles';

export function Hospital() {
    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>
            <C.Container>
                <C.FormContainer>
                    <C.Title>Cadastrar um novo hospital</C.Title>
                    <C.Form autoComplete="off">
                        <input type="hidden" name="idHospital" />

                            <C.Label htmlFor="nomeHospital">
                                Nome do hospital
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xl}
                                    type="text"
                                    name="nomeHospital"
                                    id="nomeHospital"
                                />
                            </C.Label>
                            <C.Label htmlFor="emailHospital">
                                Endereço de e-mail do hospital
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xl}
                                    type="text"
                                    name="emailHospital"
                                    id="emailHospital"
                                />
                            </C.Label>

                            <input hidden name="idTelefoneHospital" />

                            <C.Label htmlFor="telefoneHospital">
                                Número de telefone do hospital
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    type="text"
                                    name="numTelefoneHospital"
                                    id="telefoneHospital"
                                />
                            </C.Label>

                            <C.InputContainer>
                            <C.Label htmlFor="aberturaHospital">
                                Horário de abertura
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    name="aberturaHospital"
                                    id="aberturaHospital"
                                />
                            </C.Label>

                            <C.Label htmlFor="fechamentoHospital">
                                Horário de fechamento
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.xs}
                                    type="time"
                                    name="fechamentoHospital"
                                    id="fechamentoHospital"
                                />
                            </C.Label>
                            </C.InputContainer>

                            <C.InputContainer>
                                <C.Label htmlFor="cnpjHospital">
                                    CNPJ
                                    <Input.Input
                                        isWithIcon={false}
                                        errorText={false}
                                        inputSize={sizes.sm}
                                        type="text"
                                        name="cnpjHospital"
                                        id="cnpjHospital"
                                    />
                                </C.Label>

                                <C.Label htmlFor="cepHospital">
                                    CEP
                                    <Input.Input
                                        isWithIcon={false}
                                        errorText={false}
                                        inputSize={sizes.xs}
                                        type="text"
                                        name="cepHospital"
                                        id="cepHospital"
                                    />
                                </C.Label>


                                <C.Label htmlFor="ufHospital">
                                    UF
                                    <Input.Input
                                        isWithIcon={false}
                                        errorText={false}
                                        inputSize={sizes.xxs}
                                        type="text"
                                        name="ufHospital"
                                        id="ufHospital"
                                    />
                                </C.Label>
                            </C.InputContainer>


                            <C.Label htmlFor="logradouroHospital">
                                Logradouro
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.md}
                                    type="text"
                                    name="logradouroHospital"
                                    id="logradouroHospital"
                                />
                            </C.Label>

 
                            <C.Label htmlFor="cidadeHospital">
                                Cidade
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.md}
                                    type="text"
                                    name="cidadeHospital"
                                    id="cidadeHospital"
                                />
                            </C.Label>

                            <C.Label htmlFor="bairroHospital">
                                Bairro
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.md}
                                    type="text"
                                    name="bairroHospital"
                                    id="bairroHospital"
                                />
                            </C.Label>
                            
                            <C.Label htmlFor="complementoHospital">
                                Complemento
                                <Input.Input
                                    isWithIcon={false}
                                    errorText={false}
                                    inputSize={sizes.md}
                                    type="text"
                                    name="complementoHospital"
                                    id="complementoHospital"
                                />
                            </C.Label>

                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.xl}
                                type="file"
                                accept=".jpg, .png"
                                name="fotoHospital"
                                id="fotoHospital"
                            />
                        <C.ButtonContainer>
                            <Button.Gray value="Cancelar" type="reset" />
                            <Button.Green value="Salvar" type="submit" />
                        </C.ButtonContainer>
                    </C.Form>
                </C.FormContainer>
                <C.TableContainer>
                    <C.TableContainerHeader>
                        <h3>Hospitais cadastrados</h3>
                        <C.InputsContainer>
                            <Input.Root>
                                <Input.Input
                                    isWithIcon
                                    errorText={false}
                                    inputSize={sizes.sm}
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
                                <C.Th>Id</C.Th>
                                <C.Th>Nome do hospital</C.Th>
                                <C.Th></C.Th>
                            </C.Tr>
                        </C.Thead>
                        <C.Tbody>
                            <C.Tr>
                                <td>1</td>
                                <td>Hospital Geral de Guaianazes</td>
                                <td>
                                    <C.ButtonContainer>
                                        <Button.Edit>
                                            <Info size={24} />
                                        </Button.Edit>
                                        <Button.Delete>
                                            <Trash size={24} />
                                        </Button.Delete>
                                        <Button.Edit>
                                            <Pencil size={24} />
                                        </Button.Edit>
                                    </C.ButtonContainer>
                                </td>
                            </C.Tr>
                        </C.Tbody>
                    </C.Table>
                </C.TableContainer>
            </C.Container>
        </MenuBackground>
    )
}