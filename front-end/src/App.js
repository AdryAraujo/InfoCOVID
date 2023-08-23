<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaLogin from "./telas/TelaLogin";
import TelaPrincipal from "./telas/TelaPrincipal";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Map from './pages/Map';
import './App.css';
import Layout from './components/Layout';

function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
>>>>>>> 571fcb7c7c01d65eb51a3fae2ef05fa677e748ea

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/login" component={TelaLogin} />
        <Route exact path="/" component={TelaPrincipal} />
      </Routes>
=======
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path='/acessos' element={<Layout />}>
            <Route index element={<Map />} />
          </Route>
        </Routes>
      </AuthProvider>
>>>>>>> 571fcb7c7c01d65eb51a3fae2ef05fa677e748ea
    </Router>
  );
}

export default App;
