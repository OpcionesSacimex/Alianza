
import React,{useState,useRef} from 'react';
import { Steps } from 'primereact/steps';
import { PanelCenter } from '../../../globalsComponents/panels/PanelCenter';
import {CreditoDeseado} from "../template/CreditoDeseado"
import { Card } from 'primereact/card';
import {StepsModel} from "../../../globalsComponents/steps/StepsModel"
import {useUpdateEffect} from "primereact/hooks"
import { Divider } from 'primereact/divider';
import {FrmPersona} from '../template/FrmPersona'
import {FrmEconomico} from '../template/FrmEconomico'
import { FrmMontos } from "../template/FrmMontos";
import {Controller,useForm} from 'react-hook-form'
import { ButtonBackGO } from '../template/ButtonBackGO';
import { FrmDireccion } from '../template/FrmDireccion';
import { FrmSolicitud } from '../template/FrmSolicitud';
import { Ticket } from '../template/Ticket';

export const CompleteRegister =()=>{
    const {control,getValues,setValue,handleSubmit, formState:{errors}}=useForm()
    const [activeIndex, setActiveIndex] = useState(0);
    const [content,setContent]=useState(<></>)
    const toast = useRef(null);
    const items = [
        {
            label: 'Datos Personales',
            icon: "file-lines",
            command: (e) => {},
            template:(item)=>StepsModel(item,0,activeIndex,setActiveIndex)
        },{
            label:"socio economico",
            icon:"comments-dollar",
            command:(e)=>{},
            template:(item)=>StepsModel(item,1,activeIndex,setActiveIndex)
        },{
            label: 'Detalles del credito',
            icon: "hand-holding-dollar",
            command: (e) => {},
            template:(item)=>StepsModel(item,2,activeIndex,setActiveIndex)
        },{
            label: 'Solicitud de credito',
            icon: "file-invoice-dollar",
            command: (e) => {},
            template:(item)=>StepsModel(item,3,activeIndex,setActiveIndex)
        },{
            label:"Direccion",
            icon:"map-location-dot",
            command:(e)=>{},
            template:(item)=>StepsModel(item,4,activeIndex,setActiveIndex)
        },
        {
            label:"Ticket",
            icon:"clipboard-check",
            command:(e)=>{},
            template:(item)=>StepsModel(item,5,activeIndex,setActiveIndex)
        }
    ]
    useUpdateEffect(()=>{
        switch(activeIndex){
            case 0: setContent(<FrmPersona control={control} errors={errors}>
                <ButtonBackGO setActiveIndex={setActiveIndex} activeIndex={activeIndex} go={true}/>
            </FrmPersona>)
            break;
            case 1: setContent(
            <FrmEconomico control={control} errors={errors}>
                <ButtonBackGO setActiveIndex={setActiveIndex} activeIndex={activeIndex} back={true} go={true}/>
            </FrmEconomico>)
            break;
            case 2: setContent(
            <FrmMontos control={control} errors={errors} getValues={getValues}>
                <ButtonBackGO setActiveIndex={setActiveIndex} activeIndex={activeIndex} back={true} go={true}/>
            </FrmMontos>)
            break;
            case 3: setContent(
                <FrmSolicitud control={control} errors={errors}>
                    <ButtonBackGO setActiveIndex={setActiveIndex} activeIndex={activeIndex} back={true} go={true}/>
                </FrmSolicitud>
            )
            break;
            case 4: setContent(
                <FrmDireccion control={control} errors={errors} getValues={getValues} setValue={setValue}>
                    <ButtonBackGO setActiveIndex={setActiveIndex} activeIndex={activeIndex} back={true} go={true}/>
                </FrmDireccion>)
                break;
            case 5: setContent(
                <Ticket control={control} errors={errors} getValues={getValues}>
                </Ticket>
            )
            break;
            default: setContent (<></>)
            
            break;
        }
    },[activeIndex])

    const onSubmit=(data)=>{
        console.log(data)
    }

    return (
        <>
            <PanelCenter>
                <div className="card w-full">
                    <Steps className='' model={items} activeIndex={activeIndex} 
                    onSelect={(e) => setActiveIndex(e.index)} readOnly={false}>   
                    </Steps>
                    <Divider className='border-green-800 border-3' layout='horizontal'>
                        <div className='w-full bg-green-800 h-full'>
                        </div>
                    </Divider>
                </div>
                
                <div className='w-full'>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <PanelCenter>
                            <Card className='w-12 md:w-8 lg:w-7 xl:w-6 bg-gray-100'>
                                {content}
                            </Card>
                        </PanelCenter>
                    </form>
                    
                </div>
                
            </PanelCenter>
        </>
    )
}