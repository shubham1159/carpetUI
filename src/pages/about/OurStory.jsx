import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Droplets, HeartHandshake, ArrowRight } from 'lucide-react';
import '../../styles/about.css';

const OurStory = () => {
  return (
    <div className="lk-about-page mt-5">
      
      {/* 1. Cinematic Hero Section */}
      <section className="lk-about-hero">
        <div className="lk-about-hero-bg">
          <img 
            src="https://plus.unsplash.com/premium_photo-1725295198184-5dde96badeba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnVnc3xlbnwwfDB8MHx8fDA%3D" 
            alt="Loom & Knot Heritage" 
          />
          <div className="lk-about-overlay"></div>
        </div>
        <div className="container position-relative z-2 text-center h-100 d-flex flex-column justify-content-center align-items-center">
          <span className="lk-subtitle-gold mb-3">OUR HERITAGE</span>
          <h1 className="lk-title-serif-light display-3 text-white">Weaving Soul Into Spaces</h1>
        </div>
      </section>

      {/* 2. The Story Section (Text & Image) */}
      <section className="lk-story-section py-5 my-lg-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="lk-subtitle-gold mb-3">THE ATELIER</span>
              <h2 className="lk-title-serif mb-4">A Legacy Knotted by Hand</h2>
              <p className="lk-body-text mb-4">
                At Loom & Knot, we believe that a true masterpiece takes time. Born from a profound respect for centuries-old Persian and Indian weaving traditions, our atelier bridges the gap between heritage artisans and modern architectural spaces.
              </p>
              <p className="lk-body-text mb-5">
                Every carpet in our collection is a labor of love, taking anywhere from six months to two years to complete. We don't just create rugs; we curate generational heirlooms designed to anchor your living spaces with unparalleled elegance and texture.
              </p>
              <img 
                src="https://www.morebusiness.com/wp-content/uploads/2020/09/handwritten-email-signature.jpg" /* Add a fake signature image if you want, or remove this line */
                alt="Founder Signature" 
                className="lk-founder-signature opacity-50"
                style={{maxHeight: '130px'}}
              />
            </div>
            <div className="col-lg-6">
              <div className="lk-story-img-wrapper position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVnc3xlbnwwfDF8MHx8fDA%3D" 
                  alt="Master Artisan Weaving" 
                  className="img-fluid lk-story-img"
                />
                {/* Floating Experience Badge */}
                <div className="lk-experience-badge">
                  <h3 className="m-0 font-serif">150+</h3>
                  <span>Years of Collective Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Craftsmanship Pillars */}
      <section className="lk-pillars-section py-5 bg-light-gray">
        <div className="container py-lg-5">
          <div className="text-center mb-5 pb-4">
            <span className="lk-subtitle-gold mb-3">OUR ETHOS</span>
            <h2 className="lk-title-serif">The Pillars of Our Craft</h2>
          </div>
          <div className="row g-5">
            
            {/* Pillar 1 */}
            <div className="col-lg-4 col-md-6 text-center">
              <div className="lk-pillar-icon mb-4">
                <Scissors size={32} strokeWidth={1} />
              </div>
              <h4 className="lk-pillar-title mb-3">Masterful Precision</h4>
              <p className="lk-body-text px-3">
                Boasting an exceptional knot density, our pure silk and New Zealand wool rugs offer intricate details and an incredibly plush feel underfoot.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="col-lg-4 col-md-6 text-center">
              <div className="lk-pillar-icon mb-4">
                <Droplets size={32} strokeWidth={1} />
              </div>
              <h4 className="lk-pillar-title mb-3">Botanical Alchemy</h4>
              <p className="lk-body-text px-3">
                We shun synthetic chemicals, relying solely on natural extracts like indigo, madder root, and saffron to create dyes that age beautifully over decades.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="col-lg-4 col-md-6 text-center">
              <div className="lk-pillar-icon mb-4">
                <HeartHandshake size={32} strokeWidth={1} />
              </div>
              <h4 className="lk-pillar-title mb-3">Ethical Devotion</h4>
              <p className="lk-body-text px-3">
                Our commitment goes beyond aesthetics. We ensure fair wages, safe working environments, and sustainable practices to empower our weaving communities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="lk-cta-section text-center py-5">
        <div className="container py-5">
          <h2 className="lk-title-serif mb-4">Ready to find your masterpiece?</h2>
          <p className="lk-body-text mx-auto mb-5" style={{maxWidth: '600px'}}>
            Explore our curated archive of hand-knotted rugs, or consult with our atelier to commission a bespoke piece tailored entirely to your vision.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Link to="/shop" className="lk-btn-solid-teal">
              EXPLORE COLLECTIONS
            </Link>
            <Link to="/contact" className="lk-btn-outline-teal">
              BESPOKE INQUIRY <ArrowRight size={16} className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStory;