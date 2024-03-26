import { Navigate, useOutlet } from "react-router"
import { useAuth } from "../hooks/useAuthToken"
import { useUserInfo } from "../hooks/useUserAuth";
import React,{useEffect} from "react";
const AuthLaout = ()=>{
    const outlet =useOutlet()
    const { logout, auth, setAuth } = useAuth();
    //const {infoInfo,setUserInfo} = useUserInfo()
    const getInfoUserLogged = async () => {
        if (auth.token !== false) {
            /*const res = infoInfo

            if (res.error) {
                setDisplayErrorAlert(true)
            }
            
            setUserInfo(res.data)
            let _auth = {...auth}
            _auth.id = res?.data?.id
            setAuth(_auth)*/
        } else {
            //setUserInfo({ token: false })
        }

    }

    const closeSession = () => {
        //logoutUser()
        logout()
        //logoutUserWithoutToken(auth.id)
    }

    useEffect(() => {
        const asyncrona = async () => {
            await getInfoUserLogged()
        }
        asyncrona()
    }, [])


    if (auth.token === false) {
        return <Navigate to="/home/login" />;
    }
    if (auth.token !== false) {
        return <Navigate to="/dashboard/clientes" />;
    }

}

export default AuthLaout