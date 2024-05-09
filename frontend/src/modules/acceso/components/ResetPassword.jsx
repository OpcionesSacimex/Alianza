import { Controller } from "react-hook-form"
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { validateResetPassowrd } from "../handle/handleAcceso"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { Password } from "primereact/password"
import { ErrorLabel, LabelForm } from "../../../globalsComponents/msg/LabelForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMountEffect } from "primereact/hooks"
import { classNames } from "primereact/utils"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
export const ResetPassword = () => {
    const data = window.location.pathname.split("/")
    const validateKEY = data[data.length - 1]
    const [password, setPassword] = useState("")
    const [validate, setValidate] = useState(false)
    const [count, setCount] = useState(7);
    const navigate = useNavigate()

    const { control, reset, getValues, setValue, formState: { errors } } = useForm()

    const getAndSetValidate = async () => {
        const res = await validateResetPassowrd(validateKEY)
        setValidate(res.valido)
    }

    useEffect(() => {
        if (validate === false) {
            const interval = setInterval(() => {
                setCount(count - 1)
            }, 1000)
            if (count === 0) {
                navigate("/", { replace: true })
            }
        }
    })

    useMountEffect(() => {

        const validar = async () => {
            await getAndSetValidate()
        }
        validar()
    })
    return (
        <>
            {
                validate ?
                    <>
                        <div className="mt-5 mb-6">
                            <PanelCenter>
                                <Card className="pl-5 pr-5  w-12 md:w-8 lg:w-7 xl:w-6 bg-gray-100">
                                    <form>
                                        <PanelCenter>
                                            <div className="flex flex-wrap align-items-center justify-content-center">
                                                <p className="text-center text-2xl text-green-800 font-bold">
                                                    Restablecer contraseña
                                                </p>
                                            </div>
                                            <PanelGrid className="mt-5">
                                            <div className="col-12 mb-4">
                                                <Controller rules={{
                                                    required: "La contraseña es requerida",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Debe contener al menos 6 caracteres"
                                                    },

                                                }} control={control} name="password" render={({ field, fieldState }) => (
                                                    <>
                                                        <span className="p-float-label">
                                                            <Password className={`icon-right ${classNames({ 'p-invalid': fieldState.invalid, 'border-1': fieldState.invalid, 'border-red-700': fieldState.invalid })}`}
                                                                strongLabel="Fuerte" weakLabel="Debil" mediumLabel="Medio" promptLabel="Introdusca su contraseña"
                                                                name={field.name} value={field.value || ""} onChange={field.onChange} placeholder="Contraseña"
                                                                toggleMask />
                                                            <LabelForm htmlFor={field.name} status={fieldState.invalid} required={true}>Contraseña</LabelForm>
                                                        </span>
                                                        <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                                    </>
                                                )} />

                                            </div>
                                            <div className="col-12 mb-2">
                                                <Controller rules={{
                                                    validate: (v) => v === password || "Las contraseñas no coinciden"
                                                }} name="password" control={control} render={({ field, fieldState }) => (
                                                    <>
                                                        <span className="p-float-label">
                                                            <Password className={`icon-right ${classNames({ 'p-invalid': fieldState.invalid, 'border-1': fieldState.invalid, 'border-red-700': fieldState.invalid })}`}
                                                                value={password} onChange={e => { setPassword(e.target.value) }} name="pass"
                                                                strongLabel="Fuerte" weakLabel="Debil" mediumLabel="Medio" promptLabel="Confirme su contraseña" toggleMask />
                                                            <LabelForm htmlFor={"pass"} status={fieldState.invalid} required={true}>Confirmar Contraseña</LabelForm>
                                                        </span>
                                                        <ErrorLabel name={field.name} errors={{ ...errors }}></ErrorLabel>
                                                    </>
                                                )} />
                                            </div>
                                            <div className="col-12">
                                                <Button className="bg-green-800" label="Restablecer contraseña">
                                                </Button>
                                            </div>
                                            </PanelGrid>
                                        </PanelCenter>
                                    </form>
                                </Card>
                            </PanelCenter>
                        </div>
                    </>
                    :
                    <>
                        <PanelCenter>
                            <label className="text-red-800 font-bold text-2xl">No valido</label>
                            <FontAwesomeIcon icon="fa-solid fa-spinner" spin className="h-5rem text-green-800" />
                            <label className="text-2xl">Redireccion en {count}</label>
                        </PanelCenter>
                    </>

            }
        </>
    )
}