import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './componets/global/NavBar';
import Footer from './componets/global/Footer';
import Home from './pages/Home';
import GamesPage from './pages/Games';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';

import './App.css';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const PageContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <NavBar />
        <PageContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PageContent>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
