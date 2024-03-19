import React from 'react'
import { useOutlet } from 'react-router-dom';
import {PanelGrid} from "./../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../globalsComponents/panels/PanelCenter"
import { Toolbar } from 'primereact/toolbar';
import {URLStorage} from "../../utils/URLBackend"
const HomeLayout = () => {
    const outlet = useOutlet();
    const start = ()=>{
        return (
            <>
            <div style={{width:"13rem"}}>
            <PanelGrid>
                <div className="col-12 md:col-6">
                    <a href="https://convenio.opcionessacimex.com">
                        <img alt="logo" src={image} heigth="70" width="240"></img>
                    </a>
                </div>
            </PanelGrid>
            </div>
            </>
        )
    }
    const end =() => {
        return (
            <>
                <div className="col-12">
                    <PanelCenter>
                    <div className="mt-2">
                    <label className="text-2xl font-bold text-white font-italic"> Tu crédito de confianza. </label>
                    </div>
                    </PanelCenter>    
                </div>  
            </>      
        )
    }
    return (
        <div> 
            <Toolbar className='bg-green-800 shadow-3' start={start} end={end}/>
            {outlet}
        </div>
    )
}

export default HomeLayout
