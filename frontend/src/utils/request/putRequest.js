import axios from "axios"
import { URLBackend } from "../URLBackend"

const refreshTokenURL = URLBackend + "/usuarios/REFRESH"

export const putByParamAndData = async (URL, id, data) => {

    try {
        const resToken = await axios.get(refreshTokenURL,
            {
                withCredentials: true,
            })

        const { token } = resToken.data


        const res = await axios.put(URL + id, data,
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

export const putWithData = async (URL, data) => {

    try {

        
        const resToken = await axios.get(refreshTokenURL,
            {
                withCredentials: true,
            })

        const { token } = resToken.data

        const res = await axios.put(URL, data,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token,
                },
            })

        return res
    } catch (error) {
       
        return { error: error.message }
    }
}

export const putByParam = async (URL, id,) => {

    try {
        const resToken = await axios.get(refreshTokenURL,
            {
                withCredentials: true,
            })

        const { token } =  resToken.data
           

        const res = await axios.put(URL + id, {},
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token,
                },
            })

        return res
    } catch (error) {
       
        return { error: error.message }
    }
}

export const putByParamAndDataImagen = async (URL, id, data) => {

    try {
        const resToken = await axios.get(refreshTokenURL,
            {
                withCredentials: true,
            })

        const { token } = resToken.data

        const res = await axios.put(URL + id, data,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: "Bearer " + token,
                },
            })

        return res
    } catch (error) {
       
        return { error: error.message }
    }
}

