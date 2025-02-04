import React from "react";

const CurrencyInput = () => {
  (
    <div className="field">
      <div className="currency-picker">
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="CAD">CAD</option>
          <option value="AUD">AUD</option>
          <option value="INR">CNY</option>
        </select>
      </div>
      <div className="currency-input">
        <input type="number" className="number-input"/>
      </div>
    </div>
  )
}

export default CurrencyInput;