import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import About from './components/About';
import About1 from './components/Aboutus';
import Card from './components/Card';
import EbikeData from './components/EbikeData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="home-page"><Home /></div>} />
        <Route path="/login" element={<div className="login-page"><Login /></div>} />
        <Route path="/signup" element={<div className="signup-page"><Signup /></div>} />
        <Route path="/aboutus-home" element={<div className="about-page"><About /></div>} />
        <Route path="/dashboard" element={<div className="dashboard-page"><Dashboard /></div>} />
        <Route path="/aboutus1-dashboard" element={<div className="about-page"><About1/></div>} />
        <Route path="/card" element={<Card />} />
        <Route path="/ebike-data" element={<EbikeData />} />

      </Routes>
    </Router>
  );
}

export default App;