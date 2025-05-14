import React from 'react'
import "./App.css"
import SuperHeader from './SuperComponents/SuperHeader'
import AboutMobile from './Components/AboutMobile'
import Technologies from './Components/TechnologiesMobile'
import SuperBody from './SuperComponents/SuperBody'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <SuperHeader />
    <SuperBody />
    <Technologies />
    <Footer />
   </>
  )
} 

export default App

