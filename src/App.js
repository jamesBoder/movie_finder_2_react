import React, {Component} from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import LogIn from './components/LogIn';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <LogIn />
      <Footer />

      
    </div>
  );
}

export default App;
