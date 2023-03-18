import React from 'react';
import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const token = localStorage.getItem('token');
//   const isAuthenticated = token != null;

//   return isAuthenticated === true ? <Component /> : <Navigate to="/login" replace />;
// };

function PrivateRoute({ children }) {

  const token = localStorage.getItem('token');
  const isAuthenticated = token != null;


  return isAuthenticated === true ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
