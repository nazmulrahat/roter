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
import Error from './Components/Error/Error.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'

import UserDtl from './Components/UserDtl/UserDtl.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDtl from './Components/PostDtl/PostDtl.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
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
      },
      {
        path:'/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        ,
        element: <PostDtl></PostDtl>
      },
     
    ]
    
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
