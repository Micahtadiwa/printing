import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Platform</h1>
          <p className="hero-subtitle">
            Discover amazing features and services designed to help you succeed
          </p>
          <div className="hero-buttons">
            <Link to="/login"><button className="btn btn-primary">Get Started</button></Link>
            <Link to="/services"><button className="btn btn-secondary">Learn More</button></Link>
          </div>
        </div>
      </section>  

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Offer Services within reasonable timeframes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Professional printing solutions with secure and reliable services</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Country Wide Delivery</h3>
              <p>Fast and reliable delivery across the country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Quality Solutions</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;