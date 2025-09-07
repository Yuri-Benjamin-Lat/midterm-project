import './css/index.css';
import './css/fonts.css';
import './css/Navbar.css';
import './css/searchbar.css';
import './css/Spaces.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SpacesDetails from './components/SpacesDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/spaces/:id" element={<SpacesDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);