import React, {useContext, useEffect} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
import {AccesoPage} from "./modules/acceso/pages/AccesoPage"
import {ClientesPage} from "./modules/clientes/pages/ClientesPage"
import HomeLayout from "./layouts/Home/HomeLayout"

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faComments
} from '@fortawesome/free-solid-svg-icons'
library.add(faComments)
function App() {
  return useRoutes(
    [
      {
        path: '/', element: <HomeLayout/>,
        children:[{
          path:"/*", element: <AccesoPage/>
        }]
      },{
        path: "/clientes", element: <HomeLayout/>,
        children:[{
          path:"clientes/*", element:<ClientesPage/>
        }]
      },{
        path:"*", element:<Navigate replace="/login"/>
      }
    ]
  )
}

export default App;
