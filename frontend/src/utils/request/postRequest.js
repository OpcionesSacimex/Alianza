import axios from "axios";
import { refreshToken } from "./refreshToken";

export const postNotTokenMultipart = async (URL, data) => {
    try {
        const res = await axios.post(URL, data,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
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
export const postTokenJsonMultipar = async (URL,data) => {
    try {
        const resToken = await refreshToken()
        const { token } = await resToken
        const res = await axios.post(URL, data,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
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
export const postNotTokenJson = async (URL, data) => {
    try {
        const res = await axios.post(URL, data,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": 'application/json',
                },
            })
        if (res.error) {
            return res;
        } else {
            return res.data;
        }
        
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}

export const postTokenJson = async (URL,data) => {
    try {
        const resToken = await refreshToken()
        const { token } = resToken
        const res = await axios.post(URL, data,
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
        console.log(error)
        return { error: error.message }
    }
}