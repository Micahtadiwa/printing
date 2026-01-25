import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">
            Have a project in mind? Let's work together. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Two Frames Layout */}
        <div className="contact-frames">
          
          {/* Frame 1: Contact Information */}
          <div className="contact-info-frame">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-detail">
                  <h4>Phone</h4>
                  <a href="tel:+263788703018">+263 78 870 3018</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-detail">
                  <h4>Email</h4>
                  <a href="mailto:micahtadiwanashe789@gmail.com">micahtadiwanashe789@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail">
                  <h4>Location</h4>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Frame 2: Contact Form */}
          <div className="contact-form-frame">
            <h2 className="form-title">Send a Message</h2>
            <p className="form-description">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">
                    First Name<span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">
                    Last Name<span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email<span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject<span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message<span className="required-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
                aria-label={loading ? "Sending message..." : "Send message"}
              >
                {loading ? (
                  <div className="loading">
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                  </div>
                ) : (
                  <>
                    <FaPaperPlane style={{ marginRight: '10px' }} />
                    Send Message
                  </>
                )}
              </button>
              
              {message.text && (
                <div className={`form-message ${message.type}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default contact;