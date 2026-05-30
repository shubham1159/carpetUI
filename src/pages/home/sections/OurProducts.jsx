import React, { useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import "../../../styles/productcard.css";

// 👇 YEH DONO IMPORTS MISSING THE 👇
import "../../../styles/topselling.css"; // Isme ts-title, ts-subtitle, btn-view-all hai
import "../../../styles/ourproducts.css"; // Isme banani padegi ye file jisme filter-btn ki CSS hogi

const OurProducts = () => {
  // State for active category filter
  const [activeTab, setActiveTab] = useState('All');

  // Categories list
  const categories = ['All', 'Hand-Knotted', 'Modern', 'Vintage', 'Silk'];

  // Dummy Product Data with Categories
  const allProducts = [
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

  // Filter logic
  const filteredProducts = activeTab === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeTab);

  return (
    <section className="our-products-section">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Section Header */}
        <div className="section-header-center">
          <span className="ts-subtitle">The Masterpieces</span>
          <h2 className="ts-title">Explore Our Products</h2>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 product-fade-in" key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                shortDesc={product.shortDesc}
                currentPrice={product.currentPrice}
                oldPrice={product.oldPrice}
                badge={product.badge}
              />
            </div>
          ))}
        </div>

        {/* Load More / Shop All */}
        <div className="view-all-wrapper">
          <a href="/shop" className="btn-view-all">
            VIEW FULL CATALOG
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurProducts;