import React,{useState,createContext, useMemo} from "react"
const AutenticateContext = createContext()
export const AutenticateContextProvider = ({children})=>{
    const [userInfo,setUserInfo] = useState({})
    const value = useMemo(
        () => ({
            userInfo,
            setUserInfo
        }),
        [userInfo]
      )
    
    return <AutenticateContext.Provider value={value} >{children}</AutenticateContext.Provider>
}
export default AutenticateContext
