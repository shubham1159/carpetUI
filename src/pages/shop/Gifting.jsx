import React from 'react';
import ProductCardCover from '../../components/ProductCard'; // Reusing your premium card
import '../../styles/gifting.css';

const giftBoxes = [
  { id: 1, name: "The Royal Festive Box", desc: "Assorted premium nuts in a handcrafted wooden box.", originalPrice: 4500, discountPrice: 3999, image: "https://i.pinimg.com/736x/e4/93/52/e49352eeb7711c0076a7f82374535ea6.jpg", discountBadge: "Luxury" },
  { id: 2, name: "Heritage Collection", desc: "A vintage velvet box with saffron & exotic dates.", originalPrice: 3200, discountPrice: 2800, image: "https://i.pinimg.com/736x/42/90/16/4290164563b61e3ca3a6f99797be14a0.jpg", discountBadge: "Bestseller" },
  { id: 3, name: "Health & Bloom Hamper", desc: "Eco-friendly packaging with raw seeds & honey walnuts.", originalPrice: 2200, discountPrice: 1850, image: "https://i.pinimg.com/736x/a3/27/9a/a3279ac55bf2147ae9aaaa6a2b0a53b2.jpg", discountBadge: "Organic" },
  { id: 4, name: "The Wedding Trousseau", desc: "Grand silver plated tray with 8 premium varieties.", originalPrice: 8500, discountPrice: 7200, image: "https://i.pinimg.com/1200x/20/0a/90/200a906c38014b67fd88456ec7649c1e.jpg", discountBadge: "Premium" },
];

export default function Gifting() {
  return (
    <div className="gifting-page">
      {/* 1. Luxury Hero Section */}
      <section className="gifting-hero">
        <div className="gift-container hero-split">
          <div className="gift-hero-text">
            <span className="gold-tag">Art of Gifting</span>
            <h1 className="gift-main-title">Elegance in <br /> Every Box</h1>
            <p className="gift-subtitle">
              Celebrate your special moments with NutriNest’s curated luxury hampers. 
              Perfect for weddings, corporate events, and festivities.
            </p>
            <div className="gift-hero-btns">
              <button className="btn-primary-gold">Shop Collection</button>
              <button className="btn-outline-white">Bulk Inquiry</button>
            </div>
          </div>
          <div className="gift-hero-image">
            <img src="https://i.pinimg.com/736x/b3/d2/7c/b3d27cabced45838fdbd8d353d1d2999.jpg" alt="Luxury Gift Box" />
          </div>
        </div>
      </section>

      {/* 2. Personalized Gifting Steps */}
      <section className="gift-steps">
        <div className="gift-container">
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">01</span>
              <h4>Pick a Box</h4>
              <p>Select from our handcrafted wooden, velvet or artisanal paper boxes.</p>
            </div>
            <div className="step-item">
              <span className="step-num">02</span>
              <h4>Select Fillings</h4>
              <p>Choose from our wide range of Grade-A nuts, seeds and exotic sweets.</p>
            </div>
            <div className="step-item">
              <span className="step-num">03</span>
              <h4>Add a Message</h4>
              <p>Customize with a handwritten note or your corporate branding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gift Grid Section */}
      <section className="gift-collection">
        <div className="gift-container">
          <div className="gift-sec-header">
            <h2 className="sec-title">Curated Gift Collections</h2>
            <div className="gold-line"></div>
          </div>
          
          <div className="gift-grid">
            {giftBoxes.map(box => (
              <ProductCardCover key={box.id} product={box} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}