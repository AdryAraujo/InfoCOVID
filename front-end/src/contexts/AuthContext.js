import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    function initAuth() {
      console.log('teste')
      const user = localStorage.getItem('user')
      if (user) {
        setUser(JSON.parse(user))
        navigate('/')
      }
    }

    initAuth()
  }, [])

  async function handleLogin(email, password) {
    const response = await signin(email, password)
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
    }
    return response;
  }

  async function handleSignup(email, password) {
    const response = await signup(email, password)
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
    }
    return response;
  }

  
  async function handleLogout() {
    localStorage.removeItem('user')
  }

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, setUser, login: handleLogin, signup: handleSignup, logout: handleLogout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
