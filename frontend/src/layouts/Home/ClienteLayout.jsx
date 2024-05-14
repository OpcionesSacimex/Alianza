import React, { useEffect, useRef } from "react"
import {useUserInfo} from "../../hooks/useUserAuth"
import { Navigate, useNavigate, useOutlet } from "react-router";
import { PanelCenter } from "../../globalsComponents/panels/PanelCenter";
import { Toolbar } from "primereact/toolbar";
import { URLStorage } from "../../utils/URLBackend";
import { PanelGrid } from "../../globalsComponents/panels/PanelGrid";
import { useAuth } from "../../hooks/useAuthToken";
import { useMountEffect, useUpdateEffect } from "primereact/hooks";
import { getUserData, logOutUser } from "../../modules/acceso/handle/handleAcceso";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useConvenio} from "../../hooks/useConvenio"
import { getConvenioCliente } from "../../modules/clientes/handle/handleCliente";
const ClienteLayout = ()=>{
    const outlet = useOutlet();
    const logo= `${URLStorage}/img/image.png`
    const {logout, auth} = useAuth()
    const {setUserInfo} = useUserInfo()
    const {setConvenio}= useConvenio()

    const navigate=useNavigate();
    const getInfoUserLogged = async () => {
        if (auth.token !== false) {
            const res = await getUserData()
            if(res.error){
                closeSession()
            }else{
                setUserInfo(res)
                const conve=await getConvenioCliente(res?.convenio)
                setConvenio(conve)
                if(res.rol.id!==1){
                    navigate("/dashboard",{replace:true})
                }
            }
        }else{
            setUserInfo({})
            setConvenio(undefined)
        }

    }

    const closeSession = async () => {
        await logOutUser()
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
                    <a href="#">
                        <img className="sm:h-3rem h-1.5rem sm:w-15rem w-7rem" alt="logo" src={logo} ></img>
                    </a>
                </div>
            </PanelGrid>
            </div>
            </>
        )
    }
    const center =() => {
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
    const end=()=>{
        return(
            <Button onClick={closeSession} className="bg-white text-red-600 shadow-0 hover:shadow-8">
                <FontAwesomeIcon icon="right-to-bracket" />
            </Button>
        )

    }
    if(auth.token===false){
        return <Navigate replace to="/"/>
    }else{
        return (
            <div> 
                <Toolbar className='bg-green-800 shadow-3 z-5 sticky top-0' style={{height:"6rem"}} start={start} center={center} end={end}/>
                {outlet}
            </div>
        )
    }
    
}

export default ClienteLayout