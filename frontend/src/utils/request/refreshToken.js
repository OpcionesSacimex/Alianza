import axios from "axios";
import { URLBackend } from "../URLBackend"
const refreshTokenURL = URLBackend + "/usuario/refresh"

export const refreshToken =async ()=>{
    try{
        const {token} = JSON.parse(window.localStorage.getItem("auth"))
        const resToken = await axios.post(refreshTokenURL,{},
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token,
        }
        })
        window.localStorage.setItem("auth",JSON.stringify(resToken.data))
        return resToken.data
    }catch(error){
        window.localStorage.setItem("auth",JSON.stringify({
            token:false
        }))
        return {error:{
            status:error.response.status,
            message:error.response.data.message,
            statusText:error.response.statusText
        }}
        
    }
    
}
