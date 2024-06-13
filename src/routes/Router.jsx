// src/Routes/Router.jsx
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Calculadora from '../pages/calculadora/Calculadora';
import Landing from '../pages/landing/Landing';
import Graficas from '../components/organismos/Graficas';
import Estadistica from '../components/organismos/Estadistica';
import Reporte from '../components/organismos/Reporte';
import Historial from '../components/organismos/Historial';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/calculadora" element={<Calculadora/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/graficas" element={<Graficas/>} />
        <Route path='/estadistica' element= {<Estadistica/>}/>
        <Route path='/reporte' element={<Reporte/>}/>
        <Route path='/historial' element={<Historial/>}/>
        

        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
