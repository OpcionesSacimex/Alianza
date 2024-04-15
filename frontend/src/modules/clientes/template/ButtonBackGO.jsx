import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "primereact/button"

export const ButtonBackGO=({go=false,back=false, onBack,onGo})=>{
    return (<>
    {
        back?<>
            <Button type="button" onClick={onBack} rounded text severity="info"> 
            <FontAwesomeIcon className="buttonsGreen" icon="fa-solid fa-circle-arrow-left" />         
        </Button>
        </>:<></>
    }
    {
        go?<>
        <Button type="button" onClick={onGo} rounded text severity="info"> 
            <FontAwesomeIcon className="buttonsGreen" icon="fa-solid fa-circle-arrow-right" />
        </Button>
    </>:<></>
    }
    </>
        
    )
}