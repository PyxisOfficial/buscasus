import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function UseAuth() {
    const context = useContext(AuthContext);
    return context;
}