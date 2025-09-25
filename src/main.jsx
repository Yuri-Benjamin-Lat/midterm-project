import './css/index.css';
import './css/fonts.css';
import './css/Navbar.css';
import './css/searchbar.css';
import './css/Spaces.css';
import './css/SpacesDetails.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SpacesDetails from './components/SpacesDetails';
import { AuthProvider } from './context/AuthContext';
import { ReservationProvider } from './context/ReservationContext';
import ProtectedRoute from './components/ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ReservationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/Dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/spaces/:id" element={<SpacesDetails />} />
          </Routes>
        </BrowserRouter>
      </ReservationProvider>
    </AuthProvider>
  </React.StrictMode>
);