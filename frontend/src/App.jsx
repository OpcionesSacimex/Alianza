import React, {useContext, useEffect} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
import {AccesoPage} from "./modules/acceso/pages/AccesoPage"
import HomeLayout from "./layouts/Home/HomeLayout"
function App() {
  return useRoutes(
    [
      {
        path: '/', element: <HomeLayout/>,
        children:[{
          path:"/*", element: <AccesoPage/>
        }]
      },{
        path:"*", element:<Navigate replace="/login"/>
      }
    ]
  )
}

export default App;
