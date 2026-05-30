import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong, FaQuoteLeft } from 'react-icons/fa6';

// Swiper standard styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../../../styles/testimonial.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rohan Sharma",
      role: "Interior Designer",
      review: "The level of craftsmanship at Loom & Knot is unparalleled. We commissioned a bespoke silk rug for a client's penthouse, and the precision in color matching and knot density was absolutely flawless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Ananya Iyer",
      role: "Homeowner",
      review: "Walking on our new Hand-Knotted Kashmiri carpet feels like stepping on a piece of history. The textures are incredibly plush, and it has completely transformed the aura of our living room.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Vikram & Sarah",
      role: "Art Collectors",
      review: "We have been collecting vintage rugs for years, and the curation here is extraordinary. The Faded Shiraz we acquired has a beautiful distressed patina that perfectly complements our modern art pieces.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Rahul Verma",
      role: "Lead Architect",
      review: "For luxury hospitality projects, we need durability without compromising on elegance. Loom & Knot delivered custom modern geometric rugs for our lobby project ahead of schedule. Highly recommended.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
    }
  ];

  return (
    <section className="monolith-testimonial-section py-5">
      <div className="container py-lg-5 position-relative">
        
        {/* Massive Background Quote Icon */}
        <div className="bg-quote-icon">
          <FaQuoteLeft />
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            <div className="text-center mb-5">
              <span className="section-subtitle">CLIENT APPRECIATION</span>
            </div>

            {/* Minimalist Fade Slider */}
            <Swiper
              modules={[Autoplay, EffectFade, Navigation]}
              effect={'fade'}
              fadeEffect={{ crossFade: true }}
              loop={true}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: '.testi-prev',
                nextEl: '.testi-next',
              }}
              className="monolith-swiper"
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="monolith-card text-center">
                    
                    <h3 className="monolith-quote-text">
                      "{item.review}"
                    </h3>

                    <div className="monolith-author-box mt-5">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="monolith-avatar" 
                      />
                      <div className="mt-3">
                        <h4 className="monolith-name">{item.name}</h4>
                        <span className="monolith-role">{item.role}</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Sleek Custom Navigation Arrows */}
            <div className="monolith-navigation mt-5 d-flex justify-content-center gap-4">
              <button className="monolith-nav-btn testi-prev">
                <FaArrowLeftLong size={20} />
              </button>
              <button className="monolith-nav-btn testi-next">
                <FaArrowRightLong size={20} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;