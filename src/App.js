import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";
import Home from "./components/AllServices";
import BlogAdd from "./components/BlogAdd";
import AdminViewBlog from "./components/AdminViewBlog";

function App() {
  return (

    <BrowserRouter>
      <Navigator />
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/blogAdd" element={<BlogAdd />} />
      <Route path="/AdminViewBlog" element={<AdminViewBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
