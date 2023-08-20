import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function handleLogin(email, password) {
    const response = await signin(email, password)
    if (response.status === 200) {
        setUser(response.data)
    }
    return response;
  }

  async function handleSignup(email, password) {
    const response = await signup(email, password)
    if (response.status === 200) {
        setUser(response.data)
    }
    return response;
  }

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, setUser, login: handleLogin, signup: handleSignup, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
