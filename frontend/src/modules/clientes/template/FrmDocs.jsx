import React from 'react';
import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';
import { URLStorage } from "../../../utils/URLBackend";
import { PanelGrid } from '../../../globalsComponents/panels/PanelGrid';
import { FileUpload } from 'primereact/fileupload';

export const FrmDocs = () => {
    const documents = [
        {
            name: 'Comprobante de ingresos.',
            image: 'x.png',
        },
        {
            name: 'INE',
            image: 'ine.png',
        },
        {
            name: 'Acta de nacimiento.',
            image: 'acta.jpg',
        },
        {
            name: 'CURP.',
            image: 'curp.png',
        },
        {
            name: 'Constancia de Situación Fiscal.',
            image: 'CSF6.jpg',
        },
        {
            name: 'Sube una foto de frente, del torzo hacia arriba.',
            image: 'retrato.png',
        },
    ];    

    const documentsTemplate = (document) => {
        return (
                <div className="h-full w-full bg-white surface-border border-round text-center " key={document.name}>
                <PanelGrid>
                    <div className='col-5'>
                        <img src={`${URLStorage}/img/${document.image}`} alt={document.name} className="w-full h-full" />
                    </div>
                    <div className='col-7'>
                        <h4 className="text-md">{document.name}</h4>
                        <div className="flex flex-wrap justify-content-center">
                            <FileUpload chooseLabel='Abrir archivo' uploadLabel='Subir ' name="demo[]" url={'/api/upload'} accept="/*" maxFileSize={1000000} emptyTemplate={<p className="m-0"></p>} />
                        </div>
                    </div>
                </PanelGrid>
                </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Carousel value={documents} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px" itemTemplate={documentsTemplate} />
        </div>
    );
};
