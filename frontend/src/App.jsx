import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from "./pages/Admin/AdminDashboard";
import HomePage from "./pages/Home/HomePage";
import Navbar from './components/Navbar';

import './App.css'

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
