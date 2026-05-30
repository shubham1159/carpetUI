import React from 'react';
import "../../../styles/aboutjourney.css"
const AboutSection = () => {
  return (
    <section className="dance-about-wrapper py-5">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          
          {/* Left Side: Intense & Raw Content */}
          <div className="col-lg-6 text-white">
            <div className="accent-line mb-3"></div>
            <span className="text-uppercase tracking-wider redis-text small fw-bold d-block mb-2">
              OUR PHILOSOPHY
            </span>
            <h2 className="display-4 fw-black text-white mb-4 dynamic-heading">
              WE DON'T JUST TEACH STEPS.<br />
              WE LEAVE <span className="text-highlight-red">SCARS ON THE STAGE.</span>
            </h2>
            <p className="lead text-secondary mb-4 custom-para">
              Every drop of sweat, every missed beat, and every standing ovation—this journey is built on raw obsession. We believe dance is the ultimate form of unfiltered human expression. 
            </p>
            <p className="text-secondary mb-4 small-para">
              From the underground street cyphers to the grand theatrical stages, our movement is defined by power, precision, and passion. Whether you are stepping onto the floor for the first time or training for the spotlight, we help you find your unique frequency.
            </p>
            <div className="pt-3">
              <a href="#booking" className="action-btn-red">
                <span>START YOUR JOURNEY</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Sleek Grid Matrix */}
          <div className="col-lg-6">
            <div className="row g-4 spec-grid">
              
              <div className="col-6">
                <div className="matrix-card">
                  <span className="matrix-num">10+</span>
                  <span className="matrix-label">YEARS OF RAW PASSION</span>
                </div>
              </div>

              <div className="col-6 offset-md-top">
                <div className="matrix-card unique-border">
                  <span className="matrix-num">25+</span>
                  <span className="matrix-label">ELITE CHOREOGRAPHIES</span>
                </div>
              </div>

              <div className="col-6">
                <div className="matrix-card unique-border">
                  <span className="matrix-num">50K+</span>
                  <span className="matrix-label">COMMUNITY STRENGTH</span>
                </div>
              </div>

              <div className="col-6 offset-md-top">
                <div className="matrix-card">
                  <span className="matrix-num">04+</span>
                  <span className="matrix-label">GLOBAL RECOGNITIONS</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;