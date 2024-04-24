import { useNavigate, useOutlet } from "react-router"
import { useAuth } from "../hooks/useAuthToken"
import { useUserInfo } from "../hooks/useUserAuth";
import { getUserData } from "../modules/acceso/handle/handleAcceso";
import { useMountEffect } from "primereact/hooks";
const AuthLaout = ()=>{
    const { logout, auth, setAuth } = useAuth();
    const {userInfo,setUserInfo}= useUserInfo();
    const navigate=useNavigate();
    const getInfoUserLogged = async () => {
        if (auth.token !== false) {
            const res = await getUserData()
            if(res.error){
                closeSession()
            }else{
                const user = res
                setUserInfo(user)
                switch(user.rol.id){
                    case 1: navigate("/dashboard/clientes",{replace:true});
                    break;
                    case 2: navigate("/dashboard/asesores",{replace:true})
                    break;
                    case 3: navigate("/dashboard/admins",{replace:true})
                    break;
                    default: closeSession()
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
}

export default AuthLaout