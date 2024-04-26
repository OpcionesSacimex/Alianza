import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { useMountEffect } from "primereact/hooks"
import { useEffect, useState } from "react"
import { InputNumber } from "primereact/inputnumber"
import { ErrorLabel, LabelForm } from "../../../globalsComponents/msg/LabelForm"
import { Controller } from "react-hook-form"

export const FrmSolicitud = ({ children, control, errors,getValues }) => {
    
    const [prestamoMax, setPrestamoMax] = useState(0)

    useEffect(()=>{
        const pago=getValues("pago_min")
        const plazo=getValues("plazo")
        setPrestamoMax((pago*plazo*2)||0)
    },[getValues("pago_min"),getValues("plazo")])
    return (
        <>
            <div className="align-content-center">
                <p className="text-center text-2xl text-green-800 font-bold">
                    Solicitud de crédito
                </p>
                <PanelGrid className="mt-6">
                    <div className="col-12">
                        <span className="p-float-label">
                            <InputNumber mode="currency" currency="USD" disabled value={prestamoMax}></InputNumber>
                            <LabelForm>Crédito máximo:</LabelForm>
                        </span>

                    </div>
                    <div className="col-12">
                        <Controller name="economico" control={control} render={({ field: f, fieldState: fs }) => (
                            <Controller defaultValue={0} rules={{
                                max: {
                                    value: prestamoMax,
                                    message: "No es posible exceder el monto máximo."
                                }
                            }} name={`${f.name}.prestamo_f`} control={control} render={({ field, fieldState }) => (
                                <>
                                    <span className="p-float-label">
                                        <InputNumber mode="currency" currency="USD" name={field.name} value={field.value} onChange={(e) => field.onChange(e.value)}></InputNumber>
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required>
                                            Préstamo solicitado.
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                            )} />
                        )} />
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