import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import { InputNumber } from "primereact/inputnumber"

export const FrmMontos=({children,control,errors})=>{
    return(
        <>
        <div className="align-content-center">
            <div className="grid col-12">
                <div class="col">
                    <Controller control={control} name="pago_min" render={({field,fieldState})=>(
                        <>
                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                            Pago mínimo quincenal: 
                        </LabelForm>
                        <InputNumber mode="currency" currency="USD" name={field.name} value={field.value||""} onChange={(e)=>field.onChange(e.value)} useGrouping={false}/>
                        <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                        </>
                    )}/>
                    </div>
                <div class="col">
                    <Controller control={control} name="pago_max" render={({field,fieldState})=>(
                        <>
                            <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                Pago máximo quincenal: 
                            </LabelForm>
                            <InputNumber mode="currency" currency="USD" name={field.name} value={field.value||""} onChange={(e)=>field.onChange(e.value)} useGrouping={false}/>
                            <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                        </>
                    )}/>               
                </div>

            </div>
            <div className="col-12"> 
                <div className="align-content-center p-buttonset mt-4">
                    {children}
                </div>
            </div>
        </div>
        </>

    )
}