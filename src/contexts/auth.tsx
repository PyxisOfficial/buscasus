import { createContext, useState } from "react";

export const AuthContext = createContext({});

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [hospitalUser, setHospitalUser] = useState<any>();
    const [adminUser, setAdminUser] = useState<any>();
    const [hospitalName, setHospitalName] = useState<any>();

    function signIn(userName: string, password: string, isGeneralAdmin: boolean) {
        const usersStorage: any = localStorage.getItem("users_db");
        const user = JSON.parse(usersStorage);

        if (user[0] === userName && user[1] === password && user[2] === isGeneralAdmin && !isGeneralAdmin) {
            const token = Math.random().toString(36).substring(2);

            localStorage.setItem("user_token", JSON.stringify({ token }));
            setHospitalUser({ userName, password });
            setHospitalName(user[3]);
            return;

        } else if (user[0] === userName && user[1] === password && user[2] === isGeneralAdmin && isGeneralAdmin) {
            const token = Math.random().toString(36).substring(2);

            localStorage.setItem("user_token", JSON.stringify({ token }));
            setAdminUser({ userName, password });
            return;
            
        } else {
            return "E-mail ou senha incorretos!";
        }
    }

    function signOut() {
        setHospitalUser(null);
        setAdminUser(null);
        setHospitalName(null)
        localStorage.removeItem("user_token");
    }

    return (
        <AuthContext.Provider
            value={{ hospitalUser, adminUser, hospitalName, signedHospital: !!hospitalUser, signedAdmin: !!adminUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}