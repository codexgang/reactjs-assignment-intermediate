import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Contact from "./screens/Contact.jsx";
import MyAccount from "./screens/MyAccount.jsx";
import React from "react";
import Layout from "./layout/Layout";
import './App.css'
import Cart from "./screens/Cart";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="app">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
