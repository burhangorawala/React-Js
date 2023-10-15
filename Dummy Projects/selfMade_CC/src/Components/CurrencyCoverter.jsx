import React from 'react'
import CurrencySelect from './CurrencySelect'
import { useEffect } from 'react'
import { useState } from 'react';
import Result from './Result';

function CurrencyCoverter() {

  const [exchangeRates, setexchangeRates] = useState({});
  const [amout, setAmout] = useState(1);
  const [convertedAmount, setconvertedAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");


  const fetchExchangeRates = () => {

    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=99d075e3c3b41aa286f6e9c47722bd11&format=1")
    .then((resp)=> resp.json())
    .then((data)=> setexchangeRates(data.rates))
    .catch((error)=>
        console.log("Error Occured :",error)
    )

  }

  useEffect(()=>{
    // SO jaise website load hoga API fetch hogi 
    //fetchExchangeRates()
  },[])

  const handleSourceCurrencyChange = (e) => {
    setSourceCurrency(e.target.value)
  }

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value)
  }

  const handleAmountChange = (e) => {
    setAmout(e.target.value)
  }

  const handleConvert = () => {
    convertCurrency()
  }

  const convertCurrency = () => {
    if (sourceCurrency && targetCurrency) {
      const sourceRate = exchangeRates[sourceCurrency];
      const targetRate = exchangeRates[targetCurrency];

      const convertedAmount = (amout / sourceRate) * targetRate;
      setconvertedAmount(convertedAmount.toFixed(2)); // Rounded to two decimal places
    }
  };


  return (
    <>
      <div>
      <CurrencySelect
        label = {"Souce Currency"}
        options = {Object.keys(exchangeRates)}
        value = {sourceCurrency}
        onChange={handleSourceCurrencyChange}
        />

        <CurrencySelect
        label = {"Target Currency"}
        options = {Object.keys(exchangeRates)}
        value = {targetCurrency}
        onChange = {handleTargetCurrencyChange}
        />

      </div>

      <label >Amount :</label>
      <input type="number" value={amout} onChange={handleAmountChange} />
       <div>
        <button onClick={handleConvert}>Convert </button>
        <Result convertedAmount = {convertedAmount}/>
       </div>
    </>
  )
}

export default CurrencyCoverter