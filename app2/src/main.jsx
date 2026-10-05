import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Child from './Child.jsx'
import Notfound from './Notfound.jsx'

const router = createBrowserRouter([{
  path: "/",
  Component:App
}, {
  path: "/home/:id",
  Component:Navbar
  }, {
  path: "/child",
    Component:Child
  }, {
  path: "*",
    Component:Notfound
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
