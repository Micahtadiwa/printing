import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaFileAlt, 
  FaPaperPlane,
  FaClock,
  FaDollarSign,
  FaCheckCircle
} from 'react-icons/fa';
import './quote.css';

const quote= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    serviceType: '',
    budget: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    // Simulate API call
    setTimeout(() => {
      console.log('Quote request submitted:', formData);
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          serviceType: '',
          budget: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const serviceOptions = [
    'Printing Services',
    'Customized Covers',
    'Binding Solutions',
    'Design Services',
    'Dissertation Support',
    'Editing Services',
    'Stationery Supplies',
    'Other'
  ];

  const budgetOptions = [
    'Less than $15',
    '$15 - $50',
    '$50 - $100',
    '$100 - $250',
    '$250+',
    'To be discussed'
  ];

  return (
    <div className="quote-container">
      <div className="quote-wrapper">
        
        {/* Header */}
        <div className="quote-header">
          <h1 className="quote-title">Request a Quote</h1>
          <p className="quote-subtitle">
            Get a personalized quote for your project. Fill out the form below and I'll get back to you with pricing and timeline details.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <div>
              <h3>Quote Request Submitted!</h3>
              <p>Thank you for your inquiry. I'll review your requirements and get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="quote-layout">
          
          {/* Left Column - Information */}
          <div className="quote-info">
            <div className="info-card">
              <h2 className="info-title">
                <FaFileAlt className="title-icon" />
                What to Expect
              </h2>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h4>24-Hour Response</h4>
                  <p>You'll receive an initial response within 24 hours of submitting your request.</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaDollarSign />
                </div>
                <div className="info-content">
                  <h4>Detailed Quote</h4>
                  <p>Receive a comprehensive quote including timeline, deliverables, and pricing breakdown.</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaCheckCircle />
                </div>
                <div className="info-content">
                  <h4>No Obligation</h4>
                  <p>The quote is completely free with no obligation to proceed with the project.</p>
                </div>
              </div>
              
              <div className="info-features">
                <h3>What I'll Need:</h3>
                <ul className="features-list">
                  <li>Project requirements and goals</li>
                  <li>Preferred timeline</li>
                  <li>Budget range</li>
                  <li>Reference materials (if any)</li>
                </ul>
              </div>
            </div>
            
            <div className="contact-reminder">
              <h3>Need Immediate Help?</h3>
              <p>For urgent inquiries, call me directly:</p>
              <a href="tel:+263788703018" className="urgent-phone">
                <FaPhone /> +263 78 870 3018
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="quote-form-section">
            <div className="form-card">
              <h2 className="form-title">
                <FaCalendarAlt className="title-icon" />
                Booking Details
              </h2>
              
              <form className="quote-form" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    <FaUser className="label-icon" />
                    Full Name<span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                {/* Email & Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      <FaEnvelope className="label-icon" />
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
                      <FaPhone className="label-icon" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+263 78 870 3018"
                    />
                  </div>
                </div>
                
                {/* Date & Service Type */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="date">
                      <FaCalendarAlt className="label-icon" />
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="serviceType">
                      Service Type<span className="required-star">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Budget */}
                <div className="form-group">
                  <label className="form-label" htmlFor="budget">
                    <FaDollarSign className="label-icon" />
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
                
                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    <FaFileAlt className="label-icon" />
                    Project Details<span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Please describe your project in detail. Include features, requirements, timeline expectations, and any other relevant information..."
                    rows="6"
                    required
                  />
                  <div className="char-count">
                    {formData.message.length}/1000 characters
                  </div>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={loading}
                  aria-label={loading ? "Submitting quote request..." : "Request Quote"}
                >
                  {loading ? (
                    <div className="loading">
                      <div className="loading-dot"></div>
                      <div className="loading-dot"></div>
                      <div className="loading-dot"></div>
                    </div>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Request Quote
                    </>
                  )}
                </button>
                
                <p className="form-note">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default quote;