import { useNavigate, useOutlet } from "react-router"
import { useAuth } from "../hooks/useAuthToken"
import { useUserInfo } from "../hooks/useUserAuth";
import { getUserData, logOutUser } from "../modules/acceso/handle/handleAcceso";
import { useUpdateEffect } from "primereact/hooks";

const AuthLaout = ()=>{
    const { logout, auth} = useAuth();
    const {userInfo,setUserInfo}= useUserInfo();
    const navigate=useNavigate();
    const getInfoUserLogged = async () => {
        if (auth.token !== false) {
            let uinf = {...userInfo}
            if(!userInfo.id){
                const res = await getUserData()
                uinf = res
                await setUserInfo(uinf)
            }
            
            if(!uinf.id){
                closeSession()
            }else{
                switch(uinf.rol.id){
                    case 1: navegar("/dashboard/clientes");
                    break;
                    case 2: navegar("/dashboard/asesores")
                    break;
                    case 3: navegar("/dashboard/admins")
                    break;
                    default: await closeSession()
                }
            }
        }

    }
    const navegar = (link)=>{
        navigate(link,{replace:false})
    }

    const closeSession = async() => {
        await logOutUser()
        setUserInfo({})
        logout()
    }

    useUpdateEffect(() => {
        const asyncrona = async () => {
            await getInfoUserLogged()
        }
        asyncrona()
    },)
}

export default AuthLaout