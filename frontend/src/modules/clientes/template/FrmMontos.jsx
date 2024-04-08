import {Controller} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import { InputNumber } from "primereact/inputnumber"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { useEffect, useState } from "react"
import { Slider } from 'primereact/slider'; 
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import { xpfrom } from "../../../utils/calcule/Porcentaje"
export const FrmMontos=({children,control,errors,getValues})=>{
    const [minimo,setMinimo]=useState(0)
    const [maximo,setMaximo]=useState(0)

   
    useEffect(()=>{
        const cap_pago=getValues("economico.disponible_q")
        setMinimo(xpfrom({value:cap_pago,porcentaje:10}))
        setMaximo(xpfrom({value:cap_pago,porcentaje:40}))
    },[getValues("economico.disponible_q")])

    return(
        <>
        <div className="align-content-center ">
            <p className="text-center text-2xl text-green-800 font-bold">
                Detalles del credito
            </p>
            <PanelGrid className="mt-6">
                <div className="col-6">
                    <span className="p-float-label">
                        <InputNumber name="minimo" disabled value={minimo} currency="USD" mode="currency"></InputNumber>
                        <LabelForm htmlFor="minimo">Pago minimo:</LabelForm>
                    </span>
                    
                </div>
                <div className="col-6">
                    <span className="p-float-label">
                        <InputNumber disabled value={maximo} currency="USD" mode="currency"></InputNumber>
                        <LabelForm htmlFor="minimo">Pago maximo:</LabelForm>
                    </span>
                </div>
                <div className="col-12">
                    <Controller rules={{
                        min:{
                            value:minimo,
                            message:"No puede ser menor al monto minimo"
                        },
                        max:{
                            value:maximo,
                            message:"No puede exceder el monto maximo"
                        },
                        required:"El pago es requerido"
                    }} defaultValue={0} control={control} name="pago_min" render={({field,fieldState})=>(
                        <>
                            <span className="p-float-label mt-4">
                                <InputNumber max={maximo} mode="currency" currency="USD" name={field.name} value={field.value ||''} onChange={(e)=>{
                                    field.onChange(e.value)
                                }}
                                useGrouping={false}/>
                                <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                    Pago quincenal deseado: 
                                </LabelForm>
                            </span>
                            <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                        </>
                    )}/>
                </div>
                <div className="col-12">
                    <Controller control={control} name="plazo" render={({field,fieldState})=>(
                        <>
                            <PanelCenter className="mb-4 mt-2">
                                <LabelForm>¿A cuantos meses?</LabelForm>
                            </PanelCenter>
                            
                            <Slider className="slider-tem" value={field.value} min={3} max={12} onChange={(e)=>{
                                field.onChange(e.value)
                                }}
                            ></Slider>
                            <PanelCenter className="mt-4">
                                <LabelForm>{field.value} meses</LabelForm>
                            </PanelCenter>
                        </>
                    )}/>               
                </div>
                <div className="col-12"> 
                    <div className="align-content-center p-buttonset mt-4">
                        {children}
                    </div>
                </div>

            </PanelGrid>
        </div>
        </>

    )
}