import { Bienvenida } from "../components/Bienvenida"
import { Navigate, Route, Routes } from "react-router-dom"
export const AsesoresPage = () => {
    return (
        <div>
            <Routes>
                <Route path='home' element={<Bienvenida/>}></Route>
                <Route path='*' element={<Navigate replace to="/dashboard/asesores/home"/>}></Route>
            </Routes>
        </div>
    )
}
