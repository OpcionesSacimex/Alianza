import React from "react"
import {Menubar} from "primereact/menubar"
import {PanelGrid} from "./../../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../../globalsComponents/panels/PanelCenter"
import {Card} from "primereact/card"
import {InputText} from "primereact/inputtext"
import {InputNumber} from "primereact/inputnumber"
import {Password} from "primereact/password"
import {Button} from "primereact/button"
const Login=()=>{

    const logo= "https://convenio.opcionessacimex.com/img/logo.png"
    const start = ()=>{
        return (
            <>
            <div style={{width:"50rem"}}>
            <PanelGrid>
                    <div className="col-12 md:col-6">
                    <a href="https://convenio.opcionessacimex.com">
                        <img alt="logo" src={logo} heigth="80" width="250"></img>
                    </a>
                </div>
                <div className="col-12 md:col-6">
                    <PanelCenter>
                        <div className="mt-3">
                    <label className="text-xl mt-4 text-green-800">Tu crédito de confianza.</label>
                    </div>
                    </PanelCenter>
                    
                    
                </div>        
            </PanelGrid>
            </div>
            
            </>
        )
        
    }
    return (
        <>
            <Menubar start={start}/>
            <div className="mt-5">
            <PanelCenter>
                <Card className="m-6 w-30rem">
                    <form>
                        <PanelCenter>
                        <label className="text-2xl text-green-800 font-bold">Te damos la bienvenida a Sacimex</label>
                        </PanelCenter>
                        
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
                                <InputNumber placeholder="Convenio" useGrouping={false} />
                                <label htmlFor="pass" className="text-xl mb-4">Convenio</label>
                            </span>
                        </div>
                        <div className="col-12">
                            <PanelCenter className="mb-2">
                            <Button className="mb-2" label="Ingresar" severity="success" rounded />
                            <div className="mb-2">
                                ¿No tienes una cuenta?
                            </div>
                            <Button label="Regístrate" link />
                            <div className="mb-2">
                                ¿Olvidaste tu contraseña?
                            </div>
                            <Button label="Restablacer contraseña" link />
                            </PanelCenter>
                        </div>
                        </PanelGrid>
                        
                    </form>
                </Card>
            </PanelCenter>
            </div>
            
        </>
    )
}
export default Login