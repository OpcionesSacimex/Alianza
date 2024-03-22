import {useContext} from "react";
import TokenContext from "../context/TokenProvider"
export const useAuth = () => {
    return useContext(TokenContext);
}
