import React, {Component, useState} from "react";
import CurrencyInput from "./CurrencyInput";


class CurrencyConverter extends React {
  state = {
    from: "USD",
    to: "EUR",
    fromAmount: 1,
    toAmount: 0.89,
  };
  render() {
    return (
      <div className="currency-converter">

      </div>
    );
  }
};

export default CurrencyConverter; 

