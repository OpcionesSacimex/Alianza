import { Toolbar } from "primereact/toolbar"
import { PanelGrid } from "../../../globalsComponents/panels/PanelGrid"
import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import { URLStorage } from "../../../utils/URLBackend"
import { Card } from "primereact/card"
export const Header = ({ id }) => {
    const logo = `${URLStorage}/img/image.png`
    const start = () => {
        return (
            <>
                <div style={{ width: "15rem" }}>
                    <PanelGrid>
                        <div className="col-12">
                            <a href="https://convenio.opcionessacimex.com">
                                <img className="h-1.5rem w-7rem" alt="logo" src={logo} ></img>
                            </a>
                        </div>
                    </PanelGrid>
                </div>
            </>
        )
    }
    const end = () => {
        return (
            <>
                <PanelCenter>
                    <div className="mt-0 text-8xl text-center">
                        <label className="font-bold text-white font-italic"> Tu crédito de confianza. </label>
                    </div>
                </PanelCenter>
            </>
        )
    }
    return (
        <div id={id}>
            <Card className="bg-green-800">
                <PanelGrid className="h-3rem">
                    <div className="col-6">
                        <img className="h-full w-full" alt="logo" src={logo} ></img>
                    </div>
                    <div className="col-6">
                        <div className="mt-5 text-center">
                            <label  className="font-bold text-3xl text-white font-italic"> Tu crédito de confianza. </label>
                        </div>
                    </div>
                </PanelGrid>
            </Card>
        </div>
    )

}