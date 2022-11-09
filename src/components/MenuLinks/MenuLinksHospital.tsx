import { NavLink } from "react-router-dom";
import * as C from './styles';

export function MenuLinksHospital() {
    return (
        <C.SideBar>
            <NavLink to="/visao-geral-hospital" className="sidebar-item">Visão Geral</NavLink>
            <NavLink to="/medicos" className="sidebar-item">Médicos</NavLink>
            <NavLink to="/plantoes" className="sidebar-item">Plantões</NavLink>
        </C.SideBar>
    )
}