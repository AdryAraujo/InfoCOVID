import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
