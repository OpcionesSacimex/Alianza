import {URLBackend} from "../../../utils/URLBackend"
import { getAllNotTokenQuery } from "../../../utils/request/getRequest"
import {postTokenJson} from "../../../utils/request/postRequest"

const createClienteURL = `${URLBackend}/cliente/createCliente`
const createPersonaClienteURL = `${URLBackend}/persona/updateUser`
const getConvenioClienteURL = `${URLBackend}/convenios/data`

export const createCliente=async(data)=>{
    return await postTokenJson(createClienteURL,data)
}

export const crearPersonaCliente= async(data)=>{
    return await postTokenJson(createPersonaClienteURL,data)
}

export const getConvenioCliente=async(data)=>{
    return getAllNotTokenQuery(getConvenioClienteURL,[["convenio",data]])
}