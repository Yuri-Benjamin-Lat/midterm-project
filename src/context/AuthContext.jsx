import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Show confirmation dialog before logging out
    if (window.confirm("Are you sure you want to log out?")) {
      setIsAuthenticated(false);
      // If we're on a protected page, redirect to home after logout
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    }
  };

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}