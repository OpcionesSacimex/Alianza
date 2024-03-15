import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import {Card} from "primereact/card"
import {InputNumber} from "primereact/inputnumber"
export const CreditoDeseado =()=>{
    return (
        <>
         <PanelCenter>
            <Card>
                <PanelCenter>
                    <label>Credito maximo</label>
                    <label>$500,000.00 MXN</label>
                    <div className="mt-5">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">$</span>
                                <InputNumber placeholder="Monto" />
                        </div>
                    </div>
                </PanelCenter>
            </Card>
         </PanelCenter>
        </>
    )
}