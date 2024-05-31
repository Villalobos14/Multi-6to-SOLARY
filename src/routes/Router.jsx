// src/Routes/Router.jsx
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Calculadora from '../pages/calculadora/Calculadora';
import Landing from '../pages/landing/Landing';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/calculadora" element={<Calculadora/>} />
        <Route path="/landing" element={<Landing/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
