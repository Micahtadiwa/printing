import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Tadiwa Printing Company</h1>
        <p>Excellence in Every Print Since Our Inception</p>
      </div>

      <div className="about-content">
        <div className="container">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Tadiwa Printing Company has been a trusted name in the printing industry, 
              delivering exceptional quality and service to businesses and individuals alike. 
              We combine traditional craftsmanship with modern technology to bring your 
              vision to life.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide high-quality printing services that exceed customer expectations 
              while maintaining competitive prices and fast turnaround times. We strive to 
              build lasting relationships with our clients through reliable service and 
              exceptional results.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality First</h3>
                <p>We never compromise on the quality of our prints</p>
              </div>
              <div className="value-item">
                <h3>Customer Focus</h3>
                <p>Your satisfaction is our top priority</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We continuously invest in the latest technology</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Honest and transparent in all our dealings</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our experienced team of professionals is dedicated to delivering excellence 
              in every project. From graphic designers to print technicians, we work 
              together to ensure your printing needs are met with precision and care.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
