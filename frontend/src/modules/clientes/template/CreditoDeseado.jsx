import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import {Card} from "primereact/card"
import {InputNumber} from "primereact/inputnumber"
export const CreditoDeseado =()=>{
    return (
        <>
         <PanelCenter>
            <label className="text-xl mb-4">Credito maximo</label>
                <label className="text-green-800 font-bold">$500,000.00 MXN</label>
                    <div className="mt-5">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon text-green-900 font-bold">$</span>
                                <span className="p-float-label">
                                    <InputNumber placeholder="Monto" />
                                    <label className="text-xl">Monto solicitado</label>
                                </span>
                            <span className="p-inputgroup-addon text-green-900 font-bold">.00</span>
                        </div>
                    </div>
            </PanelCenter>
        </>
    )
}