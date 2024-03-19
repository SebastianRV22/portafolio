import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import  Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </main>
      
      


     
  )
}

export default App