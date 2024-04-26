import {URLBackend} from "../../../utils/URLBackend"
import { getAllNotTokenQuery, getAllRegisters} from "../../../utils/request/getRequest"
import {postNotTokenJson, postTokenJson,} from "../../../utils/request/postRequest"

const createUserURL = `${URLBackend}/usuario/createUser`
const userLoginURL = `${URLBackend}/usuario/login`
const getUserURL = `${URLBackend}/usuario/user`
const validarteCorreoURL =`${URLBackend}/usuario/email_verify`
const validarteConvenioURL =`${URLBackend}/convenios/existe`
const logOutUserURL =`${URLBackend}/usuario/logout`

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

export const getConvenioExistente = async(data)=>{
    return await getAllNotTokenQuery(validarteConvenioURL,[["convenio",data]])
}