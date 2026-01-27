import React from 'react';
import './services.css';
// Import all icons from react-icons/fa for consistency
import { 
  FaPrint, 
  FaBuffer, 
  FaFileAlt, 
  FaIdCard,
  FaBarcode,
  FaBoxOpen,
  FaRuler,
  FaPaintBrush,
  FaStamp,
  FaShippingFast,
  FaLaptop,
  FaHeadset,
  FaPencilRuler,  // Fixed: Use FaPencilRuler from fa
  FaClipboardCheck,
  FaCalendarCheck,
  FaCheck,
  FaBusinessTime
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaIdCard />,
      title: 'Business Cards',
      description: 'Premium quality business cards with various finishes and paper stocks.',
      features: ['Spot UV', 'Foil Stamping', 'Die Cutting', 'Rounded Corners', 'Matte/Gloss Finish'],
      materials: ['300gsm Card', 'Silk/Matte', 'Recycled Paper', 'Plastic Cards'],
      turnaround: '24-48 hours',
      price: 'Starting at $10/100 cards'
    },
    {
      id: 2,
      icon: <FaBuffer />,
      title: 'Customized Covers',
      description: 'Customized covers for books, reports, and presentations.',
      features: ['Hardcover/Softcover', 'High Quality', 'Custom Design','Various Sizes'],
      materials: ['Khaki Paper',  'Linen', 'Leatherette'],
      turnaround: '7 days',
      price: 'Starting at $30 at $1/10covers'
    },
    {
      id: 3,
      icon: <FaFileAlt />,
      title: 'Brochures & Flyers',
      description: 'Professional brochures and flyers for marketing and promotions.',
      features: ['Single/Double Sided', 'Various Folds', 'High Gloss', 'Perforation', 'Spot Colors'],
      materials: ['100-300gsm Paper', 'Gloss/Matte', 'Recycled Options'],
      turnaround: '2-4 days',
      price: 'Starting at $10/100 flyers'
    },
    {
      id: 4,
      icon: <FaPrint />,
      title: 'Paper Printing',
      description: 'Printing services for black & white and color documents.',
      features: ['Single/Double Sided', 'Various Sizes', 'Color/BW', 'Binding Options', 'Custom Cuts'],
      materials: ['Standard Paper', 'Recycled Paper', 'Cardstock', 'Photo Paper'],
      turnaround: '1 day',
      price: 'Starting at $0.10/page and $1/60 pages bulk'
    },
    {
      id: 5,
      icon: <FaBoxOpen />,
      title: 'Binding',
      description: 'Professional binding options for dissertation, presentations, and booklets.',
      features: ['Spiral Binding', 'Executive Binding',  'Hardcover Binding'],
      materials: ['Leather', 'Plastic', 'Cardboard'],
      turnaround: '30mins - 1 hrs',
      price: 'Starting at $1/binding to $10 executive binding'
    },
    {
      id: 6,
      icon: <FaBarcode />,
      title: 'Stickers & Decals',
      description: 'Custom stickers, decals, and labels for various applications.',
      features: ['Die-Cut Shapes', 'Kiss-Cut', 'Waterproof', 'UV Resistant', 'Removable/Permanent'],
      materials: ['Vinyl', 'Paper', 'Clear', 'Reflective'],
      turnaround: '1-3 days',
      price: 'Starting at $20/50'
    },
    {
      id: 7,
      icon: <FaStamp />,
      title: 'Stationery',
      description: 'We sell stationery as per your custom needs.',
      features: ['Books', 'Notepads', 'Envelopes', 'Letterheads','Many more'],
      materials: ['Dependent on product'],
      turnaround: '1-3 days',
      price: 'Contact for quote'
    },
    {
      id: 8,
      icon: <FaRuler />,
      title: 'Document & Dissertation Editing',
      description: 'Professional editing and formatting services for academic documents.',
      features: ['Grammar Check', 'Style Guide Compliance', 'Citation Formatting', 'Formatting', 'Plagiarism Check'],
      materials: ['Digital Documents', 'PDF Files'],
      turnaround: '1 hour',
      price: 'Starting at $1 and $5/dissertation'
    },
    {
      id: 9,
      icon: <FaPaintBrush />,
      title: 'Design Services',
      description: 'Professional graphic design for all your printing needs.',
      features: ['Logo Design', 'Layout Design', 'Photo Editing', 'Brand Identity', 'Mockups'],
      turnaround: '1-7 days',
      price: 'Starting at $5'
    },
    {
      id: 10,
      icon: <FaShippingFast />,
      title: 'Bulk Printing',
      description: 'High-volume printing with quantity discounts.',
      features: ['5000+ Units', 'Volume Discounts', 'Drop Shipping', 'Storage', 'Monthly Contracts'],
      turnaround: '7-14 days',
      price: 'Contact for quote'
    },
    {
      id: 11,
      icon: <FaLaptop />,
      title: 'Recept Books & Invoices printing',
      description: 'Custom receipt books and invoice pads for businesses.',
      features: ['Carbonless Copies', 'Custom Numbering', 'Perforated Pages', 'Multiple Formats', 'Durable Covers'],
      turnaround: '1 hours',
      price: 'Starting at $10/book'
    },
    {
      id: 12,
      icon: <FaClipboardCheck />,
      title: 'Offset Printing',
      description: 'Traditional offset printing for large quantities with superior quality.',
      features: ['5000+ Copies', 'Pantone Colors', 'Special Inks', 'High Volume', 'Cost Effective'],
      turnaround: '7-10 days',
      price: 'Contact for quote'
    }
  ];

  const serviceCategories = [
    {
      name: 'Printing',
      count: '5+ Services',
      icon: <FaIdCard />
    },
    {
      name: 'Binding',
      count: '3+ Services',
      icon: <FaBuffer />
    },
    {
      name: 'Custom Book Covers',
      count: '2+ Services',
      icon: <FaPrint />
    },
    {
      name: 'Design & Support',
      count: '2 Services',
      icon: <FaPaintBrush />
    }
  ];

  const printingProcesses = [
    {
      name: 'Digital Printing',
      description: 'Fast, high-quality prints for short runs',
      bestFor: 'Quick turnaround, variable data'
    },
    {
      name: 'Cover Printing',
      description: 'Cost-effective for large quantities',
      bestFor: 'High volume, consistent quality'
    },
    {
      name: 'Binding',
      description: 'Professional finishing for documents',
      bestFor: 'Reports, presentations, booklets, dissertations'
    },
    {
      name: 'Designing Services',
      description: 'Custom graphic design solutions',
      bestFor: 'Branding, marketing materials, layouts'
    }
  ];

 

  return (
    <div className="services-container">
      <div className="services-wrapper">
        
        {/* Hero Section */}
        <div className="services-hero">
          <h1 className="services-title">Printing Services</h1>
          <p className="services-subtitle">
            Professional printing solutions for businesses, events, and personal projects. 
            High-quality results with fast turnaround times.
          </p>
          <div className="services-stats">
            <div className="stat-item">
              <span className="stat-number">24h</span>
              <span className="stat-label">Rush Service</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Paper Stocks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Print Methods</span>
            </div>
          </div>
        </div>

        {/* Quick Order CTA */}
        <div className="quick-order">
          <div className="quick-order-content">
            <h2>Need Printing Fast?</h2>
            <p>Upload your files and get an instant quote</p>
            <div className="quick-order-buttons">
              <button className="upload-btn">
                <FaFileAlt /> Upload Design
              </button>
              <button className="quote-btn">
                <FaClipboardCheck /> Get Instant Quote
              </button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="categories-section">
          <h2 className="section-title">Service Categories</h2>
          <p className="section-subtitle">Browse our printing services by category</p>
          
          <div className="categories-grid">
            {serviceCategories.map((category, index) => (
              <div className="category-card" key={index}>
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count}</p>
                <button className="category-btn">View Services</button>
              </div>
            ))}
          </div>
        </div>

        {/* Printing Processes */}
        <div className="processes-section">
          <h2 className="section-title">Our Printing Processes</h2>
          <p className="section-subtitle">Choose the right printing method for your project</p>
          
          <div className="processes-grid">
            {printingProcesses.map((process, index) => (
              <div className="process-card" key={index}>
                <h3 className="process-name">{process.name}</h3>
                <p className="process-description">{process.description}</p>
                <div className="process-best-for">
                  <strong>Best for:</strong> {process.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="services-section">
          <div className="section-header">
            <h2 className="section-title">All Printing Services</h2>
            <p className="section-subtitle">Comprehensive printing solutions for every need</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-title-section">
                    <h3 className="service-title">{service.title}</h3>
                    <div className="service-turnaround">
                      <FaCalendarCheck /> {service.turnaround}
                    </div>
                  </div>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-details">
                  <div className="service-features">
                    <h4><FaPencilRuler /> Features</h4>
                    <ul className="features-list">
                      {service.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.materials && (
                    <div className="service-materials">
                      <h4><FaBoxOpen /> Materials</h4>
                      <ul className="materials-list">
                        {service.materials.map((material, index) => (
                          <li key={index} className="material-item">
                            • {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="service-footer">
                  <div className="service-price">
                    <span className="price-value">{service.price}</span>
                  </div>
                  <div className="service-actions">
                    <button className="service-btn">View Samples</button>
                    <button className="service-btn primary">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       

        {/* Order Process */}
        <div className="order-process">
          <h2 className="section-title">Simple Order Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Get Quote</h3>
              <p>Contact us for a custom quote</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Recieve Quote</h3>
              <p>Receive prices and details</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Print Sevices</h3>
              <p>We print per order</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Deliver</h3>
              <p>We deliver directly to you</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Print?</h2>
            <p className="cta-text">
              Upload your design or contact us for a custom quote. Fast turnaround and competitive pricing.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <FaFileAlt /> Upload & Order
              </button>
              <button className="cta-btn secondary">
                <FaHeadset /> Contact Sales
              </button>
            </div>
            <div className="cta-contact">
              <p><strong>Call us:</strong> +263 78 703 018</p>
              <p><strong>Email:</strong> micahtadiwanashe789@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;