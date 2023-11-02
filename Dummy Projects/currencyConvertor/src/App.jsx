

import React from 'react';
import './App.css'; // You can style your components in App.css
import CurrencySelect from './Components/CurrencySelect';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  return (
    <div className="App w-full h-full bg-slate-500 p-7 m-7 rounded-xl ">
      <h1 className='text-3xl font-bold '>Currency Converter App</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
