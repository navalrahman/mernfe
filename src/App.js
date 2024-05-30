import { useEffect, useState } from 'react'
import Nav from './components/navbar/Nav'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signin from './components/Signin/Signin'
import { Toaster } from 'react-hot-toast';
import Mainpage from './components/Mainpage/Mainpage'

function App() {

  const token = localStorage.getItem('token')

  

  
  return (
    <>
    <BrowserRouter>
    <Toaster />
    <Nav/>
      <Routes>
        <Route path='/' element={ !token ? <Home/> : <Navigate to={'/home'} />} />
        <Route path='/signin' element={ !token ? <Signin/> : <Navigate to={'/home'} />} />
        <Route path='/home' element={ token ? <Mainpage/>: <Navigate to={'/'} />} /> 

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
