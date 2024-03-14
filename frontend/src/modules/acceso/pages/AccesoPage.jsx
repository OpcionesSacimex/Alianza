import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from "../components/Login"
import Register from "../components/Register"
export const AccesoPage = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='*' element={<Navigate replace to="/login"/>}></Route>
            </Routes>
        </div>
    )
}
