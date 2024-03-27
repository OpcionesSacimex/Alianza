import React,{useState,createContext} from "react"

const AutenticateContext = createContext()
export const AutenticateContextProvider = ({children})=>{
    const [userInfo,setUserInfo] = useState({})
    return <AutenticateContext.Provider value={{userInfo,setUserInfo}} >{children}</AutenticateContext.Provider>
}
export default AutenticateContext
