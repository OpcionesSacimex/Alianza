import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {PrimeReactProvider} from "primereact/api"
import { ConfirmDialog } from 'primereact/confirmdialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PrimeReactProvider>
      <>
        <ConfirmDialog/>
        <App/>
      </>
    </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
)