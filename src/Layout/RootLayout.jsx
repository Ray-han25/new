import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    
    
    </>
  )
}

export default RootLayout