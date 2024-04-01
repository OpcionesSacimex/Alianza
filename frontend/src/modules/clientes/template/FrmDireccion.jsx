import React, { useState } from "react"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { OpenMap } from "../../../globalsComponents/map/OpenMap"
export const FrmDireccion =({children,control,errors})=>{

    const [position,setPosition]=useState()

    return(
        <>
            <p className="text-center text-2xl text-green-800 font-bold">
                Ubicacion
            </p>
            <PanelGrid>
                <div className="col-12">
                    <OpenMap setPosition={setPosition} position={position}/>
                </div>
                <div className="col-6">

                </div>
                <div className="col-6">

                </div>
                <div className="col-6">

                </div>
                <div className="col-6">

                </div>
                <div className="col-6">

                </div>
            </PanelGrid>
        </>
    )
}