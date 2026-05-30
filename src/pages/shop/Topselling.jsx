import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard'; 
import '../../styles/topselling.css';

const TopSellers = () => {
  // Dummy data with premium 1-liner descriptions
  const topProducts = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/3b/38/0f/3b380fb0cfc61aa29f08ea66dc9e9524.jpg",
      title: "Royal Tabriz",
      shortDesc: "Exquisitely hand-knotted silk threads reflecting timeless Persian artistry.",
      currentPrice: "85,000",
      oldPrice: "1,10,000",
      badge: "BESTSELLER"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/62/43/21/624321b4b69ea79d67a8c4f49a971078.jpg",
      title: "Ivory Lattice",
      shortDesc: "A contemporary blend of plush wool featuring minimalist geometric patterns.",
      currentPrice: "42,500",
      oldPrice: null,
      badge: null
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/65/81/58/6581581469b3cede48d62697ef58b452.jpg",
      title: "Earth & Rust",
      shortDesc: "Authentic vintage weave with rich earthy tones and a heritage finish.",
      currentPrice: "65,000",
      oldPrice: "75,000",
      badge: "LIMITED"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/34/e6/22/34e622aa4e5b81051a5beb9409c1f0c2.jpg",
      title: "Nomadic Weave",
      shortDesc: "Sustainably sourced natural jute, handwoven with rustic tribal motifs.",
      currentPrice: "28,000",
      oldPrice: null,
      badge: null
    }
  ];

  return (
    <section className="top-sellers-section">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Section Header */}
        <div className="section-header-center">
          <span className="ts-subtitle">Most Coveted</span>
          <h2 className="ts-title">Signature Curations</h2>
        </div>

        {/* Product Grid */}
        <div className="row">
          {topProducts.map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={product.id}>
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

        {/* View All Button */}
        <div className="view-all-wrapper mb-3">
          <Link to="/shop" className="btn-view-all">
            DISCOVER ALL CARPETS
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TopSellers;