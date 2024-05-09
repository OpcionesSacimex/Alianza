import { useMountEffect, useUpdateEffect } from "primereact/hooks"
import { useEffect, useState } from "react"
import { useLoaderData, useNavigate } from "react-router"
import { validateUsuario } from "../handle/handleAcceso"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"




export const ValidateUser = () => {
    const data = window.location.pathname.split("/")
    const validateKEY = data[data.length - 1]
    const [validate, setValidate] = useState(false)
    const [loading, setLoading] = useState(true)
    const [count,setCount] = useState(7);
    const navigate=useNavigate()

    const getAndSetValidate = async () => {
        const res = await validateUsuario(validateKEY)
        setValidate(res.valido)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count-1)
        },1000)
        if(count ===0){
            navigate("/",{replace:true})
        }
    })

    useMountEffect(() => {

        const validar = async () => {
            setLoading(true)
            await getAndSetValidate()
            setLoading(false)
        }
        validar()
    })
    return (
        <>
            {
                loading ? <>
                    <div className="h-5rem">
                        <PanelCenter>
                            <FontAwesomeIcon icon="fa-solid fa-spinner" spin className="h-5rem" />
                        </PanelCenter>

                    </div>

                </> : <>
                    {
                        validate ? <>
                            <PanelCenter>
                                <label className="text-green-800 text-2xl">La validacion fue exitosa</label>
                            </PanelCenter>
                        </> : <>
                            <PanelCenter>
                                <label className="text-red-800 text-2xl">No valido</label>
                            </PanelCenter>
                        </>
                    }
                    <PanelCenter>
                        <FontAwesomeIcon icon="fa-solid fa-spinner" spin className="h-5rem text-green-800" />
                        <label className="text-2xl">Redireccion en {count}</label>
                    </PanelCenter>
                    
                </>}
        </>
    )
}