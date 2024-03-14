import React from "react"
import {PanelGrid} from "./../../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../../globalsComponents/panels/PanelCenter"
import {Card} from "primereact/card"
import {InputText} from "primereact/inputtext"
import {InputNumber} from "primereact/inputnumber"
import {Password} from "primereact/password"
import {Button} from "primereact/button"
import { useNavigate } from "react-router"
const Login=()=>{
    const navigate = useNavigate()

    const onRegister =(e)=>{
        navigate("/register",{replace:true})
    }
    const onKnowPass =(e)=>{
        
    }

    
    return (
        <>
            <div className="mt-5 mb-6">
            <PanelCenter>
                <Card className="bg-gray-200 ml-6 mr-6 w-30rem">
                    <form>
                        <PanelCenter>
                        <label className="text-2xl text-green-800 font-bold">Te damos la bienvenida a Sacimex</label>
                        </PanelCenter>
                        
                        <PanelGrid className="mt-5">
                        <div className="col-12 mb-4">
                            <span className="p-float-label">
                                <InputText name="correo" placeholder="ejemplo@ejemplo.com"/>
                                <label htmlFor="correo" className="text-xl">Correo electrónico</label>
                            </span>
                            
                        </div>
                        <div className="col-12 mb-4">
                            <span className="p-float-label">
                                <Password name="pass" placeholder="Contraseña" toggleMask />
                                <label htmlFor="pass" className="text-xl">Contraseña</label>
                            </span>
                            
                        </div>
                        <div className="col-12 mb-4">
                            <span className="p-float-label">
                                <InputNumber placeholder="Convenio" useGrouping={false} />
                                <label htmlFor="pass" className="text-xl mb-4">Convenio</label>
                            </span>
                        </div>
                        <div className="col-12">
                            <PanelCenter className="mb-2">
                            <Button className="mb-2" label="Ingresar" severity="success" rounded />
                            <div className="mb-2">
                                ¿No tienes una cuenta?
                            </div>
                            <Button type="button" onClick={onRegister} label="Regístrate" link />
                            <div className="mb-2">
                                ¿Olvidaste tu contraseña?
                            </div>
                            <Button type="button" onClick={onKnowPass} label="Restablacer contraseña" link />
                            </PanelCenter>
                        </div>
                        </PanelGrid>
                        
                    </form>
                </Card>
            </PanelCenter>
            </div>
            
        </>
    )
}
export default Login