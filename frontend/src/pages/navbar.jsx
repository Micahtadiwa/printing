import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome,
  FaPrint,
  FaLayerGroup,
  FaEnvelope,
  FaUserPlus,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPalette,
  FaBoxOpen,
  FaTshirt,
  FaNewspaper,
  FaShoppingBag,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import './navbar.css';

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { 
      name: 'Services', 
      icon: <FaPrint />,
      dropdown: [
        { path: '/services/offset', name: 'Offset Printing', icon: <FaPrint /> },
        { path: '/services/digital', name: 'Digital Printing', icon: <FaPalette /> },
        { path: '/services/large-format', name: 'Large Format', icon: <FaBoxOpen /> },
        { path: '/services/packaging', name: 'Packaging', icon: <FaBoxOpen /> },
        { path: '/services/garments', name: 'Garment Printing', icon: <FaTshirt /> },
        { path: '/services/stationery', name: 'Stationery', icon: <FaNewspaper /> },
      ]
    },
    { path: '/landing', name: 'Solutions', icon: <FaLayerGroup /> },
    { path: '/about', name: 'About', icon: <FaUserPlus /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  const contactInfo = {
    phone: '+263 78 870 3018',
    whatsapp: '+263 78 870 3018',
    email: 'micahtadiwanashe789@gmail.com',
    address: 'Harare, Zimbabwe'
  };

  return (
    <>
   
      {/* Main Mobile Navbar */}
      <nav className={`mobile-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="mobile-nav-container">
          {/* Logo */}
          <div className="mobile-logo">
            <Link to="/" className="logo-link">
              <div className="logo-icon">
                <FaPrint />
              </div>
              <div className="logo-text">
                <span className="logo-primary">TM</span>
                <span className="logo-secondary">Printing</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
          {/* Menu Header */}
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo">
              <FaPrint className="menu-logo-icon" />
              <span className="menu-logo-text">TM Printing</span>
            </div>
            <button 
              className="mobile-menu-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <div key={index} className="mobile-nav-item">
                {link.dropdown ? (
                  <>
                    <button 
                      className={`mobile-nav-link ${openDropdown === link.name ? 'active' : ''}`}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      <span className="nav-link-icon">{link.icon}</span>
                      <span className="nav-link-text">{link.name}</span>
                      <FaChevronDown className={`dropdown-arrow ${openDropdown === link.name ? 'rotate' : ''}`} />
                    </button>
                    <div className={`mobile-dropdown ${openDropdown === link.name ? 'open' : ''}`}>
                      {link.dropdown.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.path} 
                          className="mobile-dropdown-item"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="dropdown-item-icon">{item.icon}</span>
                          <span className="dropdown-item-text">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="nav-link-icon">{link.icon}</span>
                    <span className="nav-link-text">{link.name}</span>
                    <FaArrowRight className="nav-link-arrow" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mobile-quick-actions">
            <Link 
              to="/quote" 
              className="mobile-quote-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaPrint className="quote-btn-icon" />
              <span className="quote-btn-text">Get Instant Quote</span>
            </Link>
            <Link 
              to="/upload-design" 
              className="mobile-upload-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaPalette className="upload-btn-icon" />
              <span className="upload-btn-text">Upload Design</span>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mobile-contact-section">
            <h3 className="contact-section-title">Contact Us</h3>
            <div className="contact-info-grid">
              <a href={`tel:${contactInfo.phone}`} className="contact-info-item">
                <FaPhone className="contact-icon" />
                <div className="contact-info-content">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">{contactInfo.phone}</span>
                </div>
              </a>
              
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} className="contact-info-item">
                <FaWhatsapp className="contact-icon whatsapp" />
                <div className="contact-info-content">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">{contactInfo.whatsapp}</span>
                </div>
              </a>
              
              <a href={`mailto:${contactInfo.email}`} className="contact-info-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-info-content">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{contactInfo.email}</span>
                </div>
              </a>
              
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-info-content">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mobile-hours">
            <h3 className="hours-title">Business Hours</h3>
            <div className="hours-grid">
              <div className="hours-item">
                <span className="hours-day">Mon - Fri</span>
                <span className="hours-time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Saturday</span>
                <span className="hours-time">10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">Closed</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mobile-bottom-cta">
            <Link 
              to="/emergency-print" 
              className="emergency-cta"
              onClick={() => setIsOpen(false)}
            >
              <FaPrint className="emergency-icon" />
              <span>Emergency Print Job?</span>
              <span className="emergency-sub">We're here to help!</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav">
        <Link to="/" className={`bottom-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <FaHome className="bottom-nav-icon" />
          <span className="bottom-nav-label">Home</span>
        </Link>
        
        <Link to="/services/offset" className={`bottom-nav-item ${location.pathname.includes('/services') ? 'active' : ''}`}>
          <FaPrint className="bottom-nav-icon" />
          <span className="bottom-nav-label">Services</span>
        </Link>
        
        <div className="bottom-nav-center">
          <Link to="/quote" className="quote-fab">
            <FaPrint className="fab-icon" />
          </Link>
        </div>
        
        <Link to="/landing" className={`bottom-nav-item ${location.pathname === '/landing' ? 'active' : ''}`}>
          <FaLayerGroup className="bottom-nav-icon" />
          <span className="bottom-nav-label">Solutions</span>
        </Link>
        
        <Link to="/contact" className={`bottom-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          <FaEnvelope className="bottom-nav-icon" />
          <span className="bottom-nav-label">Contact</span>
        </Link>
      </div>
    </>
  );
};

export default navbar;