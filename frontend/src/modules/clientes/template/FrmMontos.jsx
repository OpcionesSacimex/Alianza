import {Controller} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import { InputNumber } from "primereact/inputnumber"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { useRef, useState } from "react"
import { Slider } from 'primereact/slider';
import { OverlayPanel } from "primereact/overlaypanel"
import {ProgressBar} from "primereact/progressbar"     
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
export const FrmMontos=({children,control,errors})=>{
    const [minimo,setMinimo]=useState(800)
    const [maximo,setMaximo]=useState(2500)

    const ov=useRef(null)
    return(
        <>
        <div className="align-content-center">
            <p className="text-center text-2xl text-green-800 font-bold">
                Detalles del credito
            </p>
            <PanelGrid>
                <div className="col-6">
                    <InputNumber disabled value={minimo} currency="USD" mode="currency"></InputNumber>
                </div>
                <div className="col-6">
                    <InputNumber disabled value={maximo} currency="USD" mode="currency"></InputNumber>
                </div>
                <div className="col-12">
                    <Controller defaultValue={0}  control={control} name="pago_min" render={({field,fieldState})=>(
                        <>
                            <span className="p-float-label">
                                <InputNumber mode="currency" currency="USD" name={field.name} value={field.value} onChange={(e)=>{
                                    field.onChange(e.value)
                                }}
                                useGrouping={false}/>
                                <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                    Pago mínimo quincenal: 
                                </LabelForm>
                            </span>
                            <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                        </>
                    )}/>
                </div>
                <div className="col-12">
                    <Controller defaultValue={0} control={control} name="pago_max" render={({field,fieldState})=>(
                        <>
                            <PanelCenter className="mb-4">
                                <LabelForm>¿A cuantos meses?</LabelForm>
                            </PanelCenter>
                            
                            <Slider className="slider-tem" value={field.value} min={3} max={12} onChange={(e)=>{
                                ov.current.toggle(e)
                                field.onChange(e.value)
                                }}
                            ></Slider>
                            <PanelCenter className="mt-4">
                                <LabelForm>{field.value} meses</LabelForm>
                            </PanelCenter>
                            <OverlayPanel ref={ov}></OverlayPanel>
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