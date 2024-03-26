import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "primereact/button"

export const ButtonBackGO=({activeIndex, setActiveIndex, go=false,back=false})=>{
    return (<>
    {
        back?<>
            <Button type="button" onClick={(e)=>{
                if(activeIndex>0){
                    setActiveIndex(activeIndex-1)
                }
        }} rounded text severity="info"> 
            <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />         
        </Button>
        </>:<></>
    }
    {
        go?<>
        <Button type="button" onClick={(e)=>{
            setActiveIndex(activeIndex+1)
        }} rounded text severity="infjo"> 
            <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" />
        </Button>
    </>:<></>
    }
    </>
        
    )
}