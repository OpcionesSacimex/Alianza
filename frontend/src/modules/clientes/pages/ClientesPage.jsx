import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {CompleteRegister} from "../components/CompleteRegister"
import { CompleteRegisterpt2 } from '../components/CompleteRegisterpt2'
import {Process} from '../template/Process'
export const ClientesPage = () => {
    return (
        <div>
            <Routes>
                <Route path='solicitud' element={<CompleteRegister/>}></Route>
                <Route path='parte2' element={<CompleteRegisterpt2/>}></Route>
                <Route path='parte3' element={<Process/>}></Route>
                <Route path='*' element={<Navigate replace to="/dashboard/clientes/solicitud"/>}></Route>
            </Routes>
        </div>
    )
}
