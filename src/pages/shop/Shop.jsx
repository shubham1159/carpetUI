import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '../../components/ProductCard'; 
import '../../styles/shop.css';

const ShopPage = () => {
  const [priceRange, setPriceRange] = useState(150000);

  // Updated Data for Luxury Carpets
  const products = [
    {
      id: 1,
      category: 'Hand-Knotted',
      image: "https://i.pinimg.com/1200x/d6/39/61/d63961b76ed224b5522a42c6fae6bd84.jpg",
      title: "Kashmiri Heritage",
      shortDesc: "Intricate hand-knotted wool with floral motifs.",
      currentPrice: "55,000",
      oldPrice: null,
      badge: "NEW"
    },
    {
      id: 2,
      category: 'Modern',
      image: "https://i.pinimg.com/736x/90/33/a7/9033a7ea4c17b2b72c092900432872b9.jpg",
      title: "Onyx Abstract",
      shortDesc: "Monochrome tones in a plush contemporary weave.",
      currentPrice: "32,000",
      oldPrice: "40,000",
      badge: null
    },
    {
      id: 3,
      category: 'Vintage',
      image: "https://i.pinimg.com/1200x/91/8a/de/918ade24ec8bbd557a90273fba538784.jpg",
      title: "Faded Shiraz",
      shortDesc: "Distressed Persian design for a timeless aura.",
      currentPrice: "48,500",
      oldPrice: "60,000",
      badge: "-20%"
    },
    {
      id: 4,
      category: 'Silk',
      image: "https://i.pinimg.com/736x/fa/27/86/fa27861fe407d266533e5c706bdaf096.jpg",
      title: "Golden Loom",
      shortDesc: "Pure silk threads reflecting opulent elegance.",
      currentPrice: "1,20,000",
      oldPrice: null,
      badge: "PREMIUM"
    },
    {
      id: 5,
      category: 'Modern',
      image: "https://i.pinimg.com/1200x/b3/a4/d9/b3a4d9aedb10d4982a1ac6346befe691.jpg",
      title: "Nordic Minimal",
      shortDesc: "Clean lines and muted textures for modern homes.",
      currentPrice: "25,000",
      oldPrice: null,
      badge: null
    },
    {
      id: 6,
      category: 'Hand-Knotted',
      image: "https://i.pinimg.com/1200x/3e/95/d5/3e95d576285252b46b6c79e5394eed50.jpg",
      title: "Tribal Bhadohi",
      shortDesc: "Authentic Indian craftsmanship with earthy dyes.",
      currentPrice: "38,000",
      oldPrice: "45,000",
      badge: null
    },
  ];

  return (
    <div className="lk-shop-page py-5 mt-5">
      <div className="container py-lg-5">
        
        {/* Mobile Filter Toggle (Visible only on mobile) */}
        <div className="d-lg-none mb-4">
            <button className="lk-btn-filter-mobile" data-bs-toggle="offcanvas" data-bs-target="#mobileFilter">
               <Filter size={18} className="me-2" /> REFINE COLLECTION
            </button>
        </div>

        <div className="row g-lg-5">
          
          {/* Desktop Sidebar Filter */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="lk-filter-sidebar">
              <h5 className="lk-sidebar-title mb-4">
                Refine By
              </h5>
              
              {/* Category Filter */}
              <div className="lk-filter-group mb-5">
                <span className="lk-filter-label">Collections</span>
                {["Hand-Knotted", "Modern Abstract", "Vintage Persian", "Tribal & Nomadic"].map((cat, i) => (
                  <label className="lk-check-wrap" key={i}>
                    <input type="checkbox" className="lk-check-input" />
                    <span className="lk-check-box"></span>
                    <span className="lk-check-text">{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material Filter */}
              <div className="lk-filter-group mb-5">
                <span className="lk-filter-label">Materials</span>
                {["Pure Silk", "Highland Wool", "Natural Jute", "Bamboo Silk", "Cotton Blend"].map((note, i) => (
                  <label className="lk-check-wrap" key={i}>
                    <input type="checkbox" className="lk-check-input" />
                    <span className="lk-check-box"></span>
                    <span className="lk-check-text">{note}</span>
                  </label>
                ))}
              </div>

              {/* Price Filter */}
              <div className="lk-filter-group mb-5">
                <span className="lk-filter-label">Price Range</span>
                <input 
                  type="range" 
                  className="lk-range-slider" 
                  min="20000" 
                  max="200000" 
                  step="5000"
                  value={priceRange} 
                  onChange={(e) => setPriceRange(e.target.value)}
                />
                <div className="d-flex justify-content-between mt-3">
                  <span className="lk-price-text">₹20K</span>
                  <span className="lk-price-text-active">Under ₹{(priceRange / 1000).toFixed(0)}K</span>
                </div>
              </div>

              <button className="lk-btn-apply-filters">UPDATE GALLERY</button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-lg-9">
            {/* Sort & Count Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 lk-border-bottom">
                <span className="lk-results-count">Showing {products.length} Masterpieces</span>
                <select className="lk-sort-select">
                    <option>Featured Curation</option>
                    <option>Price: Accessible to High</option>
                    <option>Price: High to Accessible</option>
                    <option>Newest Additions</option>
                </select>
            </div>

            <div className="row g-4">
              {products.map((item) => (
                <div className="col-md-6 col-xl-4" key={item.id}>
                  <ProductCard 
                    image={item.image}
                    title={item.title}
                    shortDesc={item.shortDesc}
                    currentPrice={item.currentPrice}
                    oldPrice={item.oldPrice}
                    badge={item.badge}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopPage;