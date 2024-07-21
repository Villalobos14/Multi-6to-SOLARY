// src/AppRouter.jsx
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Graficas from '../components/organismos/Graficas';
import Estadistica from '../components/organismos/Estadistica';
import TransitionWrapper from '../components/organismos/TransitionWrapper';
import Reporte from '../components/organismos/Reporte';
import PrivateRoute from '../components/organismos/PrivateRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<TransitionWrapper><Login /></TransitionWrapper>} />
        <Route path="/register" element={<TransitionWrapper><Register /></TransitionWrapper>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/graficas" element={<PrivateRoute><Graficas /></PrivateRoute>} />
        <Route path="/estadistica" element={<PrivateRoute><Estadistica /></PrivateRoute>} />
        <Route path="/reporte" element={<PrivateRoute><Reporte /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
