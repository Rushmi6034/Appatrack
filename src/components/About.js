import React from "react";
import { Link } from 'react-router-dom';
import '../styles/About.css';


// About Page Component
const About = () => {
  return (
    <>
    <div className="aboutus">
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








  
<div className="main">

  <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
      {/* <div className="image-container">
          <img 
            src="./assests/dustbin.jpg" 
            alt="Smart Dustbin"
          />
        </div> */}
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
          Welcome to AppaTrack!</p>
         <p> At AppaTrack, we are revolutionizing the way e-bike owners and riders experience safety, efficiency, and convenience. With our cutting-edge tracking solutions, managing your e-bike has never been easier.

          Whether you’re monitoring your e-bike’s real-time location, analyzing ride data, or ensuring its safety, AppaTrack is here to make your e-biking journey smarter and more reliable.
          </p>
          <p>
            At WestaBin, we believe in creating a cleaner, smarter, and more
            sustainable future. Our goal is to leverage technology to reduce
            waste-related pollution, promote recycling, and simplify the way people
            interact with waste disposal systems.
          </p>
          <ul >
            <li>Detect waste levels in real-time.</li>
            <li>Provide touchless lid operation for better hygiene.</li>
            <li>Assist with waste segregation (biodegradable vs. non-biodegradable).</li>
            <li>Enable real-time data synchronization via IoT.</li>
            <li>Encourage sustainable practices through eco-friendly alerts.</li>
          </ul>
        </div>
      </section>
      </div>
      </div>
</>
  )}

  export default About;