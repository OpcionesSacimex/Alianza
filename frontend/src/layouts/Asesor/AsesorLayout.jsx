import { Navigate, useNavigate, useOutlet } from "react-router";
import { useAuth } from "../../hooks/useAuthToken";
import { getUserData, logOutUser } from "../../modules/acceso/handle/handleAcceso";
import { useUserInfo } from "../../hooks/useUserAuth";
import { useMountEffect } from "primereact/hooks";
import { Toolbar } from "primereact/toolbar";
import { SideBarAS } from "./SideBarAs";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {TieredMenu} from "primereact/tieredmenu"
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
const AsesorLayout = () => {
    const outlet = useOutlet();
    const {auth,logout} = useAuth()
    const {userInfo,setUserInfo} = useUserInfo()
    const menu=useRef()
    const noti=useRef()

    const [visible,setVisible] =useState(false)

    const navigate=useNavigate();

    const closeSession = async () => {
        await logOutUser()
        setUserInfo({})
        logout()
    }

    const userMenu = [{
        label: "Cerrar session",
        command:closeSession
    }]

    const userNoti = [{
        label: "Solicitudes nuevas"
    },{
        label: "Solicitudes actualizadas"
    }]

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
                <div className="flex">
                <Button onClick={() => setVisible(true)}>
                    <FontAwesomeIcon icon="bars"/>
                </Button>
                </div>
            </>
        )
    }
    const end = ()=>{
        return (
            <div className="card flex justify-content-center">
                <TieredMenu model={userNoti} popup ref={noti} />
                <Button onClick={(e) => noti.current.toggle(e)} text>
                    <div className="p-overlay-badge p-1">
                    <FontAwesomeIcon icon="bell" className="text-white p-overlay-badge text-2xl">
                            
                    </FontAwesomeIcon>
                    <Badge className="bg-red-700 text-white" value="4" />
                    </div>
                </Button>
                <TieredMenu model={userMenu} popup ref={menu} breakpoint="767px" />
                <Button onClick={(e) => menu.current.toggle(e)} text>
                    <Avatar label="A" shape="circle"></Avatar>
                </Button>
                
            </div>
        )
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
                <Toolbar className='pt-1 bg-green-800 shadow-3 z-5 sticky top-0' style={{height:"4.6rem"}} start={start} end={end}/>
                    {outlet}
                    <SideBarAS visible={visible} setVisible={setVisible}></SideBarAS>
                </div>
            </>
        )
    }
}

export default AsesorLayout