import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from "../components/Login"

export const AccesoPage = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />}></Route>
            </Routes>
        </div>
    )
}
