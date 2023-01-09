import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../styles/App.css'
import Navbar from '../components/Navbar'
import Inicio from '../components/Inicio'
import Cultos from '../components/Cultos'
import Localidade from '../components/Localidade'
import Rodape from '../components/Rodape'
import Top from '../components/Top'

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Inicio/>
      <Top/>
      <Cultos/>
      <Localidade/>
      <Rodape/>
    </React.Fragment>
  )
}

export default App
