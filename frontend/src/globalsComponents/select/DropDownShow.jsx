import {InputText} from "primereact/inputtext"
import {Dropdown} from "primereact/dropdown"
import {Menu} from "primereact/menu"
import { OverlayPanel } from 'primereact/overlaypanel';
import { useEffect, useRef, useState } from "react";

export const DropDownAutoShow = ({onChangeInput,dropOnchange,options=[],optionLabel,optionValue})=>{
    const ov=useRef()
    const [model,setModel]=useState([])
    useEffect(()=>{
        const md= options.map(item=>{
            return({
                label:item[optionLabel],
                command:()=>{
                    dropOnchange({value:item[optionValue]})
                }
            })
        })
        setModel(md)
    },[options])
    return (
        <>
            <InputText onClick={(e)=>{
                ov.current.toggle(e)
            }} onChange={onChangeInput}></InputText>
            <OverlayPanel className="w-auto h-1" ref={ov} appendTo={'self'}>
                <Menu className="w-full" model={model}/>
            </OverlayPanel>
        </>
    )
}