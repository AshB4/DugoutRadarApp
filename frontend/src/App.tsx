import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './componets/global/NavBar';
import Footer
 from './componets/global/Footer';
import Home from './pages/Home';
import GamesPage from './pages/Games';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
