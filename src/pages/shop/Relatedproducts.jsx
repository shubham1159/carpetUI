import React from 'react';
import '../../styles/related.css';
import ProductCard from '../../components/ProductCard'; 

const Related = () => {
  const relatedProducts = [
    {
      id: 1,
      title: "Nomadic Weave",
      shortDesc: "Sustainably sourced natural jute with rustic tribal motifs.",
      currentPrice: "28,000",
      oldPrice: "35,000",
      image: "https://i.pinimg.com/1200x/3b/38/0f/3b380fb0cfc61aa29f08ea66dc9e9524.jpg",
      badge: "BEST SELLER"
    },
    {
      id: 2,
      title: "Ivory Lattice",
      shortDesc: "A contemporary blend of plush wool featuring minimalist patterns.",
      currentPrice: "42,500",
      oldPrice: null,
      image: "https://i.pinimg.com/1200x/62/43/21/624321b4b69ea79d67a8c4f49a971078.jpg",
      badge: "TRENDING"
    },
    {
      id: 3,
      title: "Earth & Rust",
      shortDesc: "Authentic vintage weave with rich earthy tones.",
      currentPrice: "65,000",
      oldPrice: "75,000",
      image: "https://i.pinimg.com/736x/65/81/58/6581581469b3cede48d62697ef58b452.jpg",
      badge: "TOP RATED"
    },
    {
      id: 4,
      title: "Golden Loom",
      shortDesc: "Pure silk threads reflecting opulent elegance.",
      currentPrice: "1,20,000",
      oldPrice: null,
      image: "https://i.pinimg.com/1200x/34/e6/22/34e622aa4e5b81051a5beb9409c1f0c2.jpg",
      badge: "LIMITED"
    }
  ];

  return (
    <section className="related-products-section">
      <div className="container-fluid px-4 px-lg-5">
        
        {/* Section Header */}
        <div className="related-header text-center">
          <span className="related-subtitle">COMPLEMENTARY PIECES</span>
          <h2 className="related-title">You May Also Like</h2>
          <p className="related-desc mx-auto">
            Explore our curated range of premium rugs where centuries-old tradition meets contemporary elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="row g-4">
          {relatedProducts.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={product.id}>
              {/* Used the exact prop structure we set up in previous sections */}
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

      </div>
    </section>
  );
};

export default Related;