import { useState } from 'react'

import './App.css'
import CurrencyCoverter from './Components/CurrencyCoverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='mainApp'>
    <h1>Currency Converter using API call</h1>

      <div id='converter'>
      <CurrencyCoverter/>

      </div>

    </div>

   
    </>
  )
}

export default App
