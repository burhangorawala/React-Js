import React, { useState, useEffect } from "react";
import CurrencySelect from "./CurrencySelect";
import Result from "./Results";

function CurrencyConverter() {
  const [exchangeRates, setExchangeRates] = useState({}); //Rates by which the exchange would occur
  const [amount, setAmount] = useState(1); // How much amount you want to convert
  const [sourceCurrency, setSourceCurrency] = useState(""); //The currency you have 
  const [targetCurrency, setTargetCurrency] = useState(""); //The currency to which you intend to change
  const [convertedAmount, setConvertedAmount] = useState(""); //this is the final value which is passed to the result component

  // Function to fetch exchange rates
  const fetchExchangeRates = () => {
   
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=99d075e3c3b41aa286f6e9c47722bd11&format=1"
    )
      .then((response) => response.json())
      .then((data) => setExchangeRates(data.rates))
      .catch((error) =>
        console.error("Error fetching exchange rates: ", error)
      );
  };

  useEffect(() => {
    // Fetch exchange rates when the component mounts
    fetchExchangeRates();
  }, []);

  //Function to convert currency
  const convertCurrency = () => {
    if (sourceCurrency && targetCurrency) {
      const sourceRate = exchangeRates[sourceCurrency];
      const targetRate = exchangeRates[targetCurrency];

      const convertedAmount = (amount / sourceRate) * targetRate;
      setConvertedAmount(convertedAmount.toFixed(2)); // Rounded to two decimal places
    }
  };

  // Event handler for the source currency dropdown
  const handleSourceCurrencyChange = (event) => {
    setSourceCurrency(event.target.value);
  };

  // Event handler for the target currency dropdown
  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  // Event handler for the amount input field
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Event handler for the conversion button (if you have one)
  const handleConvert = () => {
    convertCurrency();
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <CurrencySelect
        label={"Source Currency"}
        options={Object.keys(exchangeRates)}
        value={sourceCurrency}
        onChange={handleSourceCurrencyChange}
      />
      <CurrencySelect
        label="Target Currency"
        options={Object.keys(exchangeRates)}
        value={targetCurrency}
        onChange={handleTargetCurrencyChange}
      />
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleConvert}>Convert</button>
      <Result convertedAmount={convertedAmount} />
    </div>
  );
}

export default CurrencyConverter;
