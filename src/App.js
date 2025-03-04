import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';


function App() {
  return (
    
    <div className="App">
      <Router basename="https://github.com/jamesBoder/exchange_app_react.git">
        <NavBar />
        <Welcome />
        <LogIn />
        <CurrencyConverter />
        <Footer />
      </Router> 
      
    </div>
  );
}

export default App;
