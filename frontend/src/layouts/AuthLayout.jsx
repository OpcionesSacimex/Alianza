import { Navigate, useNavigate, useOutlet } from "react-router"
import { useAuth } from "../hooks/useAuthToken"
import { useUserInfo } from "../hooks/useUserAuth";
import React from "react";
import { getUserData } from "../modules/acceso/handle/handleAcceso";
import { useMountEffect } from "primereact/hooks";
const AuthLaout = ()=>{
    const outlet =useOutlet()
    const { logout, auth, setAuth } = useAuth();
    const {userInfo,setUserInfo}= useUserInfo();
    const navigate=useNavigate();
    const getInfoUserLogged = async () => {
        if (auth.token !== false) {         
            const res = await getUserData()
            if(res.errror){
                logout()
            }else{
                const user = res[0]
                setUserInfo(user)
                if(user.rol_id===1){
                    navigate("/dashboard/clientes",{replace:true})
                }else if(user.rol_id===2){
                    navigate("/dashboard/asesores",{replace:true})
                }else if(user.rol_id===3){
                    navigate("/dashboard/admins",{replace:true})
                }
            }
        }

    }

    const closeSession = () => {
        //logoutUser()
        logout()
    }

    useMountEffect(() => {
        const asyncrona = async () => {
            await getInfoUserLogged()
        }
        asyncrona()
    })

    /*if (auth.token === false) {
        return <Navigate to="/home/login" />;
    }
    if (auth.token !== false) {
        return <Navigate to="/dashboard/clientes" />;
    }*/

}

export default AuthLaout