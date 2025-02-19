import React from 'react'

export default function CurrencyRow(props){

  const {currencyOptions, selectedCurrency} = props;

  return (
    <div>
      <input type="number" className="input" />
      <select value={selectedCurrency} className="select">
        {currencyOptions.map((option, index) => (
          <option key={option} value={option}>{option}</option>
        ))}
  
      </select>
    </div>
  )
}
