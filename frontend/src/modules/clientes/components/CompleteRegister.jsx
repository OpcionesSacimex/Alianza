
import React,{useState,useRef} from 'react';
import { Steps } from 'primereact/steps';
import { PanelCenter } from '../../../globalsComponents/panels/PanelCenter';
import {CreditoDeseado} from "../template/CreditoDeseado"
import { Card } from 'primereact/card';
import {StepsModel} from "../../../globalsComponents/steps/StepsModel"
import {useUpdateEffect} from "primereact/hooks"
import { Divider } from 'primereact/divider';
        
export const CompleteRegister =()=>{
    const [activeIndex, setActiveIndex] = useState(0);
    const [content,setContent]=useState(<></>)
    const toast = useRef(null);
    const items = [
        {
            label: 'Credito',
            icon: "comments-dollar",
            command: (e) => {},
            template:(item)=>StepsModel(item,0,activeIndex,setActiveIndex)
        },{
            label: 'Detalles del credito',
            icon: "hand-holding-dollar",
            command: (e) => {},
            template:(item)=>StepsModel(item,1,activeIndex,setActiveIndex)
        }
    ]
    useUpdateEffect(()=>{
        switch(activeIndex){
            case 1: setContent( <CreditoDeseado/>)
            break;
            case 2: setContent( <CreditoDeseado/>)
            break;
            default: setContent (<></>)
            break;
        }
    },[activeIndex])
    return (
        <>
            <PanelCenter>
                <div className="card mb-4 w-full">
                    <Steps className='' model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false}>   
                    </Steps>
                    <Divider className='border-green-800 border-3' layout='horizontal'>
                        <div className='w-full bg-green-800 h-full'>

                        </div>
                    </Divider>
                </div>
                
                <div>
                    <PanelCenter>
                        <Card>
                            {content}
                        </Card>
                    </PanelCenter>
                    
                </div>
                
            </PanelCenter>
        </>
    )
}