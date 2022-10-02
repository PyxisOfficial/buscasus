import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginHospital } from './AreaLogin/LoginHospital';
import { LoginAdmin } from './AreaLogin/LoginAdmin';
import { VisaoGeralHospital } from './AreaHospital/VisaoGeral';
import { Medico } from './AreaHospital/Medico';
import { Especialidade } from './AreaHospital/Especialidade';
import { Plantao } from './AreaHospital/Plantao';
import { VisaoGeralAdmin } from './AreaAdminGeral/VisaoGeral';
import { Hospital } from './AreaAdminGeral/Hospital';
import { Usuario } from './AreaAdminGeral/Usuario';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginHospital />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route path="/visao-geral-hospital" element={<VisaoGeralHospital />} />
                <Route path="/medicos" element={<Medico />} />
                <Route path="/especialidades" element={<Especialidade />} />
                <Route path="/plantoes" element={<Plantao />} />
                <Route path="/visao-geral-admin" element={<VisaoGeralAdmin />} />
                <Route path="/hospitais" element={<Hospital />} />
                <Route path="/usuarios" element={<Usuario />} />
            </Routes>
        </Router>
    )
}