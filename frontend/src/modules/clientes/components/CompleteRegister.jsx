
import React, { useState, useRef, } from 'react';
import { Steps } from 'primereact/steps';
import { PanelCenter } from '../../../globalsComponents/panels/PanelCenter';
import { Card } from 'primereact/card';
import { StepsModel } from "../../../globalsComponents/steps/StepsModel"
import { Divider } from 'primereact/divider';
import { FrmPersona } from '../template/FrmPersona'
import { FrmEconomico } from '../template/FrmEconomico'
import { FrmMontos } from "../template/FrmMontos";
import { useForm} from 'react-hook-form'
import { ButtonBackGO } from '../template/ButtonBackGO';
import { FrmSolicitud } from '../template/FrmSolicitud';
import { Ticket } from '../template/Ticket';
import { createSolicitud } from '../handle/handleCliente';
import { confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast"
import { classNames } from 'primereact/utils';
import { useNavigate } from 'react-router';
export const CompleteRegister = () => {
    const navigate = useNavigate()
    const { control, trigger, getValues, setValue, handleSubmit, reset, formState: { errors } } = useForm()
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null)
    const items = [
        {
            label: '1.Datos personales',
            icon: "file-lines",
            command: (e) => { },
            template: (item) => StepsModel(item, 0, activeIndex, setActiveIndex)
        }, {
            label: "2.Socioeconómico",
            icon: "comments-dollar",
            command: (e) => { },
            template: (item) => StepsModel(item, 1, activeIndex, setActiveIndex)
        }, {
            label: '3.Detalles del crédito',
            icon: "hand-holding-dollar",
            command: (e) => { },
            template: (item) => StepsModel(item, 2, activeIndex, setActiveIndex)
        }, {
            label: '4.Solicitud de crédito',
            icon: "file-invoice-dollar",
            command: (e) => { },
            template: (item) => StepsModel(item, 3, activeIndex, setActiveIndex)
        },
        
    ]

    const onBack = (e) => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }
    const onGo = (e) => {
        setActiveIndex(activeIndex+1)
    }

    const onSubmit = (data) => {
        confirmDialog({
            message: "¿Confirmar solicitud de crédito?",
            accept: (e) => { onAccept(data) },
            reject: onCancel
        })
    }
    const onCancel = () => {
        toast.current.show({ severity: 'warn', summary: 'Info', detail: 'Solicitud cancelada' })
    }
    const onAccept = async (data) => {
        const res = await createSolicitud(data)
        if(!res.error){
            navigate('/dashboard/clientes/parte2', { replace: true })
        }else{
            toast.current.show({ severity: 'error', summary: 'error', detail:res.error})
        }
        console.log(data)
        console.log(res)
    }

    return (
        <>
            <Toast ref={toast}></Toast>
            <PanelCenter>
                <div className={`card w-full ${activeIndex === 5 ? 'hidden' : ''}`}>
                    <Steps className='' model={items} activeIndex={activeIndex}
                        onSelect={(e) => setActiveIndex(e.index)} readOnly={false}>
                    </Steps>
                    <Divider className='border-green-800 border-3' layout='horizontal'>
                        <div className='w-full bg-green-800 h-full'>
                        </div>
                    </Divider>
                </div>

                <div className='w-full'>
                    
                        <PanelCenter>
                            <Card className='w-12 md:w-8 lg:w-7 xl:w-6 bg-gray-100'>
                                <div className={`${classNames({ 'hidden': activeIndex !== 0 })}`}>
                                    <FrmPersona onGo={onGo}>
                                    </FrmPersona>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} >
                                <div className={`${classNames({ 'hidden': activeIndex !== 1 })}`}>
                                    <FrmEconomico control={{...control}} errors={{...errors}} getValues={getValues} onGo={onGo}>
                                        <ButtonBackGO onBack={onBack} onGo={onGo} back={true} go={true} />
                                    </FrmEconomico>
                                </div>
                                <div className={`${classNames({ 'hidden': activeIndex !== 2 })}`}>
                                    <FrmMontos control={{...control}} errors={{...errors}} getValues={getValues} setValue={setValue}>
                                        <ButtonBackGO onBack={onBack} onGo={onGo} back={true} go={true} />
                                    </FrmMontos>
                                </div>
                                <div className={`${classNames({ 'hidden': activeIndex !== 3 })}`}>
                                    <FrmSolicitud control={{...control}} errors={{...errors}} getValues={getValues}>
                                        <ButtonBackGO onBack={onBack} back={true} onGo={onGo} go={true}/>
                                    </FrmSolicitud>
                                </div>
                                <div className={`${classNames({ 'hidden': activeIndex !== 4 })}`}>
                                    <Ticket getValues={getValues} setActiveIndex={setActiveIndex}>
                                    </Ticket>
                                </div>
                                </form>
                                
                            </Card>
                        </PanelCenter>
                </div>

            </PanelCenter>
        </>
    )
}