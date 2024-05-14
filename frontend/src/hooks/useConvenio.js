import { useContext } from "react"
import ConvenioContext from "../context/ConvenioProvider"

export const useConvenio = ()=>useContext(ConvenioContext)