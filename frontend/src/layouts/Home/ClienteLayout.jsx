import React, { useEffect } from "react"
import {useUserInfo} from "../../hooks/useUserAuth"
import { useOutlet } from "react-router";

const ClienteLayout = ()=>{
    const outlet = useOutlet();

    const {infoInfo,setUserInfo} = useUserInfo()
    
    console.log(infoInfo)


    return (
        <>
        {outlet}
        </>
    )
}

export default ClienteLayout