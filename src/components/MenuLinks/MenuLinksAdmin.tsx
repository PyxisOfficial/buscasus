import { NavLink } from "react-router-dom";
import * as C from './styles';

export function MenuLinksAdmin() {
    return (
        <C.SideBar>
            <NavLink to="/visao-geral-admin" className="sidebar-item">Visão Geral</NavLink>
            <NavLink to="/hospitais" className="sidebar-item">Hospitais</NavLink>
            <NavLink to="/usuarios" className="sidebar-item">Usuários</NavLink>
            <NavLink to="/tipo-plantao" className="sidebar-item">Tipos de Plantões</NavLink>
        </C.SideBar>
    )
}