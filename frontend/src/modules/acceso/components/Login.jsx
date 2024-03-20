import React,{useRef, useState} from "react"
import {PanelGrid} from "./../../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../../globalsComponents/panels/PanelCenter"
import {Card} from "primereact/card"
import {InputText} from "primereact/inputtext"
import {InputNumber} from "primereact/inputnumber"
import {Password} from "primereact/password"
import {Button} from "primereact/button"
import { useNavigate } from "react-router"
import { OverlayPanel } from 'primereact/overlaypanel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContentDialog } from "../../../globalsComponents/dialog/ContentDialog"
import { PasswordResetEmail } from "./PasswordResetEmail"
const Login=()=>{
    const navigate = useNavigate()
    const ov = useRef(null)
    const [visible,setVisible]=useState(false)

    const onRegister =(e)=>{
        navigate("/register",{replace:true})
    }
    const onKnowPass =(e)=>{
        setVisible(true)
    }
    const onSubmit=(data)=>{
        navigate("/clientes/solicitud",{replace:true})
    }
    
    return (
        <>
            <ContentDialog titulo={"Restablecer contraseña"} visible={visible} closable={true} onHide={(e)=>{setVisible(false)}}>
                <PasswordResetEmail/>
            </ContentDialog>
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
                            <Button className="mb-2" style={{ background:'var(--green-800)'}} label="Ingresar" onClick={onSubmit} rounded={true}/>
                            <div className="mb-2">
                                ¿No tienes una cuenta?
                            </div>
                            <Button className="text-green-800" type="button" onClick={onRegister} label="Regístrate" link />
                            <div className="mb-2">
                                ¿Olvidaste tu contraseña?
                            </div>
                            <Button className="text-green-800" type="button" onClick={onKnowPass} label="Restablacer contraseña" link />
                            </PanelCenter>
                        </div>
                        </PanelGrid>
                        
                    </form>
                </Card>
            </PanelCenter>
            <div className="card flex">
                <Button severity="success" onClick={(e) => ov.current.toggle(e)} rounded={true}>
                    <FontAwesomeIcon rounded icon={"comments"}></FontAwesomeIcon>
                </Button>
                <OverlayPanel ref={ov}>
                    
                </OverlayPanel>
            </div>
            </div>
            
        </>
    )
}
export default Login