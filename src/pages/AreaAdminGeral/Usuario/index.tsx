import { useEffect, useState } from 'react';
import axios from 'axios';

import { MenuBackground } from '../../../components/Menu';
import { MenuLinksAdmin } from '../../../components/MenuLinks/MenuLinksAdmin';
import { Input, sizes } from '../../../components/Form/Input';
import { Button } from '../../../components/Button';

import { MagnifyingGlass } from 'phosphor-react';

import * as C from './styles';

export function Usuario() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState<string>();

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-usuario/usuario/').then(response => setUsers(response.data));
    }, []);

    useEffect(() => {
        axios.get('http://localhost/buscasus/api/area-usuario/usuario/', {
            params: {
                search: search
            }
        }).then(response => setUsers(response.data));
    }, [search]);

    return (
        <MenuBackground menuLinks={<MenuLinksAdmin />}>
            <C.TableContainer>
                <C.TableContainerHeader>
                    <h3>Usuários cadastrados</h3>
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
                            <C.Th>Nome do usuário</C.Th>
                            <C.Th>Email do usuário</C.Th>
                            <C.Th>CPF do usuário</C.Th>
                        </C.Tr>
                    </C.Thead>
                    <C.Tbody>
                        {users.map((user: any, key) =>
                            <C.InnerTr key={key}>
                                <C.Td>{user.nomeUsuario}</C.Td>
                                <C.Td>{user.emailUsuario}</C.Td>
                                <C.Td>{user.cpfUsuario}</C.Td>
                            </C.InnerTr>
                        )}
                    </C.Tbody>
                </C.Table>
            </C.TableContainer>
        </MenuBackground>
    )
}