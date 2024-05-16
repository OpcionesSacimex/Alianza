import { PanelCenter } from '../../../globalsComponents/panels/PanelCenter';
import { Divider } from 'primereact/divider';
import { StepsModel2 } from "../../../globalsComponents/steps/StepsModel2";
import React, { useState, useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { Steps } from 'primereact/steps';

export const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);
  const items = [
    {
      label: 'Tu solicitud se ha enviado.',
      icon: "fa-paper-plane",
      command: (e) => { },
      template: (item) => StepsModel2(item, 0, activeIndex, setActiveIndex)
    },
    {
      label: 'Un asesor está revisando tu solicitud.',
      icon: "user-check",
      command: (e) => { },
      template: (item) => StepsModel2(item, 1, activeIndex, setActiveIndex)
    },
    {
      label: '¡Tu respuesta está lista!',
      icon: "handshake-simple",
      command: (e) => { },
      template: (item) => StepsModel2(item, 2, activeIndex, setActiveIndex)
    }
  ];
  return (
    <>
    <div className='mt-8 col-12 text-center'>
        <label className='col-12 text-md md:text-3xl'> ¡Gracias por tu preferencia!</label> <br></br>
        <label className='col-12 text-sm md: text-xl'> En breve le daremos respuesta a tu solicitud. </label>
    </div>
      <Toast ref={toast}></Toast>
      <div className={` ${activeIndex === 5 ? 'hidden' : ''};`}>
        <Steps className='h-12' model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false}>
        </Steps>

      </div>
    </>
  );
};
