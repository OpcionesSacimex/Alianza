import {Children} from "react"
export const PanelCenter = ({children,id, className}) => {
    return (
        <div id={id} className="justify-content-center flex-wrap">
                {
                    Children.map(children, child =>
                        <div className={`flex align-items-center justify-content-center border-round ${className?className:''}`}>{child}</div>
                    )
                }
        </div>

    )
}
