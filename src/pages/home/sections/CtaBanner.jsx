import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/cta.css"
const CtaSection = () => {
  return (
    <section className="editorial-cta-section">
      <div className="container-fluid px-0"> {/* Edge to edge on large screens */}
        <div className="row align-items-stretch g-0"> {/* g-0 removes bootstrap gaps for flush layout */}
          
          {/* Left Side: Premium Image */}
          <div className="col-lg-6 order-1">
            <div className="cta-image-wrapper">
              <img 
                // Dummy image link, replace with your carpet image
                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/2_1728a23b-6958-4f66-ac41-1b2a163ba9aa.jpg?v=1763615904" 
                alt="Contemporary Carpet" 
                className="cta-img"
              />
            </div>
          </div>

          {/* Right Side: Text & CTA */}
          <div className="col-lg-6 order-2 bg-light-theme">
            <div className="cta-content-wrapper">
              
              <span className="cta-subtitle">CONTEMPORARY</span>
              
              <h2 className="cta-title">
                The Bridge Between<br />Past and Present
              </h2>
              
              <p className="cta-desc">
                These home carpets combine traditional carpet design elements with 
                contemporary stylistics and colours, evoking sensations that are 
                familiar yet altogether new. Every thread is woven to create a timeless masterpiece for your living space.
              </p>
              
              <Link to="/shop" className="cta-btn-outline">
                EXPLORE THE COLLECTION
              </Link>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;