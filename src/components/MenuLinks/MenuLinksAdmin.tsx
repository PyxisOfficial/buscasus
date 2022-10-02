import { NavLink } from "react-router-dom";
import './styles.css';

export function MenuLinksAdmin() {
    return (
        <ul className="sidebar">
            <NavLink to="/visao-geral-admin" className="sidebar-item">Visão Geral</NavLink>
            <NavLink to="/hospitais" className="sidebar-item">Hospitais</NavLink>
            <NavLink to="/usuarios" className="sidebar-item">Usuários</NavLink>
        </ul>
    )
}