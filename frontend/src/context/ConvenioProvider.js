import React, { createContext, useMemo, useState } from "react";

const ConvenioContext = createContext();

export const ConvenioProvider = ({children})=>{
    const [convenio,setConvenio] = useState({})

    const value = useMemo(
        () => ({
            convenio,
            setConvenio
        }),
        [{...convenio}]
      )

    return <ConvenioContext.Provider value={value}>{children}</ConvenioContext.Provider>
}

export default ConvenioContext