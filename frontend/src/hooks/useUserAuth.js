import AutenticateContext from "../context/AutenticateContext"
import React,{useContext} from "react";

export const useUserInfo=()=>useContext(AutenticateContext);