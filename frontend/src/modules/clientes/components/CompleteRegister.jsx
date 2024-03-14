
import React,{useState,useRef} from 'react';
import { Steps } from 'primereact/steps';
import { PanelCenter } from '../../../globalsComponents/panels/PanelCenter';
import {CreditoDeseado} from "../template/CreditoDeseado"
        
export const CompleteRegister =()=>{
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: 'Credito',
            command: (e) => {},
        },{
            label: 'Detalles del credito',
            command: (e) => {},
        }
    ]
    return (
        <>
            <PanelCenter>
                <div className="card">
                    <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false}>
                        
                    </Steps>
                    <CreditoDeseado/>
                </div>
            </PanelCenter>
        </>
    )
}