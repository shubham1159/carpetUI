import React, { useState } from "react";
import { Mail, Phone, Edit2, CreditCard, Wallet, Smartphone, Check, Lock, CheckCircle, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/checkout.css";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailPhoneSaved, setEmailPhoneSaved] = useState(false);
  const [shippingSaved, setShippingSaved] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({});
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  const [shippingFormData, setShippingFormData] = useState({
    fullName: "", mobile: "", address: "", city: "", state: "", pincode: ""
  });

  const handleEmailPhoneSubmit = (e) => {
    e.preventDefault();
    if (email && phone) {
      setEmailPhoneSaved(true);
      setShowShippingForm(true);
    }
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setShippingInfo(shippingFormData);
    setShippingSaved(true);
    setShowShippingForm(false);
  };

  const handlePlaceOrder = () => {
    setShowSuccessToast(true);
    setTimeout(() => { navigate("/"); }, 4000);
  };

  const paymentMethods = [
    { id: "upi", icon: <Smartphone size={18} />, title: "UPI / Google Pay / PhonePe" },
    { id: "card", icon: <CreditCard size={18} />, title: "Debit / Credit Card" },
    { id: "cod", icon: <Wallet size={18} />, title: "Cash on Delivery" }
  ];

  return (
    <div className="lk-checkout-page">
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lk-success-overlay">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center success-card">
                <div className="mb-4">
                  <CheckCircle size={80} strokeWidth={1} color="#C09D5B" />
                </div>
                <h2 className="success-title-serif">THANK YOU FOR YOUR PATRONAGE</h2>
                <p className="success-tagline">Your Loom & Knot masterpiece is being prepared.</p>
                <div className="loader-line mt-4"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container" style={{paddingTop: '7rem', paddingBottom: '5rem'}}>
        <div className="checkout-header text-center mb-5">
            <span className="subtitle-gold">SECURE CHECKOUT</span>
            <h2 className="title-serif mt-2">COMPLETE YOUR ORDER</h2>
        </div>

        <div className="row g-5">
          <div className="col-lg-7">
            <div className="lk-steps-container">
              
              {/* Step 1: Contact */}
              <div className={`lk-step ${!emailPhoneSaved ? 'active' : 'completed'}`}>
                <div className="step-label d-flex align-items-center">
                  <span className="step-num">01</span>
                  <h5 className="m-0 ms-3">CONTACT INFORMATION</h5>
                  {emailPhoneSaved && <Check size={18} className="ms-auto text-gold" />}
                </div>

                {!emailPhoneSaved ? (
                  <motion.div className="step-body mt-4">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="lk-field">
                          <label>Email Address</label>
                          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="lk-field">
                          <label>Phone Number</label>
                          <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+91" />
                        </div>
                      </div>
                    </div>
                    <button className="btn-lk-dark mt-4" onClick={handleEmailPhoneSubmit}>SAVE & CONTINUE</button>
                  </motion.div>
                ) : (
                  <div className="step-summary d-flex justify-content-between align-items-center mt-3">
                    <p className="m-0">{email} <span className="dot">•</span> {phone}</p>
                    <button className="edit-link" onClick={() => setEmailPhoneSaved(false)}>Edit</button>
                  </div>
                )}
              </div>

              {/* Step 2: Shipping */}
              <div className={`lk-step ${emailPhoneSaved ? (showShippingForm || !shippingSaved ? 'active' : 'completed') : 'disabled'}`}>
                <div className="step-label d-flex align-items-center">
                  <span className="step-num">02</span>
                  <h5 className="m-0 ms-3">SHIPPING DESTINATION</h5>
                  {shippingSaved && !showShippingForm && <Check size={18} className="ms-auto text-gold" />}
                </div>

                {emailPhoneSaved && (!shippingSaved || showShippingForm) && (
                  <motion.div className="step-body mt-4">
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="lk-field">
                          <label>Full Name</label>
                          <input value={shippingFormData.fullName} onChange={(e)=>setShippingFormData({...shippingFormData, fullName: e.target.value})} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="lk-field">
                          <label>Shipping Address</label>
                          <input value={shippingFormData.address} onChange={(e)=>setShippingFormData({...shippingFormData, address: e.target.value})} placeholder="House/Flat No., Street, Area" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="lk-field">
                          <label>City</label>
                          <input value={shippingFormData.city} onChange={(e)=>setShippingFormData({...shippingFormData, city: e.target.value})} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="lk-field">
                          <label>Postal Code</label>
                          <input value={shippingFormData.pincode} onChange={(e)=>setShippingFormData({...shippingFormData, pincode: e.target.value})} />
                        </div>
                      </div>
                    </div>
                    <button className="btn-lk-dark mt-4" onClick={handleShippingSubmit}>CONTINUE TO PAYMENT</button>
                  </motion.div>
                )}
                
                {shippingSaved && !showShippingForm && (
                   <div className="step-summary d-flex justify-content-between align-items-center mt-3">
                    <p className="m-0">{shippingInfo.fullName}, {shippingInfo.address}, {shippingInfo.city}</p>
                    <button className="edit-link" onClick={() => setShowShippingForm(true)}>Edit</button>
                  </div>
                )}
              </div>

              {/* Step 3: Payment */}
              <div className={`lk-step ${shippingSaved && !showShippingForm ? 'active' : 'disabled'}`}>
                <div className="step-label d-flex align-items-center">
                  <span className="step-num">03</span>
                  <h5 className="m-0 ms-3">PAYMENT METHOD</h5>
                </div>
                
                {shippingSaved && !showShippingForm && (
                  <div className="payment-grid mt-4">
                    {paymentMethods.map(m => (
                      <label key={m.id} className={`payment-card ${selectedPayment === m.id ? 'selected' : ''}`}>
                        <input type="radio" name="payment" onChange={()=>setSelectedPayment(m.id)} className="d-none" />
                        <div className="d-flex align-items-center">
                          <div className="method-icon me-3">{m.icon}</div>
                          <span className="method-title">{m.title}</span>
                          <div className={`custom-check ms-auto ${selectedPayment === m.id ? 'checked' : ''}`}></div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="col-lg-5">
            <div className="order-summary-box">
              <h5 className="summary-title mb-4">ORDER SUMMARY</h5>
              
              <div className="product-mini-list mb-4 pb-4 border-bottom">
                 <div className="mini-item d-flex align-items-center gap-3">
                    <div className="mini-img">
                       <img src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=200" alt="Royal Tabriz Rug" />
                    </div>
                    <div className="mini-info">
                       <p className="m-0 item-name">Royal Tabriz Silk Rug</p>
                       <p className="m-0 small text-muted">Dimensions: 8' x 10'</p>
                       <p className="m-0 small text-muted mt-1">Qty: 1</p>
                    </div>
                    <div className="mini-price ms-auto">₹85,000</div>
                 </div>
              </div>

              <div className="calculation-box">
                <div className="calc-row d-flex justify-content-between mb-2">
                  <span className="calc-label">Subtotal</span>
                  <span className="calc-value">₹85,000.00</span>
                </div>
                <div className="calc-row d-flex justify-content-between mb-2">
                  <span className="calc-label">Global Shipping</span>
                  <span className="calc-value text-gold">Complimentary</span>
                </div>
                <div className="calc-row total d-flex justify-content-between mt-4 pt-4 border-top">
                  <span className="total-label">GRAND TOTAL</span>
                  <span className="total-value">₹85,000.00</span>
                </div>
              </div>

              <button className="btn-lk-gold w-100 mt-5" disabled={!selectedPayment} onClick={handlePlaceOrder}>
                AUTHORIZE PAYMENT <ChevronRight size={16} className="ms-2" />
              </button>

              <div className="secure-footer mt-4 text-center">
                <Lock size={12} className="me-2 text-muted" />
                <span className="secure-text">SECURE 256-BIT SSL ENCRYPTED TRANSACTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;