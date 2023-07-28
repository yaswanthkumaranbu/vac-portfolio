// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import NavBar from './component/NavBar.jsx'
function App() {

  return (

<BrowserRouter basename='/'>
 <NavBar/>
 <Routes> 
<Route path="/" element={<Home />}/>
  <Route path="/resources" element={<Resources />} />
  <Route path="/products" element={<Products />} />
  <Route path="/pricing" element={<Pricing />} />

 </Routes>

    </BrowserRouter>



  );

}

export default App
