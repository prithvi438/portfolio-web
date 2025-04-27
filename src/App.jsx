import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//importing bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';


//importing router 
import {  RouterProvider } from "react-router-dom";
import router from './router/AppRouter';
import AppNavbar from './Components/AppNavbar';
import AppFooter from './Components/AppFooter';



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
