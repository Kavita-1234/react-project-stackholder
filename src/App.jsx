import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from './pages/Home'
import Service from "./pages/Service"
import About from './About'
import Contact from './Contact'
import './App.css'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />



    </>
  )
}


