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
import { useState } from "react"
import { useMountEffect, useUpdateEffect } from "primereact/hooks"
import { getConvenioCliente } from "../handle/handleCliente"
import { calcularInteres, calcularQuincena } from "../../../utils/calcule/Creditos"
import { useUserInfo } from "../../../hooks/useUserAuth"
import { useNavigate } from "react-router"
export const Ticket = ({ getValues, setActiveIndex }) => {
    const navigate=useNavigate()
    const {userInfo,} = useUserInfo()
    const [convenio,setConvenio] = useState(undefined)
    const [prestamo,setPrestamo] = useState(0)
    const [retencion,setRetencion] = useState(0)
    const [quincena,setQuincena] = useState(0)

    const nf = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency:"USD"
      }) 

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
    const getAndSetConvenio=async()=>{
        const res = await getConvenioCliente(userInfo?.convenio)
        if(!res.error){
            setConvenio(res)
        }else{

        }
    }
    useUpdateEffect(()=>{
        const pres =  getValues('economico.prestamo_f')
        const preF = parseFloat(calcularInteres(pres,(convenio?.tasa || 26.4)/100,getValues("plazo")))

        const reten = (calcularQuincena(preF,getValues("plazo"))*(convenio?.retenciones || 0))

        setQuincena(calcularQuincena(preF,getValues("plazo")))
        setRetencion(reten)
        setPrestamo(preF)
    },[getValues('economico.prestamo_f'),getValues('plazo')])
    useMountEffect(()=>{
        const obtener = async()=>{
            await getAndSetConvenio()
        }
        obtener()
    })

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
                        Monto actual:
                    </p>
                    <label>{nf.format(prestamo)}</label>
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
                        {convenio?.retenciones} Pagos retenidos: {nf.format(retencion)}
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
                        Recibes: {nf.format(prestamo-retencion)}
                    </p>
                    <p className="text-center text-xl">
                        Pagando quincenalmente: {nf.format(quincena)}
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
                        <Button type="button" onClick={(e)=>{
                            navigate('/dashboard/clientes/parte2',{replace:true})}} className="flex-wrap align-items-center justify-content-center">
                            <FontAwesomeIcon icon="paper-plane" />
                            Enviar
                        </Button>
                    </div>
                </PanelGrid>
            </PanelCenter>
        </>
    )
}