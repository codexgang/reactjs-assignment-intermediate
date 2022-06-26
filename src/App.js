import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Contact from "./screens/Contact.jsx";
import MyAccount from "./screens/MyAccount.jsx";
import React from "react";
import Layout from "./layout/Layout";
import './App.css'

function App() {
  return (
    <div className="app">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
