import { createContext, ReactNode, useState, useEffect } from "react";

export const AuthContext = createContext({});

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [hospitalUser, setHospitalUser] = useState<boolean>();
    const [adminUser, setAdminUser] = useState<boolean>();

    useEffect(() => {
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
        const usersStorage: any = localStorage.getItem("users_db");
        const user = JSON.parse(usersStorage);

        if (user[0] === userName && user[1] === password && user[2] === isGeneralAdminActivated && !isGeneralAdminActivated) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("hospital_token", JSON.stringify({ token }));
            setHospitalUser(true);
            return;

        } else if (user[0] === userName && user[1] === password && user[2] === isGeneralAdminActivated && isGeneralAdminActivated) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("admin_token", JSON.stringify({ token }));
            setAdminUser(true);
            return;

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