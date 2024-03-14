import React from 'react'
import {Menubar} from "primereact/menubar"
import { useOutlet } from 'react-router-dom';
import {PanelGrid} from "./../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../globalsComponents/panels/PanelCenter"
const HomeLayout = () => {
    const outlet = useOutlet();
    const logo= "https://convenio.opcionessacimex.com/img/logo.png";
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
        <div>
            <Menubar start={start}/>
            {outlet}
        </div>
    )
}

export default HomeLayout
