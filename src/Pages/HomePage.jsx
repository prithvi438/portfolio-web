import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNavbar from '../Components/AppNavbar'
import AppFooter from '../Components/AppFooter'

const HomePage = () => {
  return (
    <div>
      <AppNavbar/>
      <Outlet/>
      <AppFooter/>
    </div>
  )
}

export default HomePage
