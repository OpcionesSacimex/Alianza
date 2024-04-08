import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { Controller } from "react-hook-form"
import { LabelForm, ErrorLabel } from "../../../globalsComponents/msg/LabelForm"
import { InputNumber } from "primereact/inputnumber"
export const FrmEconomico = ({ children, control, errors, getValues}) => {
    return (
        <>
            <p className="text-center text-2xl text-green-800 font-bold">
                Hablemos de tus ingresos:
            </p>
            <PanelGrid>
                <Controller name="economico" control={control} render={({ field: f, fieldState: fs }) => (
                    <>
                        <div className="col-12">
                            <Controller defaultValue={0} rules={{
                                min:{
                                    value:1500,
                                    message:"El monto minimo debe ser mayor a 1500 quincenales"
                                },
                                required: "El ingreso quincenal es requerido"
                            }} control={control} name={`${f.name}.ingreso_q`} render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-4 p-float-label">
                                        <InputNumber mode="currency" currency="USD" name={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} useGrouping={false} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Ingresos quincenales:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{...errors}}></ErrorLabel>
                                </>
                            )} />
                        </div>
                        <div className="col-12 mt-1">
                            <Controller defaultValue={0} rules={{
                                required: "El saldo disponible es requerido",
                                min:{
                                    value:1500,
                                    message:"El saldo disponible no debe ser menor a $3,000.00 mensuales o $1,500.00 quincenales"
                                },
                            }} control={control} name={`${f.name}.disponible_q`} render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputNumber max={getValues(`${f.name}.ingreso_q`)-1} mode="currency" value={field.value} currency="USD" name={field.name} onChange={(e) => field.onChange(e.value)} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            ¿Con cuánto te quedas?:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{...errors}}></ErrorLabel>
                                </>
                            )} />
                        </div>
                    </>
                )} />

                <div className="col-12">
                    <div className="align-content-center p-buttonset mt-4">
                        {children}
                    </div>
                </div>
            </PanelGrid>
        </>
    )
}