import axios from "axios";
import { createContext, ReactNode, useState, useEffect } from "react";

export const AuthContext = createContext({});

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [users, setUsers] = useState<any>([]);
    const [hospitalUser, setHospitalUser] = useState<boolean>();
    const [adminUser, setAdminUser] = useState<boolean>();

    useEffect(() => {
        axios.get('http://localhost/buscaSusWeb/api/login/login-json.php').then((response) => {
            setUsers(response.data);
        });

        const HospitalToken = localStorage.getItem("hospital_token");
        const AdminToken = localStorage.getItem("admin_token");

        if (HospitalToken) {
            setHospitalUser(true);
        }

        if (AdminToken) {
            setAdminUser(true);
        }
    }, []);

    function signIn(userName: string, password: string, isGeneralAdminActivated: boolean) {
        const user = users.filter((user: any) => {
            return user.loginAdmin === userName && user.senhaAdmin === password && user.tipoAdmin == isGeneralAdminActivated
        })

        if (user.length) {

            if (userName == user[0].loginAdmin && password == user[0].senhaAdmin && isGeneralAdminActivated == user[0].tipoAdmin && !isGeneralAdminActivated) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("hospital_token", JSON.stringify({ token }));
                setHospitalUser(true);
                return;

            } else if (userName == user[0].loginAdmin && password == user[0].senhaAdmin && isGeneralAdminActivated == user[0].tipoAdmin && isGeneralAdminActivated) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("admin_token", JSON.stringify({ token }));
                setAdminUser(true);
                return;

            } else {
                return true;
            }

        } else {
            return true;
        }
    }

    function signOut() {
        setHospitalUser(false);
        setAdminUser(false);
        localStorage.removeItem("hospital_token");
        localStorage.removeItem("admin_token");
    }

    return (
        <AuthContext.Provider
            value={{ hospitalUser, adminUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}