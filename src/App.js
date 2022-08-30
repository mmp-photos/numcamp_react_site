// PRIMARY FILE FOR NUCAMP SITE CREATES THE SITE BY ARRANGING ALL COMPONENTS //

// IMPORTS //
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import { CAMPSITES } from './app/shared/CAMPSITES';
import Headers from './components/Header';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';

// PAGE CONSTRUCTION START //
function App() {
  return (
    <div className="App">
        <Headers />
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="contact" element = {<ContactPage />} />
          <Route path="about" element = {<AboutPage />} />
          <Route path="directory" element = {<CampsitesDirectoryPage />} />
          <Route path="directory/:campsiteId"
                element={<CampsiteDetailPage />}
          />
        </Routes>
        <Footer />
    </div>
  );
}
// PAGE CONSTRUCTION END //

// EXPORT STATEMENT //
export default App;
