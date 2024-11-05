import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './Components/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Header/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'

import UserDtl from './Components/UserDtl/UserDtl.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/About',
        element: <About></About>
      },
      {
        path:'/Contact',
        element: <Contact></Contact>
      },
      {
        path:'/Users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDtl></UserDtl>
      }
     
    ]
    
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
