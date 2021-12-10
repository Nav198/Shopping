import React from 'react'
import { Navigate, Outlet } from 'react-router';
import Login from './Login';




 const ProtectedRoute = () => {
      
    return localStorage.getItem("auth") ? <Outlet/> : <Navigate to="/"/>; 
    
};
export default ProtectedRoute;