import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', false);
  const [user, setUser] = useLocalStorage('user', null);

  const login = () => {
    const userData = {
      id: 1,
      name: 'Yuri Lat',
      email: 'yuri@example.com'
    };
    
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setIsAuthenticated(false);
      setUser(null);
      
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    }
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}