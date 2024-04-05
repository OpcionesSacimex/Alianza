
import {PanelCenter} from "../../../globalsComponents/panels/PanelCenter"
import {PanelGrid} from "../../../globalsComponents/panels/PanelGrid"
import {InputText} from "primereact/inputtext"
import {Password} from "primereact/password"
import {Card} from "primereact/card"
import { ContentDialog } from "../../../globalsComponents/dialog/ContentDialog"
import { useEffect, useState } from "react"
import {AvisoPrivacidad} from "./AvisoPrivacidad"
import {Terminos} from "./Terminos"
import { useNavigate } from "react-router"
import { Button } from "primereact/button"
import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import {createUser} from "../handle/handleAcceso"
import { InputMask } from 'primereact/inputmask';
import { classNames } from "primereact/utils"
        

const Registrate=()=>{
    const [visible,setVisible]=useState(false)
    const [titulo,setTitulo] = useState("")
    const [content,setContent] = useState(<></>)
    const [password,setPassword]=useState("")

    const {control,setValue,getValues,reset,handleSubmit,formState:{submitCount,errors}} =useForm()
    const navigate=useNavigate()

    const onSubmit=async(data)=>{
        const res = await createUser(data)
        reset()
        setPassword("")
    }

    

    const onCuenta=(e)=>{
        navigate("/home/login",{replace:true})
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
                    <Card className="w-12 md:w-8 lg:w-7 xl:w-6 bg-gray-100">
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
                                required:"El correo es requerido",
                                pattern:{
                                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message:"No es un correo valido"
                                }
                            }} control={control} name="correo" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <InputText className={`${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})}`} name={field.name} value={field.value||""} onChange={field.onChange} placeholder="ejemplo@ejemplo.com"/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Correo electrónico
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{...errors}}></ErrorLabel>
                                </>
                            )}/>
                        </div>
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required: "El convenio es requerido",
                                pattern:{
                                    value:/^[0-9]{2}-[a-zA-Z]{4}/,
                                    message:"El convenio debe contener 2 numeros y 4 letras"
                                }
                            }} control={control} name="convenio" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <InputMask className={`${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})} uppercase`} 
                                        name={field.name} value={field.value} mask="99-aaaa" onChange={(e)=>{
                                            console.log(e)
                                            field.onChange(e.value)}} placeholder="00-DEMO"/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true} className="text-xl mb-4">
                                            Convenio
                                        </LabelForm> 
                                    </span>
                                    <ErrorLabel name={field.name} errors={{...errors}}></ErrorLabel> 
                                </>
                            )}/>
                        </div>
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required:"La contraseña es requerida",
                                minLength: {
                                    value:6,
                                    message: "Debe contener al menos 6 caracteres"
                                },
                                
                            }} control={control} name="password" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <Password className={`${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})}`} 
                                        strongLabel="Fuerte" weakLabel="Debil" mediumLabel="Medio" promptLabel="Introdusca su contraseña" 
                                        name={field.name} value={field.value||""} onChange={field.onChange} placeholder="Contraseña" 
                                        toggleMask />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>Contraseña</LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{...errors}}></ErrorLabel>                                    
                                </>
                            )}/>
                            
                        </div>
                        <div className="col-12 mb-2">
                            <Controller rules={{
                                validate:(v)=>v===password || "Las contraseñas no coinciden"
                            }} name="password" control={control} render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <Password className={`${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})}`} 
                                        value={password} onChange={e=>{setPassword(e.target.value)}} name="pass" 
                                        strongLabel="Fuerte" weakLabel="Debil" mediumLabel="Medio" promptLabel="Confirme su contraseña"  toggleMask />
                                        <LabelForm htmlFor={"pass"} status={fieldState.invalid} required={true}>Confirmar Contraseña</LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{...errors}}></ErrorLabel>  
                                </>
                            )} />
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