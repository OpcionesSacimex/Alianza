import axios from "axios"
import { URLBackend } from "../URLBackend"

const refreshTokenURL = URLBackend + "/usuarios/REFRESH"
export const deleteByParamToken = async (URL, id) => {

    try {

        const resToken = await axios.get(refreshTokenURL,
            {
                withCredentials: true,
            })

        const { token } = await resToken.data

        const res = await axios.delete(URL + id,
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
