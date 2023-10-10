import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Route from './Route/Route';
import Provider from './Provider/Provider';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={Route}></RouterProvider>          
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
