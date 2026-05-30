import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/cta02.css'; 

const CtaReverse = () => {
  return (
    <section className="cta-reverse-section">
      <div className="container-fluid px-0"> 
        <div className="row align-items-stretch g-0"> 
          
          {/* Left Side: Text Content (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="col-lg-6 order-2 order-lg-1 bg-warm-ivory">
            <div className="cta-rev-content-wrapper">
              
              <span className="cta-rev-subtitle">BESPOKE SERVICES</span>
              
              <h2 className="cta-rev-title">
                Crafted to Your<br />Exact Vision
              </h2>
              
              <p className="cta-rev-desc">
                Can't find the perfect size or palette? Our master artisans collaborate with you to weave bespoke rugs that seamlessly fit your architectural spaces. From custom dimensions to unique color matching, we bring your imagination to life.
              </p>
              
              <Link to="/contact" className="cta-btn-solid">
                COMMISSION A RUG
              </Link>
              
            </div>
          </div>

          {/* Right Side: Premium Image (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="cta-rev-image-wrapper">
              <img 
                // Dummy image link, ideally a photo of an artisan weaving or a custom rug sketch
                src="https://cdn.shopify.com/s/files/1/0755/3017/4762/files/1_6ed46d47-4ee7-4370-8c72-466844ee674b.jpg?v=1748950017" 
                alt="Artisan weaving a custom carpet" 
                className="cta-rev-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaReverse;