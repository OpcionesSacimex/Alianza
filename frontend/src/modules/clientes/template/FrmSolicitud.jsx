import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { useMountEffect } from "primereact/hooks"
import { useEffect, useState } from "react"
import { InputNumber } from "primereact/inputnumber"
import { ErrorLabel, LabelForm } from "../../../globalsComponents/msg/LabelForm"
import { Controller } from "react-hook-form"
import { calcularCredito } from "../../../utils/calcule/Creditos"
import { getConvenioCliente } from "../handle/handleCliente"
import { useUserInfo } from "../../../hooks/useUserAuth"

export const FrmSolicitud = ({ children, control, errors,getValues }) => {
    const {userInfo,} = useUserInfo()
    const [convenio,setConvenio] =useState({})
    const [prestamoMax, setPrestamoMax] = useState(0)

    const getAndSetConvenio=async()=>{
        const res = await getConvenioCliente(userInfo?.convenio)
        if(!res.error){
            setConvenio(res)
        }else{

        }
    }
    useEffect(()=>{
        const pago=getValues("pago_min")
        const plazo=getValues("plazo")
        const pf = parseFloat(calcularCredito({
            tasa: (((convenio?.tasa || 26.4)/12)/100) ,
            pagoQuincenal:pago ||0,
            meses:plazo
        }))
        setPrestamoMax(pf)
    },[getValues("pago_min"),getValues("plazo")])
    useMountEffect(()=>{
        const obtener = async()=>{
            await getAndSetConvenio()
        }
        obtener()
    })
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