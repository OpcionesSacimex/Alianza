import {useContext} from "react";
import {TokenProvider} from "../context/TokenProvider"
export const useAuth = () => {
    return useContext(TokenProvider);
}
