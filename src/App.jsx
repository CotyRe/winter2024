import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiPrimerComponente from './MiPrimerComponente'
import ComponenteLoco from './ComponenteLoco'

function App() {
  
  return (
    <>
      <h1>Hola mundo desde React !!!</h1>
      <p>
        Gracias por tanto Vite y React
      </p>
      <MiPrimerComponente></MiPrimerComponente>
      <ComponenteLoco></ComponenteLoco>
    </>
  )
}

export default App
