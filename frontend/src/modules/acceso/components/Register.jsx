
import {PanelCenter} from "../../../globalsComponents/panels/PanelCenter"
import {PanelGrid} from "../../../globalsComponents/panels/PanelGrid"
import {InputText} from "primereact/inputtext"
import {Password} from "primereact/password"
import {InputMask} from "primereact/inputmask"
import {Card} from "primereact/card"
import { ContentDialog } from "../../../globalsComponents/dialog/ContentDialog"
import {useRef, useState } from "react"
import {AvisoPrivacidad} from "./AvisoPrivacidad"
import {Terminos} from "./Terminos"
import { useNavigate } from "react-router"
import { Button } from "primereact/button"
import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import {createUser, getConvenioExistente, getCorreoExistente, getNumeroExistente} from "../handle/handleAcceso"
import { Toast } from 'primereact/toast';
import { classNames } from "primereact/utils"
        

const Registrate=()=>{

    const toast = useRef(null)
    const [visible,setVisible]=useState(false)
    const [titulo,setTitulo] = useState("")
    const [content,setContent] = useState(<></>)
    const [password,setPassword]=useState("")
    const [existe,setExiste] =useState(false)
    const [existeTel,setExisteTel] =useState(false)
    const [existeConvenio,setExisteConvenio]=useState(false)

    const {control,reset,handleSubmit,formState:{errors}} =useForm()
    const navigate=useNavigate()


    const inputValidate = (e,onChange)=>{
        e.target.value = e.target.value.toUpperCase()
        let ragex = /^\d{1,3}-[a-z A-Z0-9]{0,15}$/
        let num = /^\d{0,3}-{0,1}$/
        let gion = /-{1}/
        if(e.target.value.length <= 3){
            if(gion.test(e.target.value || e.target.value === "")){
                if(ragex.test(e.target.value || e.target.value === "")){
                    onChange(e.target.value)
                }
            }
            if(num.test(e.target.value || e.target.value === "")){
                onChange(e.target.value)
            }
            if((e.target.value.length === 3) && !gion.test(e.target.value) && num.test(e.target.value)){
                onChange(`${e.target.value}-`)
            }
        }else{
            if(ragex.test(e.target.value || e.target.value === "")){
                onChange(e.target.value)
            }
        }
        
    }
    const validarConvenio=async(value)=>{
        const con = await getConvenioExistente(value)
        const {existe:ex} = con
        setExisteConvenio(ex)
    }

    const validarCorreo=async(value)=>{
        const cor = await getCorreoExistente({
            correo: value
        })
        const {existe:ex} = cor
        setExiste(ex)
    }
    const validarNumero=async(value)=>{
        let telefono = value.replace(/ /g, "")
        const tel = await getNumeroExistente({
            telefono: telefono
        })
        const {existe:ex} = tel
        setExisteTel(ex)
    }
    const onSubmit=async(data)=>{
        data.telefono = data.telefono.replace(/ /g, "")
        const res = await createUser(data)
        if(!res.error){
            toast.current.show({severity:'success', summary: "Registro exitoso", detail: 'Gracias'})
        }else{
            toast.current.show({severity:'error', summary: "Ah ocurrido un error", detail: res.error})
        }
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
            <Toast ref={toast}></Toast>
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
                                validate:(v)=>!existe||"Este correo ya fue registrado",
                                pattern:{
                                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message:"No es un correo valido"
                                }
                            }} control={control} name="correo" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <InputText className={`${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})}`} 
                                        name={field.name} value={field.value||""} onChange={field.onChange} 
                                        placeholder="ejemplo@ejemplo.com" onBlur={(e)=>{
                                            validarCorreo(e.target.value)
                                        }}/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Correo electrónico
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{...errors}}></ErrorLabel>
                                </>
                            )}/>
                        </div>
                        <div className="col-12 mb-2">
                            <Controller rules={{
                                required: "El teléfono es requerido.",
                                validate:(v)=>!existeTel||"Este numero ya fue registrado",
                            }} control={control} name="telefono" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputMask name={field.name} onBlur={(e)=>{
                                            validarNumero(e.target.value)
                                        }} value={field.value || ''} placeholder="999 999 99 99" onChange={(e) => field.onChange(e.value)} mask="999 999 99 99"  />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Número telefónico:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                </>
                            )} />
                        </div>
                        <div className="col-12 mb-4">
                            <Controller rules={{
                                required: "El convenio es requerido",
                                pattern:{
                                    value:/^\d{1,3}-[a-z A-Z0-9]{1,15}$/,
                                    message:"El convenio debe contener 2 numeros y 4 letras"
                                },
                                validate:(v)=>existeConvenio||"Este convenio no es valido",
                            }} control={control} name="convenio" render={({field,fieldState})=>(
                                <>
                                    <span className="p-float-label">
                                        <InputText maxLength={16} className={`${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})} uppercase`} 
                                            name={field.name} value={field.value || ''} onChange={(e)=>inputValidate(e,field.onChange)}
                                            placeholder="00-DEMO" onBlur={e=>{
                                                field.onChange(e.target.value.trim())
                                                if(!/^\d{1,3}-[a-z A-Z0-9]{1,15}$/.test(e.target.value)){
                                                    field.onChange(undefined)
                                                }
                                                validarConvenio(e.target.value)
                                            }}/>
                                        
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
                                        <Password className={`icon-right ${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})}`} 
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
                                        <Password className={`icon-right ${classNames({'p-invalid':fieldState.invalid,'border-1':fieldState.invalid, 'border-red-700':fieldState.invalid})}`} 
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