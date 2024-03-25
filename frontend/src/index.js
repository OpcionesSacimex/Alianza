import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {PrimeReactProvider} from "primereact/api"
import { ConfirmDialog } from 'primereact/confirmdialog';
import {AutenticateContextProvider} from "./context/AutenticateContext"
import {TokenProvider} from "./context/TokenProvider"
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
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