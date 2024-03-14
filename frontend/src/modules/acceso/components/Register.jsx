
import {PanelCenter} from "../../../globalsComponents/panels/PanelCenter"
import {PanelGrid} from "../../../globalsComponents/panels/PanelGrid"
import {InputText} from "primereact/inputtext"
import {Password} from "primereact/password"
import {Card} from "primereact/card"
import { ContentDialog } from "../../../globalsComponents/dialog/ContentDialog"
import { useState } from "react"
import {AvisoPrivacidad} from "./AvisoPrivacidad"
import {Terminos} from "./Terminos"
const Registrate=()=>{
    const [visible,setVisible]=useState(false)
    const [titulo,setTitulo] = useState("")
    const [content,setContent] = useState(<></>)
    return (
        <>
            <ContentDialog maxWidth={"600px"} titulo={titulo} closable={true} visible={visible} onHide={(e)=>{setVisible(false)}}>
                <div className="m-5">
                    {content}
                </div>
                
            </ContentDialog>
            <div className="mt-5 mb-6">
                <PanelCenter>
                    <Card className="bg-gray-200 ml-6 mr-6 w-30rem">
                        <PanelCenter>
                        <div class="flex flex-wrap align-items-center justify-content-center">
                            <p class="text-center text-2xl text-green-800 font-bold">
                                Regístrate y obtén tu pre-aprobación en minutos.
                            </p>
                        </div> 
                        <PanelGrid className="mt-5">
                        <div className="col-12 mb-4">
                            <span className="p-float-label">
                                <InputText name="correo" placeholder="ejemplo@ejemplo.com"/>
                                <label htmlFor="correo" className="text-xl">Correo electrónico</label>
                            </span>
                            
                        </div>
                        <div className="col-12 mb-4">
                            <span className="p-float-label">
                                <Password name="pass" placeholder="Contraseña" toggleMask />
                                <label htmlFor="pass" className="text-xl">Contraseña</label>
                            </span>
                        </div>
                        <div className="col-12 mb-4">
                            <span className="p-float-label">
                                <Password name="pass" placeholder="Contraseña" toggleMask />
                                <label htmlFor="pass" className="text-xl">Confirmar Contraseña</label>
                            </span>
                        </div>
                        <div className="col-12 mb-4">
                            Al dar clic en "Registrarme" aceptas los <a href="#" onClick={(e)=>{
                                setTitulo("Terminos y condiciones")
                                setContent(<Terminos/>)
                                setVisible(true)
                                }}>
                                términos y condiciones
                                </a> y que has leído el <a href="#" onClick={(e)=>{
                                setTitulo("Aviso de privacidad")
                                setContent(<Terminos/>)
                                setVisible(true)
                                }}>Aviso de Privacidad</a> de sacimex
                        </div>
                        </PanelGrid>
                        </PanelCenter>
                    </Card>
                </PanelCenter>
            </div>
        </>
    )
}

export default Registrate