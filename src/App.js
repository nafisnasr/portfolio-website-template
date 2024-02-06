import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import ServiceSection from "./Components/ServiceSection/ServiceSection"
import Portfolio from './Components/Portfolio/Portfolio'
import "./App.css"
import Footer from './Components/Footer/Footer'
import ProgressBar from './Components/ProgressBar/ProgressBar'

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ServiceSection />
      <ProgressBar/>
      <Portfolio />
      <Footer/>
    </>
  )
}
