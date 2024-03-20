import React from 'react'
import { useOutlet } from 'react-router-dom';
import {PanelGrid} from "./../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../globalsComponents/panels/PanelCenter"
import { Toolbar } from 'primereact/toolbar';
import {URLStorage} from "../../utils/URLBackend"
const HomeLayout = () => {
    const outlet = useOutlet();
    const logo= `${URLStorage}/img/image.png`
    const start = ()=>{
        return (
            <>
            <div style={{width:"13rem"}}>
            <PanelGrid>
                <div className="col-12 md:col-6">
                    <a href="https://convenio.opcionessacimex.com">
                        <img alt="logo" src={logo} height="42" width="220"></img>
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
                    <div className="mt-0">
                    <label className="text-2xl font-bold text-white font-italic"> Tu crédito de confianza. </label>
                    </div>
                    </PanelCenter>    
                </div>  
            </>      
        )
    }
    return (
        <div> 
            <Toolbar className='bg-green-800 shadow-3 sticky top-0' style={{height:"5rem"}} start={start} end={end}/>
            {outlet}
        </div>
    )
}

export default HomeLayout
