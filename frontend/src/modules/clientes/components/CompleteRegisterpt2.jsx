import React, { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form'
import { ButtonBackGO } from '../template/ButtonBackGO';
import { FrmDireccion } from '../template/FrmDireccion';
import { FrmSolicitud } from '../template/FrmSolicitud';
import { Toast } from 'primereact/toast';
import { PanelCenter } from '../../../globalsComponents/panels/PanelCenter';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { StepsModel } from "../../../globalsComponents/steps/StepsModel"
import { confirmDialog } from "primereact/confirmdialog";
import { Card } from 'primereact/card';
import { Steps } from 'primereact/steps';
import { createCliente } from '../handle/handleCliente';
import { FrmDocs } from '../template/FrmDocs';

export const CompleteRegisterpt2 = () => {

    const { control, trigger, getValues, setValue, handleSubmit, reset, formState: { errors } } = useForm()
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null)
    const items = [
        {
            label: "Dirección",
            icon: "map-location-dot",
            command: (e) => { },
            template: (item) => StepsModel(item, 0, activeIndex, setActiveIndex)
        },
        {
            label: 'Sube tus documentos',
            icon: "file-invoice-dollar",
            command: (e) => { },
            template: (item) => StepsModel(item, 1, activeIndex, setActiveIndex)
        }, 
    ]

    const onBack = (e) => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }
    const onGo = (e) => {
        trigger()
        setActiveIndex(activeIndex + 1)
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
        const res = await createCliente(data)
        console.log(data)
        console.log(res)

    }

    return (
        <>
            <Toast ref={toast}></Toast>
            <PanelCenter>
                <div className={`card w-full ${activeIndex === 3 ? 'hidden' : ''}`}>
                    <Steps className='' model={items} activeIndex={activeIndex}
                        onSelect={(e) => setActiveIndex(e.index)} readOnly={false}>
                    </Steps>
                    <Divider className='border-green-800 border-3' layout='horizontal'>
                        <div className='w-full bg-green-800 h-full'>
                        </div>
                    </Divider>
                </div>
                <div className='w-full'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <PanelCenter>
                            <Card className='w-12 md:w-8 lg:w-7 xl:w-6 bg-gray-100'>
                                <div className={`${classNames({ 'hidden': activeIndex !== 0 })}`}>
                                    {
                                        activeIndex === 0 ? <>
                                            <FrmDireccion control={control} errors={{ ...errors }} getValues={getValues} setValue={setValue}>
                                                <ButtonBackGO onBack={onBack} onGo={onGo} back={true} go={true} />
                                            </FrmDireccion>
                                        </> : <></>
                                    }
                                </div>
                                <div className={`${classNames({ 'hidden': activeIndex !== 1 })}`}>
                                    <FrmDocs control={control} errors={{ ...errors }} getValues={getValues}>
                                        <ButtonBackGO onBack={onBack} onGo={onGo} back={true} go={true} />
                                    </FrmDocs>
                                </div>
                            </Card>
                        </PanelCenter>
                    </form>
                </div>
            </PanelCenter>
        </>
    )
}