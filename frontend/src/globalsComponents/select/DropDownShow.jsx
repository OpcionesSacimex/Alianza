import { InputText } from "primereact/inputtext"
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMountEffect } from "primereact/hooks";
import {IconField} from "primereact/iconfield"
import { InputIcon } from 'primereact/inputicon';
 
export const DropDownAutoShow = ({ onChangeInput, dropOnchange, options = [], optionLabel, optionValue }) => {
    const ov = useRef()
    const dd = useRef()
    const [query, setQuery] = useState('')
    const [model, setModel] = useState([])
    useEffect(() => {
        const md = options.map(item => {
            return ({
                label: item[optionLabel],
                [optionValue]: {
                    [optionValue]: item[optionValue],
                    label: item[optionLabel],
                }
            })
        })
        setModel(md)
    }, [options])
    return (
        <>
            <IconField iconPosition="right">
                <InputIcon>
                <FontAwesomeIcon icon="chevron-down"></FontAwesomeIcon>
                </InputIcon>
            
                <InputText className="dd-input" value={query} onClick={(e) => dd.current.show()}
                    onChange={e => {
                        setQuery(e.value)
                        onChangeInput(e)
                    }}></InputText>
            </IconField>

            <Dropdown className="dd-hidden" editable ref={dd} options={model} onChange={e => {
                const data = {
                    value: e.target.value[optionValue]
                }
                setQuery(e.target.value[optionLabel])
                dropOnchange(data)
                dd.current.hide()
            }} optionLabel={optionLabel} optionValue={optionValue}>

            </Dropdown>


        </>
    )
}