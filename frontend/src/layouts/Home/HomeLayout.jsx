import React from 'react'
import { useOutlet } from 'react-router-dom';
import {PanelGrid} from "./../../globalsComponents/panels/PanelGrid"
import {PanelCenter} from "./../../globalsComponents/panels/PanelCenter"
import { Toolbar } from 'primereact/toolbar';
        
const HomeLayout = () => {
    const outlet = useOutlet();
    const logo= "https://convenio.opcionessacimex.com/img/logo.png";
    const start = ()=>{
        return (
            <>
            <div style={{width:"13rem"}}>
            <PanelGrid>
                <div className="col-12 md:col-6">
                    <a href="https://convenio.opcionessacimex.com">
                        <img alt="logo" src={logo} heigth="80" width="250"></img>
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
                    <div className="">
                    <label className="text-xl mt-4 text-white">Tu crédito de confianza.</label>
                    </div>
                    </PanelCenter>    
                </div>  
            </>      
        )
    }
    return (
        <div> 
            <Toolbar className='bg-green-800' start={start} end={end}/>
            {outlet}
        </div>
    )
}

export default HomeLayout
