import React from 'react'
import { Header,Footer,FixedActionButtons } from './components'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
    <FixedActionButtons/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout