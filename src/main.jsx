import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './MainRoot/MainRoot.jsx'
import AuthContext from './AuthContext/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext><RouterProvider router={router}></RouterProvider></AuthContext>
  </React.StrictMode>,
)
