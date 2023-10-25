import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Skills from '../Pages/Skills'
const AnimatedRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default AnimatedRoutes