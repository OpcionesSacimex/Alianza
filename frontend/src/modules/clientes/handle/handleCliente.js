import {URLBackend} from "../../../utils/URLBackend"
import {postTokenJson} from "../../../utils/request/postRequest"

const createClienteURL = `${URLBackend}/persona/cliente`

const createPersona=async(data)=>{
    return await postTokenJson(createClienteURL,data)
}