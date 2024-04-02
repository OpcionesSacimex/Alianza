import {PanelGrid} from "../../../globalsComponents/panels/PanelGrid"
import {Controller,useForm} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"

export const FrmEconomico=({children,control,errors})=>{
    return(
        <>
                    <p className="text-center text-2xl text-green-800 font-bold">
                        Hablemos de tus ingresos:
                    </p>
            <PanelGrid>
                <div className="col-12">
                    <Controller defaultValue={0} rules={{
                        required:"Es requerido"
                        }} control={control} name="ingreso_q" render={({field,fieldState})=>(
                            <>
                                <span className="mt-4 p-float-label">
                                    <InputNumber mode="currency" currency="USD" name={field.name} value={field.value} onChange={(e)=>field.onChange(e.value)} useGrouping={false}/>
                                    <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                        Ingresos quincenales: 
                                    </LabelForm>
                                </span>
                                <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                            </>
                    )}/>
                    </div>
                    <div className="col-12">
                    <Controller defaultValue={0} rules={{
                            required:"Es requerido"
                        }} control={control} name="disponible_q" render={({field,fieldState})=>(
                            <>
                                <span className="mt-2 p-float-label">
                                    <InputNumber mode="currency" currency="USD" name={field.name} value={field.value} onChange={(e)=>field.onChange(e.value)} useGrouping={false}/>
                                    <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                         ¿Cuánto te queda disponible?: 
                                    </LabelForm>
                                </span>
                                <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                            </>
                    )}/>
                    </div>
                    <div className="col-12"> 
                        <div className="align-content-center p-buttonset mt-4">
                            {children}
                        </div>
                    </div>
                    </PanelGrid>
        </>
    )
}