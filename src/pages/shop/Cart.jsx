import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import "../../styles/cart.css";

export default function Cart() {
  const navigate = useNavigate();
  
  // Updated Data for Luxury Carpets
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Royal Tabriz Silk Rug",
      variant: "Heritage Collection / 8' x 10'",
      price: 85000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800"
    },
    {
      id: 2,
      name: "Onyx Abstract Tufted",
      variant: "Contemporary Series / 5' x 8'",
      price: 42500,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800"
    }
  ]);

  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <main className="lk-cart-page">
      <section className="cart-main-section">
        <div className="container py-lg-5" style={{marginTop: "7rem"}}>
          
          {/* Section Header */}
          <div className="cart-header-title text-center mb-5">
            <h6 className="subtitle-gold letter-spacing-4">THE ATELIER BAG</h6>
            <h2 className="title-serif display-5 mt-2">YOUR SELECTION</h2>
          </div>

          {cartItems.length > 0 ? (
            <div className="row g-5">
              
              {/* Left Column: Items List */}
              <div className="col-lg-8">
                <div className="cart-table-header d-none d-md-grid pb-3">
                  <span className="label-minimal">Masterpiece Details</span>
                  <span className="label-minimal text-center">Quantity</span>
                  <span className="label-minimal text-end">Total</span>
                </div>

                <div className="cart-items-container">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item-row-minimal py-4">
                      <div className="row align-items-center">
                        <div className="col-md-6 col-12">
                          <div className="d-flex align-items-center">
                            <div className="cart-img-preview me-4">
                              <img src={item.image} alt={item.name} className="img-fluid" />
                            </div>
                            <div className="cart-item-details">
                              <h5 className="item-title-serif mb-1">{item.name}</h5>
                              <p className="item-variant-minimal mb-3">{item.variant}</p>
                              <button className="remove-link-minimal" onClick={() => removeItem(item.id)}>
                                <Trash2 size={12} className="me-1" /> REMOVE
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3 col-6 mt-4 mt-md-0">
                          <div className="qty-control-minimal mx-auto">
                            <button onClick={() => updateQty(item.id, -1)}><Minus size={12} /></button>
                            <span className="qty-value">{item.quantity}</span>
                            <button onClick={() => updateQty(item.id, 1)}><Plus size={12} /></button>
                          </div>
                        </div>

                        <div className="col-md-3 col-6 mt-4 mt-md-0 text-end">
                          <span className="item-total-price">₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3">
                  <Link to="/shop" className="back-to-shop-link">
                    <ArrowLeft size={14} className="me-2" /> DISCOVER MORE RUGS
                  </Link>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="col-lg-4">
                <div className="order-summary-card-minimal p-4">
                  <h4 className="summary-title-serif mb-4 pb-3">ORDER SUMMARY</h4>
                  
                  <div className="d-flex justify-content-between mb-3 summary-row-minimal">
                    <span className="label">Estimated Subtotal</span>
                    <span className="value">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3 summary-row-minimal">
                    <span className="label">Global Shipping</span>
                    <span className="value text-gold">Complimentary</span>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <div className="d-flex justify-content-between mb-5">
                    <span className="total-label">GRAND TOTAL</span>
                    <span className="total-value">₹{subtotal.toLocaleString()}</span>
                  </div>

                  <button className="btn-checkout-luxury w-100 py-3 mb-3" onClick={() => navigate('/checkOut')}>
                    PROCEED TO CHECKOUT
                  </button>
                  <p className="secure-checkout-text text-center mt-3">
                    Secure 256-bit SSL encrypted checkout
                  </p>
                </div>
              </div>

            </div>
          ) : (
            <div className="empty-cart-view text-center py-5">
              <ShoppingBag size={60} strokeWidth={1} className="text-muted mb-4 opacity-50" />
              <h2 className="title-serif">YOUR BAG IS EMPTY</h2>
              <p className="empty-description mb-5">Explore our curated collections to find your next masterpiece.</p>
              <Link to="/shop" className="btn-checkout-luxury px-5 py-3 text-decoration-none d-inline-block">
                EXPLORE COLLECTIONS
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}