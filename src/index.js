import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import './index.css';

import Dashboard from './components/Dashboard';
import PrivateRoute from './components/privateRoute';

export default function App() {
  console.log("process.env.REACT_APP_REST_API", process.env.REACT_APP_REST_API);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

