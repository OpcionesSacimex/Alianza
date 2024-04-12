import { Navigate, useNavigate, useOutlet } from "react-router";
import { useAuth } from "../../hooks/useAuthToken";
import { getUserData } from "../../modules/acceso/handle/handleAcceso";
import { useUserInfo } from "../../hooks/useUserAuth";
import { useMountEffect } from "primereact/hooks";
import { Toolbar } from "primereact/toolbar";
import { SideBarAS } from "./SideBarAs";
import { useState } from "react";
import { Button } from "primereact/button";
        
const AsesorLayout = () => {
    const outlet = useOutlet();
    const {auth,logout} = useAuth()
    const {userInfo,setUserInfo} = useUserInfo()

    const [visible,setVisible] =useState(false)

    const navigate=useNavigate();
    const getInfoUserLogged = async () => {
        if (auth.token !== false) {         
            const res = await getUserData()
            const user = res
            setUserInfo(user)
            if(res.error){
                closeSession()
            }else{
                if(user.rol.id!==2){
                    navigate("/dashboard",{replace:true})
                }
            }
        }

    }
    const start=()=>{
        return (
            <>
                <div>
                <Button onClick={() => setVisible(true)} />
                </div>
            </>
        )
    }
    const closeSession = () => {
        setUserInfo({})
        logout()
    }
    useMountEffect(() => {
        const asyncrona = async () => {
            await getInfoUserLogged()
        }
        asyncrona()
    })
    if (auth.token === false) {
        return <Navigate replace to="/" />
    } else {
        return (
            <>
                <div>
                <Toolbar className='bg-green-800 shadow-3 z-5 sticky top-0' style={{height:"4.6rem"}} start={start}/>
                    {outlet}
                    <SideBarAS visible={visible} setVisible={setVisible}></SideBarAS>
                </div>
            </>
        )
    }
}

export default AsesorLayout