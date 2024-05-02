import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { InputText } from "primereact/inputtext"
import { Controller, useForm } from "react-hook-form"
import { LabelForm, ErrorLabel } from "../../../globalsComponents/msg/LabelForm"
import { InputMask } from "primereact/inputmask"
import { ButtonBackGO } from "./ButtonBackGO"
export const FrmPersona = ({ children,onGo }) => {

    const { control, trigger, getValues, setValue, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        onGo()
    }
    return (
        <>
            <div className="align-content-center">
                <p className="text-center text-2xl text-green-800 font-bold">
                    Ingresa tus datos y descubre lo que tenemos para ti.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <PanelGrid>
                        <div className="col-12">
                            <Controller rules={{
                                required: "El nombre es requerido."
                            }} control={control} name="nombre" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-4 p-float-label">
                                        <InputText id={field.name} maxLength={45} name={field.name} value={field.value || ""} onChange={(e) => field.onChange(e.target.value)} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Nombre(s):
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={errors}></ErrorLabel>
                                </>
                            )} />
                        </div>
                        <div className="col-12 lg:col-6">
                            <Controller rules={{
                                required: "El primer apellido es requerido."
                            }} control={control} name="ape_pat" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputText id={field.name} maxLength={45} name={field.name} value={field.value || ""} onChange={field.onChange} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Paterno:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                </>
                            )} />
                        </div>

                        <div className="col-12 lg:col-6">
                            <Controller rules={{
                                required: "Su segundo apellido es requerido."
                            }} control={control} name="ape_mat" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputText id={field.name} maxLength={45} name={field.name} value={field.value || ""} onChange={field.onChange} />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Apellido Materno:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                </>
                            )} />
                        </div>

                        <div className="col-12">
                            <Controller rules={{
                                required: "El teléfono es requerido."
                            }} control={control} name="telefono" render={({ field, fieldState }) => (
                                <>
                                    <span className="mt-2 p-float-label">
                                        <InputMask name={field.name} value={field.value || ''} placeholder="999 999 99 99" onChange={(e) => field.onChange(e.value)} mask="999 999 99 99" />
                                        <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>
                                            Número telefónico:
                                        </LabelForm>
                                    </span>
                                    <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                </>
                            )} />
                        </div>
                        <div className="col-12">
                            <div className="align-content-center">
                                <ButtonBackGO type="submit" onGo={(e)=>{}} go={true} />
                            </div>
                        </div>
                    </PanelGrid>
                </form>

            </div>
        </>
    )
}