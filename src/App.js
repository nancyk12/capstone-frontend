import './App.css';
import React from 'react';
import  { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import Layout from "./components/Layout"
import Header from './components/Header';
//import AboutUsDiv from './components/AboutUsDiv';
import Footer from './components/Footer';
import Store from './pages/Store';
import Home from './pages/Home';

function App() {
  return (
   
    <BrowserRouter>
     <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="store" element={<Store/>}/> 
    </Routes>
    <Footer />
    </BrowserRouter>
     
    
   
    
  
    

      
  
 
  );
}

export default App;
