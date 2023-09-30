import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/error-page.jsx'
// import PenduSylvain from './components/PenduSylvain.jsx'
import Pendu from './components/Pendu.jsx'

const router = createBrowserRouter([
  {
    path:'/',
  element: <App/>,
    errorElement: <ErrorPage/>
  },
   {
     path:'/pendu',
     element: <Pendu/>,
    
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
  )
  