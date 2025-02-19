import React, {Component} from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <LogIn />
      <CurrencyConverter />
      <Footer />

      
    </div>
  );
}

export default App;
