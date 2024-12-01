import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import Update from './components/Update.jsx';
import Signin from './components/Signin.jsx';
import MainLayout from './components/MainLayout.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import SignUp from './components/SignUp.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
 
      {
        path: "/",
        element: <App></App>,
        loader:()=>fetch("http://localhost:5000/addCoffee")
      },
      {
        path:"/addCoffee",
        element:<AddCoffee></AddCoffee>,
       
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/addCoffee/${params.id}`)
      },
      {
        path:"signin",
        element:<Signin></Signin>
      },
      {
        path:"signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader:()=> fetch("http://localhost:5000/users")
      }
   
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
