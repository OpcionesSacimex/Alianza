import React from 'react';
import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';
import { URLStorage } from "../../../utils/URLBackend";
import { PanelGrid } from '../../../globalsComponents/panels/PanelGrid';
export const FrmDocs = () => {
    const documents = [
        {
            name: 'Comprobante de ingresos.',
            notdefined: 'por definir valor',
            image: 'x.png',
        },
        {
            name: 'INE',
            notdefined: 'por definir valor',
            image: 'ine.png',
        },
        {
            name: 'Acta de nacimiento.',
            notdefined: 'por definir valor',
            image: 'acta.jpg',
        },
        {
            name: 'CURP.',
            notdefined: 'por definir valor',
            image: 'curp.png',
        },
        {
            name: 'Constancia de Situación Fiscal.',
            notdefined: 'por definir valor',
            image: 'CSF6.jpg',
        },
        {
            name: 'Sube una foto de frente, del torzo hacia arriba.',
            notdefined: 'por definir valor',
            image: 'retrato.png',
        },
    ];    

    const documentsTemplate = (document) => {
        return (
            <PanelGrid>
                <div className="col-12 bg-white border-1 surface-border border-round text-center h-auto" key={document.name}>
                    <div>
                        <img src={`${URLStorage}/img/${document.image}`} alt={document.name} className="w-6 col-4 h-auto" />
                    </div>
                    <div>
                        <h4 className="text-md">{document.name}</h4>
                        <div className="mt-2 flex flex-wrap gap-2 justify-content-center">
                            <Button icon="pi pi-search" className="p-button p-button-rounded" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                        </div>
                    </div>
                </div>
            </PanelGrid>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Carousel value={documents} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px" itemTemplate={documentsTemplate} />
        </div>
    );
};
