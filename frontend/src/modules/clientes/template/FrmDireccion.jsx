import React, { useState } from "react"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { OpenMap } from "../../../globalsComponents/map/OpenMap"
import { Controller } from "react-hook-form"
import { InputText } from "primereact/inputtext"
import { LabelForm } from "../../../globalsComponents/msg/LabelForm"
import { useUpdateEffect } from "primereact/hooks"
import { getDirOpenMap } from "../../../globalsComponents/map/handleMaps"
export const FrmDireccion =({children,control,errors,getValues,setValue})=>{

    const [position,setPosition]=useState()

    const obtenerDir=async()=>{
        const [lat,lng] = getValues('direccion.ubicacion')
        const dir= await getDirOpenMap(lat,lng,onError)

        setValue('direccion.colonia',dir.county)
        setValue('direccion.calle',dir.road)
        setValue('direccion.cp',dir.postcode)
    }
    const onError=()=>{

    }
    useUpdateEffect(()=>{
        const obtener = async()=>{
            const dato = getValues('direccion.ubicacion')
            if(dato){
                await obtenerDir()
            }
            
        }
        obtener()
    },[position])

    return(
        <>
            <p className="text-center text-2xl text-green-800 font-bold">
                Ubicacion
            </p>
            
            <PanelGrid>
                <div className="col-12 z-0">
                    <Controller control={control} name={`direccion.ubicacion`} render={({field,fieldState})=>(
                        <>
                            <OpenMap setPosition={(e)=>{
                                setPosition(e)
                                field.onChange(e)
                            }} position={field.value}/>
                        </>
                    )}/>
                </div>
                <div className="col-12">
                    <Controller name="direccion" control={control} render={({field:f,fieldState:fs})=>(
                        <>
                        <PanelGrid>
                            <div className="col-12">
                                <Controller name={`${f.name}.calle`} control={control} render={({field,fieldState})=>(
                                    <>
                                        <span className="p-float-label">
                                            <InputText name={`${field.name}`} value={`${field.value ||''}`} onChange={field.onChange} />
                                            <LabelForm htmlFor={field.name} required={true} status={fieldState.invalid}>
                                                Calle
                                            </LabelForm>
                                        </span>
                                    </>
                                )} />
                            </div>
                            <div className="col-12 lg:col-7">
                                <Controller name={`${f.name}.colonia`} control={control} render={({field,fieldState})=>(
                                    <>
                                        <span className="p-float-label">
                                            <InputText name={`${field.name}`} value={`${field.value ||''}`} onChange={field.onChange} />
                                            <LabelForm htmlFor={field.name} required={true} status={fieldState.invalid}>
                                                Colonia:
                                            </LabelForm>
                                        </span>  
                                        </>
                                 )} />
                            </div>
                            <div className="col-12 lg:col-5">
                                <Controller name={`${f.name}.cp`} control={control} render={({field,fieldState})=>(
                                    <>
                                        <span className="p-float-label">
                                            <InputText name={`${field.name}`} value={`${field.value ||''}`} onChange={field.onChange} />
                                            <LabelForm htmlFor={field.name} required={true} status={fieldState.invalid}>
                                                Codigo postal
                                            </LabelForm>
                                        </span>
                                    </>
                                )} />
                            </div>
                            <div className="col-12 lg:col-6">
                            <Controller name={`${f.name}.no_interior`} control={control} render={({field,fieldState})=>(
                                <>
                                   <span className="p-float-label">
                                        <InputText name={`${field.name}`} value={`${field.value ||''}`} onChange={field.onChange} />
                                        <LabelForm htmlFor={field.name} required={true} status={fieldState.invalid}>
                                            Numero interior
                                        </LabelForm>
                                   </span>
                                </>
                            )} />
                            </div>
                            <div className="col-12 lg:col-6">
                                <Controller name={`${f.name}.no_exterior`} control={control} render={({field,fieldState})=>(
                                    <>
                                        <span className="p-float-label">
                                            <InputText name={`${field.name}`} value={`${field.value ||''}`} onChange={field.onChange} />
                                            <LabelForm htmlFor={field.name} required={true} status={fieldState.invalid}>
                                                Numero exterior
                                            </LabelForm>
                                        </span>
                                    </>
                                )} />
                            </div>
                            </PanelGrid>
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