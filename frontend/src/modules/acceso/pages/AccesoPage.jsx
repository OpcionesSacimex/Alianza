import React from 'react'
import { Navigate, Route, Routes, createBrowserRouter } from 'react-router-dom'
import Login from "../components/Login"
import Register from "../components/Register"
import { ValidateUser } from '../components/ValidateUser'
import { loader } from '../components/TokenCorreo'
import { ResetPassword } from '../components/ResetPassword'
export const AccesoPage = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/validate/:token' element={<ValidateUser/>} loader={loader} ></Route>
            <Route path='/reset/:token' element={<ResetPassword/>} loader={loader} ></Route>
            <Route path='*' element={<Navigate replace to="/home/login"/>}></Route>
        </Routes>
    )
}
