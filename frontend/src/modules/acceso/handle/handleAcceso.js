import {URLBackend} from "../../../utils/URLBackend"
import { getAllNotTokenQuery, getAllRegisters} from "../../../utils/request/getRequest"
import {postNotTokenJson, postTokenJson,} from "../../../utils/request/postRequest"

const createUserURL = `${URLBackend}/usuario/createUser`
const userLoginURL = `${URLBackend}/usuario/login`
const getUserURL = `${URLBackend}/usuario/user`
const validarteCorreoURL =`${URLBackend}/usuario/email_verify`
const validarteNumeroURL =`${URLBackend}/usuario/numero_verify`
const validarteConvenioURL =`${URLBackend}/convenios/existe`
const logOutUserURL =`${URLBackend}/usuario/logout`
const passwordResetURL =`${URLBackend}/usuario/reset`

export const createUser = async(data)=>{
    return await postNotTokenJson(createUserURL,data)
}
export const loginUser = async(data)=>{
    return await postNotTokenJson(userLoginURL,data)
}

export const logOutUser= async()=>{
    return await postTokenJson(logOutUserURL,{})
}

export const getUserData = async()=>{
    return await getAllRegisters(getUserURL)
}
export const getCorreoExistente = async(data)=>{
    return await postNotTokenJson(validarteCorreoURL,data)
}

export const getNumeroExistente = async(data)=>{
    return await postNotTokenJson(validarteNumeroURL,data)
}

export const getConvenioExistente = async(data)=>{
    return await getAllNotTokenQuery(validarteConvenioURL,[["convenio",data]])
}

export const validateUsuario = async(data)=>{
    const rand = Boolean(Math.round(Math.random()));
    return {valido:rand}
}

export const validateResetPassowrd = async (data)=>{
    const rand = Boolean(Math.round(Math.random()));
    return {valido:rand}
}
export const resetPasswordUser = async (data)=>{
    return await postNotTokenJson(passwordResetURL,data)
}