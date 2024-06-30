import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './Nav.css'
// import './Login.css'
import Navbar from './components/navbar'
import Login from './components/login'
import Signup from './components/Signup'
import VideoList from './components/VideoList';


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Navbar/>}/>
        <Route path="/video" element ={<VideoList/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
