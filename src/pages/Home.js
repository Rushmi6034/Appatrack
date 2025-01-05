import  { useEffect, useRef } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import FeatureCard from '../components/FeatureCard';
import '../styles/Home.css';

const Home = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const checkScroll = () => {
      cardsRef.current.forEach(card => {
        if (card) {
          const cardTop = card.getBoundingClientRect().top;
          const triggerBottom = window.innerHeight * 0.8;
          
          if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        }
      });
    };

    cardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
      }
    });

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  

  return (
<>
<nav>
            <div className="nav-container">
              <div className="log">
                AppaTrack
              </div>
              <div className="nav-links">
                <Link to="/" className="active">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="#">Contact</Link>
                <div className="butto">
                  <Link to="/login">Get Started</Link>
                </div>
              </div>
            </div>
          </nav>
      <section className="hero">
          <div className="hero-content">
            <h1>Welcome to AppaTrack</h1>
            {/* <p className="subtitle">Revolutionizing Waste Management with Smart Technology</p> */}

            {/* Features */}
            <div className="features">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="./assets/loc.gif" width="70px" height="70px" alt="Real-time monitoring" />
                </div>
                <h3>Real-time Tracking</h3>
                <p>Track the location of e-bikes in real-time for better management</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="./assets/perf.gif" width="70px" height="70px" alt="Analytics" />
                </div>
                <h3>Performance Analytics</h3>
                <p>Analyze eBike performance, battery status, and travel history with detailed reports.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="./assets/bat.gif" width="70px" height="70px" alt="Location tracking" />
                </div>
                <h3>Battery Monitoring</h3>
                <p>Monitor the battery levels of e-bikes to prevent downtime</p>
              </div>
            </div>

          
            <div className="buttons">
              <Link to="/login" className="btns">LOGIN</Link>
              <Link to="/signup" className="btns">SIGN UP</Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;