import React, { useState } from 'react';
import { Trash2, ShoppingBag, Heart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/wishlist.css'; // Make sure this path is correct

const WishlistOffcanvas = () => {
  const navigate = useNavigate();
  
  // Loom & Knot Premium Carpets Mock Data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Vintage Shiraz Runner",
      price: 42000,
      image: "https://images.unsplash.com/photo-1575510656041-e970a2712534?q=80&w=800",
    },
    {
      id: 2,
      name: "Nomadic Jute Weave",
      price: 28000,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800",
    }
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div 
      className="offcanvas offcanvas-end lk-wishlist-offcanvas" 
      tabIndex="-1" 
      id="wishlistOffcanvas" 
    >
      {/* HEADER */}
      <div className="offcanvas-header py-4 px-4 lk-offcanvas-header">
        <h5 className="lk-wishlist-title">
          THE CURATION <span className="lk-wishlist-count">[{wishlistItems.length}]</span>
        </h5>
        <button 
          type="button" 
          className="lk-btn-close-minimal" 
          data-bs-dismiss="offcanvas" 
        >
          <X size={24} strokeWidth={1} />
        </button>
      </div>

      {/* BODY */}
      <div className="offcanvas-body px-4">
        {wishlistItems.length > 0 ? (
          <div className="lk-wishlist-items-wrapper">
            {wishlistItems.map((item) => (
              <div className="lk-wish-item-luxury d-flex gap-4 mb-4 pb-4" key={item.id}>
                
                <div className="lk-wish-img-box">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="lk-wish-info-box flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <h6 className="lk-item-name m-0">{item.name}</h6>
                    <button className="lk-remove-btn" onClick={() => removeItem(item.id)}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                  
                  <p className="lk-item-price mt-1 mb-3">₹{item.price.toLocaleString()}</p>
                  
                  <button className="lk-btn-add-to-bag-sm">
                    <ShoppingBag size={14} className="me-2" /> MOVE TO BAG
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="lk-empty-wish text-center py-5">
            <Heart size={48} strokeWidth={1} className="mb-4 lk-empty-icon" />
            <p className="lk-empty-text">YOUR ARCHIVE IS EMPTY</p>
            <button 
              className="lk-btn-discover-luxury mt-4" 
              data-bs-dismiss="offcanvas"
              onClick={() => navigate('/shop')}
            >
              BROWSE MASTERPIECES
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistOffcanvas;