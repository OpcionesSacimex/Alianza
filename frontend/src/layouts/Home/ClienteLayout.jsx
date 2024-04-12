import React, { useEffect } from "react"
import {useUserInfo} from "../../hooks/useUserAuth"
import { Navigate, useNavigate, useOutlet } from "react-router";
import { PanelCenter } from "../../globalsComponents/panels/PanelCenter";
import { Toolbar } from "primereact/toolbar";
import { URLStorage } from "../../utils/URLBackend";
import { PanelGrid } from "../../globalsComponents/panels/PanelGrid";
import { useAuth } from "../../hooks/useAuthToken";
import { useMountEffect } from "primereact/hooks";
import { getUserData } from "../../modules/acceso/handle/handleAcceso";

const ClienteLayout = ()=>{
    const outlet = useOutlet();
    const logo= `${URLStorage}/img/image.png`
    const {auth,logout} = useAuth()
    const {userInfo,setUserInfo} = useUserInfo()

    const navigate=useNavigate();
    const getInfoUserLogged = async () => {
        if (auth.token !== false) {         
            const res = await getUserData()
            const user = res
            setUserInfo(user)
            if(res.error){
                closeSession()
            }else{
                if(user.rol.id!==1){
                    navigate("/dashboard",{replace:true})
                }
            }
        }

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
    const start = ()=>{
        return (
            <>
            <div style={{width:"15rem"}}>
            <PanelGrid>
                <div className="col-12 md:col-2">
                    <a href="https://convenio.opcionessacimex.com">
                        <img className="sm:h-3rem h-1.5rem sm:w-15rem w-7rem" alt="logo" src={logo} ></img>
                    </a>
                </div>
            </PanelGrid>
            </div>
            </>
        )
    }
    const end =() => {
        return (
            <>
                <div className="">
                    <PanelCenter>
                    <div className="mt-0 sm:text-2xl text-sm text-center">
                        <label className="font-bold text-white font-italic"> Tu crédito de confianza. </label>
                    </div>
                    </PanelCenter>    
                </div>  
            </>      
        )
    }
    if(auth.token===false){
        return <Navigate replace to="/"/>
    }else{
        return (
            <div> 
                    <Toolbar className='bg-green-800 shadow-3 z-5 sticky top-0' style={{height:"6rem"}} start={start} end={end}/>
                    {outlet}
                </div>
        )
    }
    
}

export default ClienteLayout