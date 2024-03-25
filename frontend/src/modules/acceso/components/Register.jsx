
import {PanelCenter} from "../../../globalsComponents/panels/PanelCenter"
import {PanelGrid} from "../../../globalsComponents/panels/PanelGrid"
import {InputText} from "primereact/inputtext"
import {Password} from "primereact/password"
import {Card} from "primereact/card"
import { ContentDialog } from "../../../globalsComponents/dialog/ContentDialog"
import { useState } from "react"
import {AvisoPrivacidad} from "./AvisoPrivacidad"
import {Terminos} from "./Terminos"
import { useNavigate } from "react-router"
import { Button } from "primereact/button"
import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import {createUser} from "../handle/handleAcceso"
import { InputMask } from 'primereact/inputmask';
        

const Registrate=()=>{
    const [visible,setVisible]=useState(false)
    const [titulo,setTitulo] = useState("")
    const [content,setContent] = useState(<></>)
    const [password,setPassword]=useState("")

    const {control,setValue,getValues,reset,handleSubmit,formState:{errors}} =useForm()
    const navigate=useNavigate()

    const onSubmit=async(data)=>{
        
        console.log(data)
        const res = await createUser(data)
        reset()
        setPassword("")
    }

    const onCuenta=(e)=>{
        navigate("/login",{replace:true})
    }
    return (
        <>
            <ContentDialog maxWidth={"600px"} titulo={titulo} closable={true} visible={visible} onHide={(e)=>{setVisible(false)}}>
                <div className="m-5">
                    {content}
                </div>
                
            </ContentDialog>
            <div className="mt-5 mb-6">
                <PanelCenter>
                    <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <PanelCenter>
                        <div className="flex flex-wrap align-items-center justify-content-center">
                            <p className="text-center text-2xl text-green-800 font-bold">
                                Regístrate y obtén tu pre-aprobación en minutos.
                            </p>
                        </div> 
                        <PanelGrid className="mt-5">
                        
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required:"Es requerido"
                            }} control={control} name="correo" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <InputText name={field.name} value={field.value||""} onChange={field.onChange} placeholder="ejemplo@ejemplo.com"/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Correo electrónico
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                            )}/>
                        </div>
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required: "El convenio es requerido"
                            }} control={control} name="convenio" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <InputMask className="uppercase" name={field.name} value={field.value||""} mask="99-aaaa" onChange={(e)=>{
                                            field.onChange(e.value)}} placeholder="00-DEMO"/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true} className="text-xl mb-4">
                                            Convenio
                                        </LabelForm> 
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel> 
                                </>
                            )}/>
                        </div>
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required:"La contraseña es requerida",
                                validate:(v)=>v===password || "Las contraseñas no coinciden"
                            }} control={control} name="password" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <Password strongLabel="Fuerte" weakLabel="Debil" mediumLabel="Medio" promptLabel="Introdusca su contraseña" name={field.name} value={field.value||""} onChange={field.onChange} placeholder="Contraseña" toggleMask />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>Contraseña</LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>                                    
                                </>
                            )}/>
                            
                        </div>
                        <div className="col-12 mb-2">
                            <span className="p-float-label">
                                <Password value={password} onChange={e=>{setPassword(e.target.value)}} name="pass" placeholder="Contraseña" toggleMask />
                                <LabelForm htmlFor={"pass"} required={true}>Confirmar Contraseña</LabelForm>
                            </span>
                        </div>
                        <div className="col-12 mb-2">
                            <PanelCenter>
                                <Button className="w-min" style={{ background:'var(--green-800)'}} severity="success">Registrarme</Button>
                            </PanelCenter>
                        </div>
                        <div className="col-12 mb-3 text-justify">
                            Al dar clic en "Registrarme" aceptas los <a className="text-green-800" href="#" onClick={(e)=>{
                                setTitulo("Terminos y condiciones")
                                setContent(<Terminos/>)
                                setVisible(true)
                                }}>
                                términos y condiciones
                                </a> y que has leído el <a href="#" className="text-green-800" onClick={(e)=>{
                                setTitulo("Aviso de privacidad")
                                setContent(<AvisoPrivacidad/>)
                                setVisible(true)
                                }}>Aviso de Privacidad</a> de sacimex
                        </div>
                        
                        </PanelGrid>
                            <label>¿Ya tienes cuenta?</label>
                            <Button className="text-green-800" type="button" onClick={onCuenta} label="Iniciar sesion" link />
                        </PanelCenter>
                        </form>
                    </Card>
                </PanelCenter>
            </div>
        </>
    )
}

export default Registrate