import React, {Component} from 'react';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import LogIn from './components/LogIn';
import CurrencyConverter from './components/CurrencyConverter';

import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <LogIn />
      <CurrencyConverter />
    </div>
  );
}

export default App;
