import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { InputText } from "primereact/inputtext"
import { Controller, useForm } from "react-hook-form"
import { LabelForm, ErrorLabel } from "../../../globalsComponents/msg/LabelForm"
import { ButtonBackGO } from "./ButtonBackGO"
import { crearPersonaCliente } from "../handle/handleCliente"
import { Toast } from "primereact/toast"
import { useRef } from "react"
import { useUserInfo } from "../../../hooks/useUserAuth"
import { useUpdateEffect } from "primereact/hooks"
export const FrmPersona = ({ onGo }) => {
    const {userInfo} = useUserInfo()
    const toast = useRef(null)
    const { control, getValues, setValue, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async(data) => {
        const res=await crearPersonaCliente(data)
        if(!res.error){
            //toast.current.show({severity:'success', summary: 'Exitoso',detail:"Actualizacion exitosa", life: 4000})
            onGo()
        }else{
            toast.current.show({severity:'error', summary: 'Error', detail:res.error, life: 4000})
        }
    }
    useUpdateEffect(()=>{
        if(userInfo.id){
            const {socio:{persona}} = userInfo
            if(persona){
                setValue("nombre",persona.nombre)
                setValue("ape_pat",persona.ape_pat)
                setValue("ape_mat",persona.ape_mat)
            }
        }
    },[userInfo])
    return (
        <>
        <Toast ref={toast}></Toast>
            <div className="align-content-center">
                <p className="text-center text-2xl text-green-800 font-bold">
                    Ingresa tus datos y descubre lo que tenemos para ti.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <PanelGrid>
                        <div className="col-12">
                            <Controller rules={{
                                required: "El nombre es requerido."
                            }} control={control} name="nombre" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-4 p-float-label">
                                        <InputText id={field.name} maxLength={45} name={field.name} value={field.value || ""} onChange={(e) => field.onChange(e.target.value)} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Nombre(s):
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                            )} />
                        </div>
                        <div className="col-12 lg:col-6">
                            <Controller rules={{
                                required: "El primer apellido es requerido."
                            }} control={control} name="ape_pat" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputText id={field.name} maxLength={45} name={field.name} value={field.value || ""} onChange={field.onChange} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Paterno:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                </>
                            )} />
                        </div>

                        <div className="col-12 lg:col-6">
                            <Controller rules={{
                                required: "Su segundo apellido es requerido."
                            }} control={control} name="ape_mat" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputText id={field.name} maxLength={45} name={field.name} value={field.value || ""} onChange={field.onChange} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Materno:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                </>
                            )} />
                        </div>
                        <div className="col-12">
                            <div className="align-content-center">
                                <ButtonBackGO type="submit" onGo={(e)=>{}} go={true} />
                            </div>
                        </div>
                    </PanelGrid>
                </form>

            </div>
        </>
    )
}