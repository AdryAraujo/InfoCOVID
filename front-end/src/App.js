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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
