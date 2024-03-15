import {Accordion,AccordionTab} from "primereact/accordion"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
export const PasswordResetEmail = ()=>{
    const header = (name)=>{
        return (
            <>
                <span>
                {name.header}
                </span>
            </>
        )
    }
    return (
        <>
            <div className="m-5">
            <Accordion activeIndex={0} >
                <AccordionTab header="Restablecer contraseña" disabled={true} headerTemplate={header}>
                    <span className="p-float-label p-fluid">
                        <InputText name="correo"/>
                        <label htmlFor="correo">Correo</label>
                    </span>
                    <div className="mt-3">
                        <Button severity="success" type="button">
                        Enviar enlace para restablecer contraseña
                        </Button>
                    </div>
                    
                </AccordionTab>
            </Accordion>
            </div>
        </>
    )
}