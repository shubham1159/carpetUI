import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "../../styles/cartoffcanvas.css"
const CartOffcanvas = () => {
  const navigate = useNavigate();

  // Loom & Knot Premium Carpets Mock Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Royal Tabriz Silk Rug",
      price: 85000,
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800",
      quantity: 1
    },
    {
      id: 2,
      name: "Onyx Abstract Tufted",
      price: 42500,
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800",
      quantity: 1
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
    <div className="offcanvas offcanvas-end lk-cart-offcanvas" tabIndex="-1" id="cartOffcanvas">
      
      {/* Header */}
      <div className="offcanvas-header py-4 px-4 lk-offcanvas-header">
        <h5 className="lk-cart-title">
          THE ATELIER BAG <span className="lk-cart-count">[{cartItems.length}]</span>
        </h5>
        <button type="button" className="lk-btn-close-minimal" data-bs-dismiss="offcanvas">
          <X size={24} strokeWidth={1} />
        </button>
      </div>

      {/* Body */}
      <div className="offcanvas-body px-4">
        {cartItems.length > 0 ? (
          <div className="lk-cart-items-wrapper">
            {cartItems.map((item) => (
              <div className="lk-cart-item-luxury d-flex gap-4 mb-4 pb-4" key={item.id}>
                
                <div className="lk-cart-img-box">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="lk-cart-info-box flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <h6 className="lk-item-name m-0">{item.name}</h6>
                    <button className="lk-remove-btn" onClick={() => removeItem(item.id)}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                  
                  <p className="lk-item-price mt-1">₹{item.price.toLocaleString()}</p>
                  
                  <div className="lk-quantity-wrap mt-3">
                    <button className="lk-q-btn" onClick={() => updateQty(item.id, -1)}><Minus size={12} /></button>
                    <span className="lk-q-val">{item.quantity}</span>
                    <button className="lk-q-btn" onClick={() => updateQty(item.id, 1)}><Plus size={12} /></button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="lk-empty-cart text-center py-5">
            <ShoppingBag size={48} strokeWidth={1} className="mb-4 lk-empty-icon" />
            <p className="lk-empty-text">YOUR BAG IS EMPTY</p>
            <button 
              className="lk-btn-shop-luxury mt-4" 
              data-bs-dismiss="offcanvas"
              onClick={() => navigate('/shop')}
            >
              EXPLORE COLLECTIONS
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="lk-offcanvas-footer p-4">
          <div className="d-flex justify-content-between mb-2">
            <span className="lk-label-total">SUBTOTAL</span>
            <span className="lk-val-total">₹{subtotal.toLocaleString()}</span>
          </div>
          <p className="lk-shipping-note mb-4">Complimentary global shipping on all heritage orders.</p>
          
          <button 
            className="lk-btn-checkout w-100 mb-3" 
            onClick={() => navigate('/checkOut')} 
            data-bs-dismiss="offcanvas"
          >
            PROCEED TO CHECKOUT
          </button>
          
          <button 
            className="lk-btn-view-cart w-100" 
            data-bs-dismiss="offcanvas" 
            onClick={() => navigate('/cart')}
          >
            VIEW SHOPPING BAG
          </button>
        </div>
      )}
    </div>
  );
};

export default CartOffcanvas;