import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {CompleteRegister} from "../components/CompleteRegister"
export const ClientesPage = () => {
    return (
        <div>
            <Routes>
                <Route path='solicitud' element={<CompleteRegister />}></Route>
                <Route path='*' element={<Navigate replace to="/dashboard/clientes/solicitud"/>}></Route>
            </Routes>
        </div>
    )
}
