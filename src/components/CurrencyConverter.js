import React, { useEffect, useState } from "react";
import './CurrencyConverter.css';
import CurrencyRow from "./CurrencyRow";

const BASE_URL = 'https://api.exchangeratesapi.io/v1/latest?access_key=5a022b803e69a393442d4509eb28cb98'; 



const CurrencyConverter = () => {

  const[ currencyOptions, setCurrencyOptions] = useState([]);
  const[ fromCurrency, setFromCurrency] = useState();
  const[ toCurrency, setToCurrency] = useState();
  

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });

  }, []);

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        
      />
      <div className="equal-sign">=</div>
      
      <CurrencyRow 
        currencyOptions={currencyOptions} 
        selectedCurrency={toCurrency}

      />
    </>


  );
}

export default CurrencyConverter;
