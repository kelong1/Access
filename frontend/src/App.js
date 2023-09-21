import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import{BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Landing } from './components/Landing';

function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
      <Header/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Landing/>}/>
  
      </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
