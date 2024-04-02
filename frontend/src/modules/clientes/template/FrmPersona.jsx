import {PanelGrid} from "../../../globalsComponents/panels/PanelGrid"
import {InputText} from "primereact/inputtext"
import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import {InputNumber } from "primereact/inputnumber"
export const FrmPersona=({children,control,errors})=>{
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
                                        <InputText maxLength={45} name={field.name} value={field.value||""} onChange={field.onChange}/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Nombre(s): 
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                    )}/>
                    </div>
                    <div className="col-12 lg:col-6">
                    <Controller rules={{
                                required:"Es requerido"
                            }} control={control} name="ape_pat" render={({field,fieldState})=>(
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputText maxLength={45} name={field.name} value={field.value||""} onChange={field.onChange}/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Paterno: 
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                    )}/>
                    </div>

                    <div className="col-12 lg:col-6">
                    <Controller rules={{
                                required:"Es requerido"
                            }} control={control} name="ape_mat" render={({field,fieldState})=>(
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputText maxLength={45} name={field.name} value={field.value||""} onChange={field.onChange}/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Materno: 
                                        </LabelForm>
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
                                        <InputNumber  type="text" max={9999999999} name={field.name} value={field.value||""} onChange={(e)=>field.onChange(e.value)} useGrouping={false}/>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Número telefonico: 
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                    )}/>
                    </div>
                <div className="col-12"> 
                    <div className="align-content-center">
                        {children}
                    </div>
                </div>
                </PanelGrid>
            </div>
        </>
    )
}