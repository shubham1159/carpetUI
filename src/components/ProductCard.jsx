import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import '../styles/productcard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, shortDesc, currentPrice, oldPrice, badge }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="product-card-premium">
      
      {/* Image Container */}
      <div className="product-img-container" onClick={() => navigate("/productDetails")}>
        
        {/* Badge Section (Optional) */}
        {badge && <div className="premium-badge">{badge}</div>}

        {/* Wishlist Button */}
        <button 
          className={`wishlist-btn-minimal ${wishlisted ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation(); // Prevents navigating to product page when clicking heart
            setWishlisted(!wishlisted);
          }}
        >
          <Heart 
            size={16} 
            fill={wishlisted ? "#B89B72" : "none"} 
            color={wishlisted ? "#B89B72" : "#111111"} 
            strokeWidth={1.5}
          />
        </button>
        
        {/* Main Product Image */}
        <img 
          src={image} 
          alt={title} 
          className="product-main-img" 
        />
        
        {/* Quick Add Overlay */}
        <div className="product-action-overlay">
          <button 
            className="quick-add-btn" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#cartOffcanvas"
            onClick={(e) => e.stopPropagation()} // Prevents navigating to product page when clicking add to cart
          >
            <ShoppingBag size={16} className="me-2" strokeWidth={1.5} /> QUICK ADD
          </button>
        </div>
      </div>

      {/* Information Section (Now Left Aligned) */}
      <div className="product-info-minimal text-start">
        
        {/* Soft Category/Description */}
        <h3 className="product-title-serif" onClick={() => navigate("/productDetails")}>
          {title}
        </h3>
        <p className="product-scent-desc">{shortDesc}</p>
        
        {/* Main Title */}
        
        {/* Price Box */}
        <div className="product-price-box">
          <span className="price-now">₹{currentPrice}</span>
          {oldPrice && <span className="price-was">₹{oldPrice}</span>}
        </div>
        
      </div>
      
    </div>
  );
};

export default ProductCard;