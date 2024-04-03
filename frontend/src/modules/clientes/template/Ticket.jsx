import { Divider } from "primereact/divider"
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { Button } from "primereact/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PRINT from "print-js"
import { Header } from "./Header"
import { Card } from "primereact/card"
import moment from "moment"
import "moment/locale/es"
export const Ticket = ({ getValues, setActiveIndex }) => {

    const print = (e) => {
        const ticket = document.createElement('div')
        //obtener
        const d = document.getElementById('fecha')
        const h = document.getElementById('header')
        const ca = document.getElementById('card-p')
        const c = document.getElementById('comprobante')
        //clonar
        const date = d.cloneNode(true)
        const header = h.cloneNode(true)
        const card = ca.cloneNode(true)
        const compro = c.cloneNode(true)
        //generar
        card.appendChild(compro)

        ticket.append(date)
        ticket.append(header)
        ticket.append(card)
        
        PRINT({
            printable: ticket, type: 'html', css: [
                'https://unpkg.com/primereact@10.6.2/resources/themes/lara-light-indigo/theme.css',
                'https://unpkg.com/primeflex@latest/primeflex.css',
            ]
        })
    }

    const Comprobante = () => {
        return (
            <>
                <div className="hidden">
                    <div id="fecha">
                        {moment().locale('es').format('LLL')}
                    </div>
                    <Header id="header" ></Header>
                    <Card id="card-p" className="bg-gray-200"></Card>
                </div>
                <PanelCenter id="comprobante">
                    <p className="text-center text-xl text-green-800 font-bold">
                        Monto actual
                    </p>
                    <label>${parseFloat(getValues('economico.prestamo_f')).toFixed(2)}</label>
                    <p className="text-center text-xl text-green-800 font-bold">
                        A un plazo de:
                    </p>
                    <label>{getValues('plazo') * 2} quincenas / {getValues('plazo')} meses </label>
                    <div className="w-full">
                        <Divider className='border-green-800 border-3' layout='horizontal'>
                            <div className='w-full bg-green-800 h-full'>
                            </div>
                        </Divider>
                    </div>
                    <p className="text-center text-xl">
                        2 Pagos retenidos:
                    </p>
                    <p className="text-center text-xl">
                        Cobertura de riesgo:
                    </p>
                    <p className="text-center text-xl">
                        Consulta a buro de credito: $30.00
                    </p>
                    <div className="w-full">
                        <Divider className='border-green-800 border-3' layout='horizontal'>
                            <div className='w-full bg-green-800 h-full'>
                            </div>
                        </Divider>
                    </div>
                    <p className="text-center text-xl text-green-800 font-bold">
                        Recibes
                    </p>
                    <p className="text-center text-xl">
                        Pagando quincenalmente:
                    </p>
                    <div className="w-full">
                        <Divider className='border-green-800 border-3' layout='horizontal'>
                            <div className='w-full bg-green-800 h-full'>
                            </div>
                        </Divider>
                    </div>
                </PanelCenter>
            </>
        )
    }

    return (
        <>
            <Comprobante />
            <PanelCenter>
                <PanelGrid className="mt-6">
                    <div className="col-fixed">
                        <Button onClick={print} type="button" className="flex-wrap align-items-center justify-content-center">
                            <FontAwesomeIcon icon="print"></FontAwesomeIcon>
                            Guardar solicitud
                        </Button>
                    </div>
                    <div className="col">
                        <Button onClick={(e) => setActiveIndex(0)} type="button" className="flex-wrap align-items-center justify-content-center">
                            <FontAwesomeIcon icon="pencil-square" />Editar
                        </Button>
                    </div>
                    <div className="col">
                        <Button className="flex-wrap align-items-center justify-content-center">
                            <FontAwesomeIcon icon="paper-plane" />
                            Enviar
                        </Button>
                    </div>
                </PanelGrid>
            </PanelCenter>
        </>
    )
}