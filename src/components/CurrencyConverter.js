import React, { useEffect } from "react";
import './CurrencyConverter.css';
import CurrencyRow from "./CurrencyRow";

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest' 



const CurrencyConverter = () => {

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data));

  }, []);

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyRow />
      <div className="equal-sign">=</div>
      <CurrencyRow />
    </>


  );
}

export default CurrencyConverter;
