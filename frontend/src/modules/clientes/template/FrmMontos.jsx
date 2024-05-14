import {Controller} from "react-hook-form"
import {LabelForm,ErrorLabel} from "../../../globalsComponents/msg/LabelForm"
import { InputNumber } from "primereact/inputnumber"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { useEffect, useState } from "react"
import { Slider } from 'primereact/slider'; 
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import { xpfrom } from "../../../utils/calcule/Porcentaje"
import { useUserInfo } from "../../../hooks/useUserAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { classNames } from "primereact/utils"
import { useConvenio } from "../../../hooks/useConvenio"
export const FrmMontos=({children,control,errors,getValues,setValue})=>{
    const {convenio} = useConvenio()
    const [minimo,setMinimo]=useState(0)
    const [maximo,setMaximo]=useState(0)
    const [plazoMin,setPlazoMin]=useState(0)
    const [plazoMax,setPlazoMax]=useState(0)

    /*const obtenerPlazos = async()=>{
        if(userInfo.convenio){
            const res=await getConvenioCliente(userInfo?.convenio)
            if(!res.error){
                const {plazoMinimo,plazoMaximo} = res
                setPlazoMin(plazoMinimo)
                if(getValues("plazo")===0){
                    setValue('plazo',plazoMaximo)
                }
                setPlazoMax(plazoMaximo)
            }
        }
        
    }*/
    
    useEffect(()=>{
        if(convenio.plazoMaximo){
            const {plazoMinimo,plazoMaximo} = convenio
            setPlazoMin(plazoMinimo)
            if(getValues("plazo")===0){
                setValue('plazo',plazoMaximo)
            }
            setPlazoMax(plazoMaximo)
        }
    },[{...convenio}])

    /*useEffect(()=>{
        const obtener = async ()=>{
            await obtenerPlazos()
        }
        obtener()
    },[userInfo])*/

    useEffect(()=>{
        const cap_pago=getValues("economico.disponible_q")
        setMinimo(xpfrom({value:cap_pago,porcentaje:10}))
        setMaximo(xpfrom({value:cap_pago,porcentaje:40}))
    },[getValues("economico.disponible_q")])

    return(
        <>
        <div className="align-content-center ">
            <p className="text-center text-2xl text-green-800 font-bold">
                Detalles del crédito
            </p>
            <PanelGrid className="mt-6">
                <div className="col-6">
                    <span className="p-float-label">
                        <InputNumber name="minimo" disabled value={minimo} currency="USD" mode="currency"></InputNumber>
                        <LabelForm htmlFor="minimo">Pago mínimo:</LabelForm>
                    </span>
                    
                </div>
                <div className="col-6">
                    <span className="p-float-label">
                        <InputNumber disabled value={maximo} currency="USD" mode="currency"></InputNumber>
                        <LabelForm htmlFor="minimo">Pago máximo:</LabelForm>
                    </span>
                </div>
                <div className="col-12">
                    <Controller rules={{
                        min:{
                            value:minimo,
                            message:"No puede ser menor al monto mínimo."
                        },
                        max:{
                            value:maximo,
                            message:"No puede exceder el monto máximo."
                        },
                        validate:(val)=>val!==0 || "El monto no puede ser 0",
                        required:"El pago es requerido"
                    }} defaultValue={0} control={control} name="pago_min" render={({field,fieldState})=>(
                        <>
                            <span className="p-float-label mt-4">
                                <InputNumber autoFocus={true} max={maximo} currency="USD" mode="currency" name={field.name} value={field.value ||''} onChange={(e)=>{
                                    field.onChange(e.value)
                                }}/>
                                <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                 Pago quincenal deseado:
                                </LabelForm>
                            </span>
                            <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                        </>
                    )}/>
                </div>
                <div className="col-12">
                    <Controller defaultValue={0} control={control} name="plazo" render={({field,fieldState})=>(
                        <>
                            <PanelCenter className="mb-4 mt-2">
                                <LabelForm>¿A cuántos meses?</LabelForm>
                            </PanelCenter>
                            <div className={`${classNames({"hidden": field.value===0})}`}>
                            <Slider className="slider-tem" value={field.value} min={plazoMin} max={plazoMax} onChange={(e)=>{
                                field.onChange(e.value)
                                }}
                            ></Slider>

                            </div>
                            
                            <PanelCenter className="mt-4">
                                <label>
                                    {
                                        field.value!==0?
                                        <>{field.value} meses</>:<>
                                            <FontAwesomeIcon className="text-green-900 text-5xl" icon="fa-spinner" spin/>
                                        </>
                                    }
                                </label>
                                {
                                    field.value===0?<label>Por favor espere en lo que actulizamos sus datos</label>:<></>
                                }
                                
                            </PanelCenter>
                        </>
                    )}/>               
                </div>
                <div className="col-12"> 
                    <div className="align-content-center p-button-group mt-4">
                        {children}
                    </div>
                </div>

            </PanelGrid>
        </div>
        </>

    )
}