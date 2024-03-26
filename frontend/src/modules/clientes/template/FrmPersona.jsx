import {PanelCenter} from "../../../globalsComponents/panels/PanelCenter"
import {PanelGrid} from "../../../globalsComponents/panels/PanelGrid"
import {InputText} from "primereact/inputtext"
import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import { InputNumber } from "primereact/inputnumber"
import { Button } from "primereact/button"
import 'primeicons/primeicons.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FrmPersona=({control,errors})=>{
    return(
        <>
            <div className="align-content-center">
                    <p className="text-center text-2xl text-green-800 font-bold">
                        Ingresa tus datos y descubre lo que tenemos para ti.
                    </p>
                <PanelGrid>
                    <div className="col-12">
                    <Controller rules={{
                                required:"Es requerido"
                            }} control={control} name="nombre" render={({field,fieldState})=>(
                                <>
                                    <span className="mt-4 p-float-label">
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Nombre: 
                                        </LabelForm>
                                        <InputText className="p-fluid" name={field.name} value={field.value||""} onChange={field.onChange}/>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                    )}/>
                    </div>
                    <div className="col-12">
                    <Controller rules={{
                                required:"Es requerido"
                            }} control={control} name="ape_pat" render={({field,fieldState})=>(
                                <>
                                    <span className="mt-2 p-float-label">
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Paterno: 
                                        </LabelForm>
                                        <InputText name={field.name} value={field.value||""} onChange={field.onChange}/>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                    )}/>
                    </div>

                    <div className="col-12">
                    <Controller rules={{
                                required:"Es requerido"
                            }} control={control} name="ape_mat" render={({field,fieldState})=>(
                                <>
                                    <span className="mt-2 p-float-label">
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Materno: 
                                        </LabelForm>
                                        <InputText name={field.name} value={field.value||""} onChange={field.onChange}/>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                    )}/>
                    </div>
                    
                    <div className="col-12">
                    <Controller rules={{
                                required:"Es requerido"
                            }} control={control} name="telefono" render={({field,fieldState})=>(
                                <>
                                    <span className="mt-2 p-float-label">
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Número telefonico: 
                                        </LabelForm>
                                        <InputText maxLength={10} name={field.name} value={field.value||""} onChange={field.onChange}/>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                    )}/>
                    </div>
                    <Button rounded text severity="info"> 
                        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" />
                    </Button>
                </PanelGrid>
            </div>
        </>
    )
}