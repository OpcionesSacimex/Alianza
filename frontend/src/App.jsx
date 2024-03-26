import React, {useContext, useEffect} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
import {AccesoPage} from "./modules/acceso/pages/AccesoPage"
import {ClientesPage} from "./modules/clientes/pages/ClientesPage"
import HomeLayout from "./layouts/Home/HomeLayout"
import AuthLaout from "./layouts/AuthLayout"
import ClienteLayout from "./layouts/Home/ClienteLayout"
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faComments,faHandHoldingDollar,faCommentsDollar, faCircleArrowRight
} from '@fortawesome/free-solid-svg-icons'
library.add(faComments,faHandHoldingDollar,faCommentsDollar,faCircleArrowRight)
function App() {
  return useRoutes(
    [
      {
        path: '/home', element: <HomeLayout/>,
        children:[{
          path:"/home/*", element: <AccesoPage/>
        }]
      },{
        path: "dashboard/", element: <AuthLaout/>,
      },{
        path:"dashboard/", element:<ClienteLayout/>,
        children:[{
          path: "clientes/*",element:<ClientesPage/>
        }]
      },{
        path:"*", element:<Navigate replace to="/home/login"/>
      }
    ]
  )
}

export default App;