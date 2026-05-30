import React from 'react';
import { Heart, Sparkles, Users, Music, Star, CheckCircle } from 'lucide-react';
import '../../styles/wedding.css'; // Static CSS config file

const WeddingChoreography = () => {
  // Real YouTube Wedding Choreography IDs (Direct Loops)
  const videoShowcase = [
    { id: 1, youtubeId: "W1z4zDlpxRM", title: "The Grand Sangeet Opener", style: "Bollywood Blockbuster Mix" },
    { id: 2, youtubeId: "deyOD5YaCzk", title: "The Magical Couple Entry", style: "Elegant Semi-Classical Fusion" },
    { id: 3, youtubeId: "lD1X-ODWhvg", title: "Family & Friends Flashmob", style: "High-Energy Retros & Hits" }
  ];

  const packages = [
    {
      title: "The Ultimate Couple Pack",
      price: "₹25,000 onwards",
      features: ["Customized Lead Performance (3-4 Mins)", "1 Dedicated Choreographer", "10 Hours of In-Studio Practice", "Backup Video Tutorials for Home Practice"]
    },
    {
      title: "The Grand Family Sangeet",
      price: "₹65,000 onwards",
      features: ["Full Event Choreography (Up to 8 Songs)", "Mix Audio Track Production Included", "3 Head Choreographers", "25 Hours of Practice + On-Venue Blocking"]
    }
  ];

  return (
    <div className="wedding-page-root">
      
      {/* SECTION 1: Luxury Editorial Hero Setup */}
      <section className="wedding-hero py-5 mt-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Left Narrative Text */}
            <div className="col-lg-6">
              <span className="section-subtitle">ROYAL CELEBRATIONS</span>
              <h1 className="wedding-main-title mb-4">MAKE YOUR SANGEET NIGHT LEGENDARY</h1>
              <div className="perf-red-line mb-4"></div>
              <p className="lead text-dark fw-bold mb-4" style={{ lineHeight: '1.7' }}>
                Your love story deserves a breathtaking celebration. We transform regular wedding dances into high-octane theatrical experiences.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                From simple elegant steps for grandparents to power-packed backup-dancer setups for the bride and groom, our customized routines ensure everyone shines on stage. No previous dance experience required—we build confidence from step one.
              </p>
              <div className="pt-2">
                <a href="#contact" className="wedding-action-btn">BOOK FREE CONSULTATION</a>
              </div>
            </div>
            
            {/* Right Side Image Placement (Clean Editorial Picture) */}
            <div className="col-lg-6">
              <div className="wedding-hero-img-box">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" 
                  alt="Indian Wedding Dance" 
                  className="img-fluid wedding-pic"
                />
                <div className="wedding-img-badge">
                  <Heart className="text-white fill-white mb-1" size={16} />
                  <span>50+ Happy Couples In 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Auto-Playing YouTube Showreel (Videos) */}
      <section className="wedding-videos-section bg-light py-5 border-top border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-subtitle">SHOWREEL</span>
            <h2 className="section-main-title">OUR RECENT WEDDING HITS</h2>
            <div className="perf-red-line mx-auto"></div>
          </div>

          <div className="row g-4">
            {videoShowcase.map((video) => (
              <div className="col-lg-4 col-md-6" key={video.id}>
                <div className="wedding-video-card bg-white">
                  <div className="wedding-video-box">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="wedding-iframe"
                      style={{ border: 'none', pointerEvents: 'none' }}
                    ></iframe>
                  </div>
                  <div className="p-4 border-top">
                    <span className="wedding-video-tag">{video.style}</span>
                    <h4 className="wedding-video-title m-0 mt-1">{video.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Premium Tier Packages Grid */}
      <section className="wedding-packages py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-subtitle">THE BLUEPRINT</span>
            <h2 className="section-main-title">CHOREOGRAPHY PACKAGES</h2>
            <div className="perf-red-line mx-auto"></div>
          </div>

          <div className="row g-5 justify-content-center mt-2">
            {packages.map((pkg, index) => (
              <div className="col-lg-5 col-md-6" key={index}>
                <div className="wedding-package-card p-4 p-md-5">
                  <h3 className="pkg-title mb-2 text-uppercase">{pkg.title}</h3>
                  <div className="pkg-price mb-4">{pkg.price}</div>
                  <div className="pkg-divider mb-4"></div>
                  <ul className="pkg-features-list list-unstyled m-0">
                    {pkg.features.map((feature, idx) => (
                      <li className="d-flex align-items-start mb-3 text-muted" key={idx}>
                        <CheckCircle size={18} className="text-red-accent me-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WeddingChoreography;