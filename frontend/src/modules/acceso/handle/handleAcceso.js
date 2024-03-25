import {URLBackend} from "../../../utils/URLBackend"
import { getAllRegisters } from "../../../utils/request/getRequest"
import {postNotTokenJson,} from "../../../utils/request/postRequest"

const createUserURL = `${URLBackend}/usuario/createUser`
const userLoginURL = `${URLBackend}/usuario/login`
const getUserURL = `${URLBackend}/usuario/user`

export const createUser = async(data)=>{
    return await postNotTokenJson(createUserURL,data)
}
export const loginUser = async(data)=>{
    return await postNotTokenJson(userLoginURL,data)
}

export const getUserData = async()=>{
    return await getAllRegisters(getUserURL)
}