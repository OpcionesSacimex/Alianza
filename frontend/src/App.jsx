import React, {useContext, useEffect} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
import {AccesoPage} from "./modules/acceso/pages/AccesoPage"
import {ClientesPage} from "./modules/clientes/pages/ClientesPage"
import HomeLayout from "./layouts/Home/HomeLayout"
import DashBoardLayout from "./layouts/Home/DashBoardLayoout"
import AuthLaout from "./layouts/AuthLayout"
import Login from './modules/acceso/components/Login';
import Registrate from "./modules/acceso/components/Register"
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
          path:"login/",element:<Login/>
        },{
          path:"register/" ,element:<Registrate/>
        },{
          path: '*', element: <Navigate replace to="/home"/>
        }]
      },{
        path: "/dashboard/*", element: <AuthLaout/>,
      },{
        path:"/dashboard/clientes/*", element:<ClientesPage/>
      },{
        path:"*", element:<Navigate replace to="/home/login"/>
      }
    ]
  )
}

export default App;


/*
[{
          path: "/", element: <HomeLayout/>,
          children:[{
            path: "dashboard/", element: <DashBoardLayout/>,
            children=[{

            }]
          },{
            path:"clientes/*", element:<ClientesPage/>
          }]
        }]


        {

        path: "/", element: <AuthLaout/>,
        children:[{
            path: "/dashboard/", element: <DashBoardLayout/>,
            children:[{
              path:"clientes/*", element:<ClientesPage/>
            }]
        }]
      }
*/