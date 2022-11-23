import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/services' exact element={<Services/>}/>
          <Route path='/product' exact element={<Products/>}/>
          <Route path='/sign-up' exact element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
