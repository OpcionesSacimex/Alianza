import {Children} from "react"
export const PanelCenter = ({children, className}) => {
    return (
        <div className="justify-content-center flex-wrap">
                {
                    Children.map(children, child =>
                        <div className={`flex align-items-center justify-content-center border-round ${className?className:''}`}>{child}</div>
                    )
                }
            </div>

    )
}
