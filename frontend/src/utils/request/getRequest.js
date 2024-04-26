import axios from 'axios';
import { URLBackend } from "../URLBackend"
import { refreshToken } from './refreshToken';

const refreshTokenURL = URLBackend + "/usuarios/REFRESH"

export const getRefreshToken = async () => {
    try {
        const resToken = await axios.get(refreshTokenURL,
            {
                withCredentials: true,
            })

        const { token } = await resToken.data
        return token
    } catch (error) {
        return { error: error.message }
    }
}
export const getAllRegisters = async (URL) => {
    try {
        const resToken = await refreshToken()
        const { token,error } =  resToken
        if(error){
            return {error}
        }
        const res = await axios.get(URL,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token,
                },
            })
        if (res.error) {
            return res;
        } else {
            return res.data;
        }
    } catch (error) {
        return { error: error.message }
    }
}
export const getAllNotTokenRegisters = async (URL) => {
    try {
        const res = await axios.get(URL,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        if (res.error) {
            return res;
        } else {
            return res.data;
        }
    } catch (error) {
        return { error: error.message }
    }
}

export const checkTokenSession = async () => {
    try {
        const resToken = await axios.get(refreshTokenURL,
            {
                withCredentials: true,
            })

        return await resToken.data
    } catch (error) {
        return { error: error.message }
    }
}
export const getAllRegistersByKeyValueQuery = async (URL, query) => {

    let consulta =`${URL}?`
    for(let i=0;i<query.length;i++){
        if(query[i].length<2){
            return {error:"Consulta Erronea"}
        }else if(i===0){
            consulta=consulta+`${query[i][0]}=${query[i][1]}`
        }else{
            consulta=consulta+`&${query[i][0]}=${query[i][1]}`
        }
    }
    return getAllRegisters(consulta)
}
export const getAllNotTokenQuery = async (URL, query) => {

    let consulta =`${URL}?`
    for(let i=0;i<query.length;i++){
        if(query[i].length<2){
            return {error:"Consulta Erronea"}
        }else if(i===0){
            consulta=consulta+`${query[i][0]}=${query[i][1]}`
        }else{
            consulta=consulta+`&${query[i][0]}=${query[i][1]}`
        }
    }
    return getAllNotTokenRegisters(consulta)
}