import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginHospital } from './pages/AreaLogin/LoginHospital';
import { LoginAdmin } from './pages/AreaLogin/LoginAdmin';
import { VisaoGeralHospital } from './pages/AreaHospital/VisaoGeral';
import { Medico } from './pages/AreaHospital/Medico';
import { Especialidade } from './pages/AreaHospital/Especialidade';
import { Plantao } from './pages/AreaHospital/Plantao';
import { VisaoGeralAdmin } from './pages/AreaAdminGeral/VisaoGeral';
import { Hospital } from './pages/AreaAdminGeral/Hospital';
import { Usuario } from './pages/AreaAdminGeral/Usuario';

import UseAuth from './hooks/useAuth';

function PrivateHospital({ Item }: any) {
    const { signedHospital }: any = UseAuth();
    return signedHospital ? <Item /> : <LoginHospital />;
}

function PrivateAdmin({ Item }: any) {
    const { signedAdmin }: any = UseAuth();
    return signedAdmin ? <Item /> : <LoginAdmin />;
}

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<LoginHospital />} />
                <Route path="/" element={<LoginHospital />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route path="/visao-geral-hospital" element={<PrivateHospital Item={VisaoGeralHospital} />} />
                <Route path="/medicos" element={<PrivateHospital Item={Medico} />} />
                <Route path="/especialidades" element={<PrivateHospital Item={Especialidade} />} />
                <Route path="/plantoes" element={<PrivateHospital Item={Plantao} />} />
                <Route path="/visao-geral-admin" element={<PrivateAdmin Item={VisaoGeralAdmin} />} />
                <Route path="/hospitais" element={<PrivateAdmin Item={Hospital} />} />
                <Route path="/usuarios" element={<PrivateAdmin Item={Usuario} />} />
            </Routes>
        </Router>
    )
}