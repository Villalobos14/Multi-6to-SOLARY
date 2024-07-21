
import axios from 'axios';
import React from 'react';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({ children }) => {
  let isAuthenticated = !!sessionStorage.getItem('token'); 
  axios.get(`${process.env.API}api/graphics/histogram?typeSensorId=2`, {
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  }).then((res)=>{
    isAuthenticated=res.data.success
  })
  

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
