import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
// Updated icons for carpets
import { Heart, Minus, Plus, ShieldCheck, Truck, Feather, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../styles/productDetails.css'; 
import Related from './Relatedproducts';

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Updated Data for Loom & Knot Carpet Theme
  const productData = {
    title: "THE ROYAL TABRIZ SILK RUG",
    brand: "LOOM & KNOT ATELIER",
    currentPrice: "85,000",
    oldPrice: "1,10,000",
    badge: "HERITAGE COLLECTION",
    description: "A masterpiece of Persian artistry, hand-knotted by master weavers over 8 months. Crafted with pure silk threads, this rug reflects an opulent sheen and unparalleled knot density, designed to be the heirloom of your architectural space.",
    images: [
      "https://i.pinimg.com/1200x/3b/38/0f/3b380fb0cfc61aa29f08ea66dc9e9524.jpg",
      "https://i.pinimg.com/1200x/62/43/21/624321b4b69ea79d67a8c4f49a971078.jpg",
      "https://i.pinimg.com/736x/65/81/58/6581581469b3cede48d62697ef58b452.jpg",
      "https://i.pinimg.com/1200x/34/e6/22/34e622aa4e5b81051a5beb9409c1f0c2.jpg"
    ]
  };

  return (
    <>
    <div className="lumina-detail-page">
      <div className="container">
        <div className="row g-5">
          
          {/* Left: Gallery Section */}
          <div className="col-lg-7">
            <div className="gallery-sticky-wrap">
              {/* Main Slider */}
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Thumbs, Navigation]}
                className="main-image-slider-premium mb-3"
              >
                {productData.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="main-img-wrap">
                      <img src={img} alt={`Carpet View ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnails */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="thumb-slider-premium"
              >
                {productData.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="thumb-img-wrap-minimal">
                      <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="col-lg-5">
            <div className="detail-content-minimal">
              <span className="premium-label mb-2">{productData.badge}</span>
              <p className="brand-subtitle mb-2">{productData.brand}</p>
              <h1 className="title-serif-lg mb-3">{productData.title}</h1>
              
              <div className="detail-price-minimal mb-4">
                <span className="price-now-detail">₹{productData.currentPrice}</span>
                <span className="price-was-detail">₹{productData.oldPrice}</span>
              </div>

              <div className="divider-minimal mb-4"></div>

              <p className="description-text mb-5">{productData.description}</p>

              {/* Attributes (Updated for Carpets) */}
              <div className="product-attributes d-flex gap-4 mb-5">
                 <div className="attr-item">
                    <Feather size={18} className="mb-2 text-gold" />
                    <span>100% Pure Silk</span>
                 </div>
                 <div className="attr-item">
                    <Palette size={18} className="mb-2 text-gold" />
                    <span>Natural Dyes</span>
                 </div>
              </div>

              {/* Action Area */}
              <div className="action-row d-flex align-items-center gap-3 mb-5">
                <div className="qty-selector-minimal">
                  <button onClick={() => quantity > 1 && setQuantity(quantity-1)}><Minus size={14}/></button>
                  <span className="qty-val">{quantity}</span>
                  <button onClick={() => setQuantity(quantity+1)}><Plus size={14}/></button>
                </div>
                <button className="btn-add-luxury flex-grow-1" onClick={()=>navigate('/cart')}>
                  ADD TO SHOPPING BAG
                </button>
                <button className="btn-wishlist-minimal"><Heart size={20}/></button>
              </div>

              {/* Features List */}
              <div className="trust-list-minimal border-top pt-4">
                <div className="trust-item mb-3">
                  <Truck size={18} className="text-gold" />
                  <span>Complimentary Global Shipping on Heritage Collection</span>
                </div>
                <div className="trust-item">
                  <ShieldCheck size={18} className="text-gold" />
                  <span>Certificate of Authenticity Included</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Related/>
    </>
  );
};

export default ProductDetail;