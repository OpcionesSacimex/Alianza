import { Divider } from "primereact/divider"
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"

export const Ticket = ({ children, control, errors, getValues }) => {

    return (
        <>
            <PanelCenter>
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
            </PanelCenter>
        </>
    )
}