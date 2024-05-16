import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "primereact/button"

export const ButtonBackGO=({go=false,back=false, onBack,onGo, type="button"})=>{
    return (<>
    {
        back?<>
            <Button type="button" onClick={onBack} rounded text severity="info"> 
                <FontAwesomeIcon className="flechas" icon="fa-solid fa-circle-arrow-left" />         
            </Button>
        </>:<></>
    }
    {
        go?<>
            <Button type={type} onClick={onGo} rounded text severity="info"> 
                <FontAwesomeIcon className="flechas" icon="fa-solid fa-circle-arrow-right" />
            </Button>
    </>:<></>
    }
    </>
        
    )
}