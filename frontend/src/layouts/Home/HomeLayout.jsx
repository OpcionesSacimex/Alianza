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
            <div style={{width:"15rem"}}>
            <PanelGrid>
                <div className="col-12 md:col-2">
                    <a href="https://convenio.opcionessacimex.com">
                        <img className="md:h-3rem h-1.5rem md:w-15rem w-7rem" alt="logo" src={logo} ></img>
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
                <div className="">
                    <PanelCenter>
                    <div className="mt-0 md:text-2xl text-sm text-center">
                        <label className="font-bold text-white font-italic"> Tu crédito de confianza. </label>
                    </div>
                    </PanelCenter>    
                </div>  
            </>      
        )
    }
    return (
        <div> 
            <Toolbar className='bg-green-800 shadow-3 z-5 sticky top-0' style={{height:"6rem"}} start={start} end={end}/>
            {outlet}
        </div>
    )
}

export default HomeLayout
