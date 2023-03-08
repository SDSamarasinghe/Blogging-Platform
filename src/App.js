import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";
import Home from "./components/AllServices";
import BlogAdd from "./components/blogAdd";
import adminViewBlog from "./components/adminViewBlog";

function App() {
  return (

    <BrowserRouter>
      <Navigator />
      <Routes>

      <Route path="/home" element={<Home />} />
      <Route path="/blogAdd" element={<BlogAdd />} />
      <Route path="/adminViewBlog" element={<adminViewBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
