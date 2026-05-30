import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { FaChevronDown, FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../../styles/banner.css"
const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      subtitle: "HERITAGE WEAVES",
      title: "The Art of <br/><span class='text-gold-accent'>Modern Luxury</span>",
      desc: "Discover our curated collection of bespoke, hand-knotted carpets. Where centuries-old craftsmanship meets contemporary elegance.",
      image: "https://images.unsplash.com/photo-1573010309833-9992315801eb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      btnText1: "EXPLORE COLLECTIONS",
      btnText2: "BESPOKE SERVICES"
    },
    {
      id: 2,
      subtitle: "THE ONYX COLLECTION",
      title: "Redefining <br/><span class='text-gold-accent'>Minimalism</span>",
      desc: "Monochrome tones in a plush contemporary weave. Designed to seamlessly anchor your architectural spaces and luxury interiors.",
      image: "https://plus.unsplash.com/premium_photo-1725295198378-d286934e2735?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      btnText1: "SHOP THE ONYX",
      btnText2: "VIEW CATALOG"
    },
    {
      id: 3,
      subtitle: "MASTER CRAFTSMANSHIP",
      title: "Woven to Your <br/><span class='text-gold-accent'>Exact Vision</span>",
      desc: "Collaborate with our master artisans to create a custom rug that perfectly fits your dimensions, palette, and design aesthetic.",
      image: "https://i.pinimg.com/1200x/59/c7/61/59c7618d2a7ea2591ff71660f23e1521.jpg",
      btnText1: "COMMISSION A RUG",
      btnText2: "OUR ATELIER"
    }
  ];

  return (
    <section className="lk-hero-slider-section">
      
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1500} // Slow, elegant transition speed
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        pagination={{ clickable: true, el: '.hero-pagination' }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            
            {/* Background Image with Cinematic Zoom */}
            <div className="hero-bg-wrapper">
              <div 
                className="hero-bg-img" 
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="hero-overlay"></div>
            </div>

            {/* Slide Content */}
            <div className="container h-100 position-relative z-2">
              <div className="row h-100 align-items-center">
                <div className="col-lg-8 col-md-10">
                  <div className="hero-content">
                    
                    <span className="hero-subtitle animated-item">
                      {slide.subtitle}
                    </span>
                    
                    <h1 
                      className="hero-title animated-item" 
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    
                    <p className="hero-desc animated-item">
                      {slide.desc}
                    </p>
                    
                    <div className="hero-btn-group animated-item">
                      <Link to="/shop" className="hero-btn-solid">
                        {slide.btnText1}
                      </Link>
                      <Link to="/custom" className="hero-btn-outline">
                        {slide.btnText2}
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}

        {/* Custom Navigation & Pagination */}
        <div className="hero-slider-controls">
          <button className="hero-nav-btn hero-prev">
            <FaArrowLeftLong size={20} />
          </button>
          
          <div className="hero-pagination"></div>
          
          <button className="hero-nav-btn hero-next">
            <FaArrowRightLong size={20} />
          </button>
        </div>

      </Swiper>

      {/* Persistent Scroll Down Indicator */}
      <div className="hero-scroll-indicator">
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <FaChevronDown className="scroll-icon" size={14} />
      </div>

    </section>
  );
};

export default HeroSlider;