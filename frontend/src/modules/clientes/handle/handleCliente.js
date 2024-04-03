import {URLBackend} from "../../../utils/URLBackend"
import {postTokenJson} from "../../../utils/request/postRequest"

const createClienteURL = `${URLBackend}/cliente/createCliente`


export const createCliente=async(data)=>{
    return await postTokenJson(createClienteURL,data)
}