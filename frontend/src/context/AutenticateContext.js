import React,{useState,createContext} from "react"

const AutenticateContext = createContext()
export const AutenticateContextProvider = ({children})=>{
    const [infoInfo,setUserInfo] = useState({})
    return <AutenticateContext.Provider value={{infoInfo,setUserInfo}} >{children}</AutenticateContext.Provider>
}
export default AutenticateContext
