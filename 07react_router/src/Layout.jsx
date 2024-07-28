// sometimes , this file is named as Route.jsx
//THIs file is used in place of APP.JSX , it means that main.jsx will render LAYOUT.JSX 
//we could use APP.JSX , no need to make new file eg.Layout.jsx/Route.jsx

import React from 'react'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'  // e.g-- in web, navbar is fixed,footer is fixed , only middle part changes so..outlet is used when things get changed
import Header from './components/header/Header'

export default function Layout() {
  return (
    <>
    <Header></Header>
   <Outlet></Outlet>     {/*This outlet will take Layout as base of the web */}
    <Footer></Footer>
    </>
  )
}
