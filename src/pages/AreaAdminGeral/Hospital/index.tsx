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
                    <form autoComplete="off">
                        <input type="hidden" name="idHospital" />
                        <C.InputContainer>
                            <label htmlFor="nomeHospital">Nome do hospital:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="nomeHospital"
                                id="nomeHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="emailHospital">Endereço de e-mail do hospital:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="emailHospital"
                                id="emailHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <input hidden name="idTelefoneHospital" />

                            <label htmlFor="telefoneHospital">Número de telefone do hospital:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="numTelefoneHospital"
                                id="telefoneHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="aberturaHospital">Horário de abertura:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="time"
                                name="aberturaHospital"
                                id="aberturaHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="fechamentoHospital">Horário de fechamento:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="time"
                                name="fechamentoHospital"
                                id="fechamentoHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="cnpjHospital">CNPJ:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="cnpjHospital"
                                id="cnpjHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="cepHospital">CEP:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="cepHospital"
                                id="cepHospital"
                            />

                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="ufHospital">UF:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="ufHospital"
                                id="ufHospital"
                            />

                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="logradouroHospital">Logradouro:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="logradouroHospital"
                                id="logradouroHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="complementoHospital">Complemento:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="complementoHospital"
                                id="complementoHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="cidadeHospital">Cidade:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="cidadeHospital"
                                id="cidadeHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <label htmlFor="bairroHospital">Bairro:</label>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="text"
                                name="bairroHospital"
                                id="bairroHospital"
                            />
                        </C.InputContainer>
                        <C.InputContainer>
                            <Input.Input
                                isWithIcon={false}
                                errorText={false}
                                inputSize={sizes.sm}
                                type="file"
                                accept=".jpg, .png"
                                name="fotoHospital"
                                id="fotoHospital" />
                        </C.InputContainer>

                        <C.ButtonContainer>
                            <Button.Gray value="Cancelar" type="reset" />
                            <Button.Green value="Salvar" type="submit" />
                        </C.ButtonContainer>
                    </form>
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