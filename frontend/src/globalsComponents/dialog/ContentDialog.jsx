import {Dialog} from "primereact/dialog"
import React, {useState} from "react";
import {PanelCenter} from "../panels/PanelCenter";

export const ContentDialog = ({children,visible,onHide,footer,titulo,closable, className}) => {
    const [dialogWidth] = useState(null);

    const templateTitleDialog=()=>{
        return (
            <>
                <PanelCenter>
                    <div style={{width: dialogWidth}}>
                        {titulo}
                    </div>
                </PanelCenter>
            </>
        )
    }
    return (
        <>
            <Dialog visible={visible}
                    onHide={onHide}
                    headerStyle={{height:"2px"}}
                    style={{
                        maxWidth: "100%"
                    }}
                    footer={footer}
                    header={templateTitleDialog}
                    closable={closable}
                    closeOnEscape={closable}
                    headerClassName="headerDialog"
                    contentStyle={{padding:"0px"}}>
                {children}
            </Dialog>
        </>
    )
}
