import { NavLink } from "react-router-dom";
import './styles.css'

export function MenuLinksHospital() {
    return (
        <ul className="sidebar">
            <NavLink to="/visao-geral-hospital" className="sidebar-item">Visão Geral</NavLink>
            <NavLink to="/medicos" className="sidebar-item">Médicos</NavLink>
            <NavLink to="/especialidades" className="sidebar-item">Especialidades</NavLink>
            <NavLink to="/plantoes" className="sidebar-item">Plantões</NavLink>
        </ul>
    )
}