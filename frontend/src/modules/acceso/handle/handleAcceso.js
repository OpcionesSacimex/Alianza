import {URLBackend} from "../../../utils/URLBackend"
import {postNotTokenJson} from "../../../utils/request/postRequest"
const createUserURL = `${URLBackend}/usuario/createUser`

export const createUser = async(data)=>{
    return await postNotTokenJson(createUserURL,data)
}