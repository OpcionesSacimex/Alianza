import { Navigate, useNavigate, useOutlet } from "react-router";
import { URLStorage } from "../../utils/URLBackend";
import { useAuth } from "../../hooks/useAuthToken";
import { getUserData } from "../../modules/acceso/handle/handleAcceso";
import { useUserInfo } from "../../hooks/useUserAuth";
import { useMountEffect } from "primereact/hooks";

const AsesorLayout = () => {
    const outlet = useOutlet();
    const logo = `${URLStorage}/img/image.png`
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
                if(user.rol.id!==2){
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
    if (auth.token === false) {
        return <Navigate replace to="/" />
    } else {
        return (
            <>
                <div>
                    {outlet}
                </div>
            </>
        )
    }
}

export default AsesorLayout