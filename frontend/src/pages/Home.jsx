import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to TM Printing </h1>
        <p className="hero-subtitle">Your trusted partner for quality printing solutions</p>
        <div className="hero-buttons">
          <a href="/register" className="btn btn-primary">Get Started</a>
          <a href="/about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🖨️</div>
              <h3>Quality Printing</h3>
              <p>State-of-the-art equipment ensuring the highest quality prints</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising on quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Affordable Prices</h3>
              <p>Competitive pricing to meet your budget requirements</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Designs</h3>
              <p>Professional design services to bring your vision to life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
