import axios from "axios";
import { URLBackend } from "../URLBackend"
const refreshTokenURL = URLBackend + "/usuario/refresh"

export const refreshToken =async ()=>{
    const {token} = JSON.parse(window.localStorage.getItem("auth"))
    const resToken = await axios.post(refreshTokenURL,{},
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token,
            }
        })
    window.localStorage.setItem("auth",resToken.data)
    return resToken.data
}
