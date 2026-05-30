import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import ProductCard from '../../../components/ProductCard'; // Tumhara existing product card

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/dealoftheday.css';

const DealOfTheDay = () => {
  // Simple Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 35,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Dummy Sale Products
  const saleProducts = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/99/f6/a0/99f6a0f2c37dd858cb1c92e620cd8ca0.jpg",
      title: "Onyx Abstract",
      shortDesc: "Monochrome contemporary weave.",
      currentPrice: "42,500",
      oldPrice: "65,000",
      badge: "SALE"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/17/7f/be/177fbe1a48c28eba4b484ded92e46aa4.jpg",
      title: "Royal Tabriz Silk",
      shortDesc: "Hand-knotted masterpiece.",
      currentPrice: "85,000",
      oldPrice: "1,10,000",
      badge: "-25%"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/69/9c/e5/699ce5a113a7e5463596acc12c9105b4.jpg",
      title: "Faded Shiraz",
      shortDesc: "Distressed Persian design.",
      currentPrice: "48,500",
      oldPrice: "60,000",
      badge: "SALE"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/61/14/92/6114925f5bd1ca9e1be84465985273bd.jpg",
      title: "Kashmiri Heritage",
      shortDesc: "Intricate wool with floral motifs.",
      currentPrice: "55,000",
      oldPrice: "75,000",
      badge: "-15%"
    }
  ];

  return (
    <section className="archive-sale-section">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Top Header: Title & Timer side-by-side */}
        <div className="archive-header-wrapper mb-5">
          <div className="archive-title-area mt-5">
            <span className="archive-subtitle">LIMITED TIME OFFER</span>
            <h2 className="archive-title">The Archive Sale</h2>
          </div>

          <div className="archive-timer-area">
            <span className="timer-text">Sale Ends In:</span>
            <div className="dod-timer-wrapper mb-0">
              <div className="dod-time-box">
                <span className="dod-time-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="dod-time-label">HRS</span>
              </div>
              <span className="dod-time-separator">:</span>
              <div className="dod-time-box">
                <span className="dod-time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="dod-time-label">MINS</span>
              </div>
              <span className="dod-time-separator">:</span>
              <div className="dod-time-box">
                <span className="dod-time-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="dod-time-label">SECS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Slider for Products */}
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.archive-prev',
              nextEl: '.archive-next',
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
            className="archive-swiper"
          >
            {saleProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  shortDesc={product.shortDesc}
                  currentPrice={product.currentPrice}
                  oldPrice={product.oldPrice}
                  badge={product.badge}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows positioned outside the slider */}
          <div className="archive-navigation-wrapper mt-4 d-flex justify-content-end gap-3">
            <button className="archive-nav-btn archive-prev">
              <FaArrowLeftLong size={18} />
            </button>
            <button className="archive-nav-btn archive-next">
              <FaArrowRightLong size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DealOfTheDay;