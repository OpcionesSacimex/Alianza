import React,{useRef, useState,useEffect} from "react"
import {PanelGrid} from "./../../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../../globalsComponents/panels/PanelCenter"
import {Card} from "primereact/card"
import {InputText} from "primereact/inputtext"
import {Password} from "primereact/password"
import {Button} from "primereact/button"
import { useNavigate } from "react-router"
import { OverlayPanel } from 'primereact/overlaypanel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContentDialog } from "../../../globalsComponents/dialog/ContentDialog"
import { PasswordResetEmail } from "./PasswordResetEmail"
import { loginUser} from "../handle/handleAcceso"
import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import {Toast} from "primereact/toast"
import {useAuth} from "../../../hooks/useAuthToken"
import { useMountEffect } from "primereact/hooks"
const Login=()=>{
    const navigate = useNavigate()
    const ov = useRef(null)
    const [visible,setVisible]=useState(false)
    const {auth,setAuth} = useAuth()

    const toast = useRef()
    const toastContact = useRef()

    const {control,setValue,getValues,reset,handleSubmit,formState:{errors}} =useForm()

    const onRegister =(e)=>{
        navigate("/home/register",{replace:true})
    }
    const onKnowPass =(e)=>{
        setVisible(true)
    }
    const onSubmit=async(data)=>{
        const user = await loginUser(data)
        if(!user.error){
            setAuth(user)
            navigate("/dashboard",{replace:true})
        }else{
            toast.current.show({severity:'warn', summary: user.error, detail: 'Usuario o contraseña incorecta'})
        }   
    }
    useMountEffect(()=>{
        //toastContact.current.show({sticky: true})
    })
    
    return (
        <>
            <ContentDialog titulo={"Restablecer contraseña"} visible={visible} closable={true} onHide={(e)=>{setVisible(false)}}>
                <PasswordResetEmail/>
            </ContentDialog>
            <Toast className="mt-8" ref={toast} />
            
            {
                /*
                <Toast className="mt-8" ref={toastContact} position="bottom-left" content={({message})=>(
                <Button severity="success" onClick={(e) => ov.current.toggle(e)} rounded={true}>
                    <FontAwesomeIcon icon={"comments"}></FontAwesomeIcon>
                </Button>
            )}/>
            <OverlayPanel ref={ov} dismissable={false} ></OverlayPanel>
                
                */
            }
            
            
            <div className="mt-5 mb-6">
            <PanelCenter>
                <Card className="w-12 md:w-8 lg:w-7 xl:w-6 bg-gray-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <PanelCenter>
                        <label className="text-2xl text-green-800 font-bold">Te damos la bienvenida a Sacimex</label>
                        </PanelCenter>
                        
                        <PanelGrid className="mt-5">
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required:"El correo es requerido"
                            }} name="correo" control={control} render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <InputText name={field.name} value={field.value||''} onChange={field.onChange} placeholder="ejemplo@ejemplo.com"/>
                                        <LabelForm htmlFor={field.name} required={true} status={fieldState.invalid}>Correo electrónico</LabelForm>
                                        
                                    </span>
                                    <ErrorLabel errors={errors} name={field.name}></ErrorLabel>
                                </>
                            )}/>
                            
                            
                        </div>
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required:"La contraeña es requerida"
                            }} name="password" control={control} render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label p-icon-field p-icon-field-right">
                                        <Password feedback={false} name={field.name} value={field.value||''} onChange={field.onChange} placeholder="Contraseña" toggleMask />
                                        <LabelForm htmlFor={field.name} required={true} status={fieldState.invalid}>Contraseña</LabelForm>
                                    </span>
                                    <ErrorLabel errors={errors} name={field.name}></ErrorLabel>
                                </>
                            )}/>
                            
                        </div>
                        <div className="col-12">
                            <PanelCenter className="mb-2">
                            <Button className="mb-2" style={{ background:'var(--green-800)'}} label="Ingresar"/>
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
            </div>
            
        </>
    )
}
export default Login