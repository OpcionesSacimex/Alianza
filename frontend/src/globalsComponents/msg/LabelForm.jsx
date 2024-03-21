import {classNames} from "primereact/utils";
import React, {useState} from "react";
import {useMountEffect, useUpdateEffect} from "primereact/hooks";
export const LabelForm = ({children,htmlFor,status, required}) => {
    return (
        <>
            <label htmlFor={htmlFor} className={`text-xl ${classNames({ 'p-error': status })}`}>
                {children}
                {
                    required? <span className="p-error"> *</span> : <></>
                }
            </label>
        </>
    )
}


export const ErrorLabel=({name,errors,className})=> {
    const [nombre, setNombre] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const obtener =async ()=>{
        let array = name.split(".")
        let n = [...nombre]
        for(let i=0;i<array.length;i++){
            n=`${n}?.${array[i]}`
        }
        return n
    }
    useUpdateEffect(()=>{
        let dato = {...errorMsg}

        // eslint-disable-next-line no-eval
        eval(`dato = errors${nombre}?.message`)
        setErrorMsg(dato)
    },[errors])
    useMountEffect(()=>{
        const cargar = async ()=>{
            setNombre(await obtener())
        }
        cargar()
    })
    return (
        <small className={`p-error text-xl ${className?className:''}`}>
            {errorMsg}
        </small>
    )
}