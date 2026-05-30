import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/footer.css";
import logoImg from "../assets/icons/logo.png"

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container-fluid px-4 px-lg-5">
        
        <div className="row">
          
          {/* Column 1: Brand & Socials */}
          <div className="col-lg-4 col-md-6 footer-col">
            <div>
                          <Link className="brand-logo-footer" to="/"><img src={logoImg} alt="" /></Link>
                        </div>
            <p className="footer-desc">
              Weaving heritage and modern elegance into every knot. 
              Our bespoke carpets are ethically handcrafted by master artisans to elevate your living spaces globally.
            </p>
            <div className="social-icons">
              {/* Instagram Raw SVG */}
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* Facebook Raw SVG */}
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              {/* Twitter Raw SVG */}
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 footer-col offset-lg-1">
            <h4 className="footer-title">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/shop">All Collections</Link></li>
              <li><Link to="/custom">Bespoke Rugs</Link></li>
              <li><Link to="/about">Our Atelier</Link></li>
              <li><Link to="/journal">Journal & News</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-lg-2 col-md-6 footer-col">
            <h4 className="footer-title">Assistance</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/care">Carpet Care</Link></li>
              <li><Link to="/shipping">Shipping & Returns</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-3 col-md-6 footer-col">
            <h4 className="footer-title">The Inner Circle</h4>
            <p className="footer-desc" style={{marginBottom: '15px'}}>
              Subscribe to receive exclusive access to new collections, bespoke projects, and private sales.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder="Enter your email address" 
                  required 
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  {/* ArrowRight Raw SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Footer Bottom: Copyright & Legal */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} LOOM & KNOT. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;