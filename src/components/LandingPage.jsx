import React from 'react';
import { Link } from 'react-router-dom';
import rocketImage from '../assets/images/rocketimg.png';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to DRDO Online Test Platform</h1>
          <p>Streamlined online testing with live invigilation and AI-powered questions.</p>
          <Link to="/login" className="cta-button">Get Started</Link>
        </div>
        <div className="rocket-container">
        <img src={rocketImage} alt="Rocket" className="rocket" />
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h2>AI-Generated Questions</h2>
          <p>Get tailored questions powered by advanced AI technology to assess your skills accurately.</p>
        </div>
        <div className="feature">
          <h2>Live Monitoring</h2>
          <p>Experience seamless online testing with real-time monitoring by our experts.</p>
        </div>
        <div className="feature">
          <h2>Secure and Reliable</h2>
          <p>Our platform ensures the security and reliability of your online test experience.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 DRDO. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
