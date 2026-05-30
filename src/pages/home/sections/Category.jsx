import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Import elegant arrows

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import '../../../styles/category.css';

const Category = () => {
  const categories = [
    { id: 1, title: "Royal Persian", image: "https://i.pinimg.com/1200x/2d/fe/fe/2dfefe1c3e920551a34547384251285b.jpg", link: "/shop" },
    { id: 2, title: "Modern Abstract", image: "https://i.pinimg.com/1200x/8c/5e/18/8c5e183f9f2be0fac46cc87ad26d2630.jpg", link: "/shop" },
    { id: 3, title: "Natural Jute", image: "https://i.pinimg.com/736x/d1/c1/4c/d1c14c12f2eec9423f8cee9cb4e08206.jpg", link: "/shop" },
    { id: 4, title: "Kashmiri Silk", image: "https://i.pinimg.com/1200x/3e/95/d5/3e95d576285252b46b6c79e5394eed50.jpg", link: "/shop" },
  ];

  return (
    <section className="modern-category-section">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row align-items-center">
          
          {/* LEFT SIDE: TEXT & CUSTOM ARROWS */}
          <div className="col-lg-4">
            <div className="category-info-wrapper">
              <span className="cat-subtitle">Curated For You</span>
              <h2 className="cat-title">The Art of<br/>Weaving</h2>
              <p className="cat-desc">
                Discover our globally inspired collections. Every knot tells a story of heritage, craftsmanship, and modern elegance.
              </p>
              
              {/* Custom Navigation Buttons */}
              <div className="cat-nav-arrows">
                <button className="cat-btn cat-prev">
                  <ArrowLeft size={20} strokeWidth={1.5} />
                </button>
                <button className="cat-btn cat-next">
                  <ArrowRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SWIPER SLIDER */}
          <div className="col-lg-8">
            <div className="cat-swiper-container">
              <Swiper
                modules={[Navigation, FreeMode]}
                navigation={{
                  prevEl: '.cat-prev',
                  nextEl: '.cat-next',
                }}
                freeMode={true} /* Allows smooth, fluid scrolling instead of snapping rigidly */
                grabCursor={true}
                spaceBetween={30}
                breakpoints={{
                  // Mobile
                  320: { slidesPerView: 1.2, spaceBetween: 20 },
                  // Tablet
                  768: { slidesPerView: 2.2, spaceBetween: 30 },
                  // Desktop
                  1024: { slidesPerView: 2.5, spaceBetween: 30 },
                  // Large Desktop
                  1440: { slidesPerView: 3.2, spaceBetween: 40 },
                }}
              >
                {categories.map((cat) => (
                  <SwiperSlide key={cat.id}>
                    <Link to={cat.link} className="text-decoration-none">
                      <div className="modern-cat-card">
                        
                        <img src={cat.image} alt={cat.title} className="cat-img" />
                        
                        <div className="cat-overlay">
                          <h3 className="card-title">{cat.title}</h3>
                          <span className="card-explore">Explore ⟶</span>
                        </div>

                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Category;