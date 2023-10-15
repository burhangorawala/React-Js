// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)


//   return (
//     <>
  
//     </>
//   )
// }

// export default App

import React from 'react';
import './App.css'; // You can style your components in App.css
import CurrencySelect from './Components/CurrencySelect';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>Currency Converter App</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
