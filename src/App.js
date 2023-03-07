import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigator from "./components/header";
import Footer from "./components/Footer";
import Home from "./components/AllServices";

function App() {
  return (

    <BrowserRouter>
      <Navigator />
      <Routes>

      <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
