import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import{BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from './components/Home';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
      <Header/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
         
  
      </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
