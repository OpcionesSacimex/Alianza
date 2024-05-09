import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {PrimeReactProvider} from "primereact/api"
import { ConfirmDialog } from 'primereact/confirmdialog';
import {AutenticateContextProvider} from "./context/AutenticateContext"
import {TokenProvider} from "./context/TokenProvider"
import './App.css';
import { loader } from './modules/acceso/components/TokenCorreo';
import { ValidateUser } from './modules/acceso/components/ValidateUser';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/home/validate/:token",
    loader: loader,
    element: ValidateUser,
  },]
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <AutenticateContextProvider>
          <PrimeReactProvider>
            
            <>
              <ConfirmDialog/>
              <App/>
            </>
            
          </PrimeReactProvider>
        </AutenticateContextProvider>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
)

/**
 <RouterProvider router={createBrowserRouter([{
                    path: "/validate/:token",
                    loader: loader,
                    element: <ValidateUser />,
                }])} />
 */