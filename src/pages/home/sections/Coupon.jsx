import React, { useState } from 'react';
import '../../../styles/coupons.css';

const CouponV2 = () => {
  const coupons = [
    { id: 1, val: "15%", label: "OFF", title: "Weekend Warrior", desc: "Enjoy 15% off on all adventure gears this weekend.", code: "WEEKENDRIDE" },
    { id: 2, val: "₹1K", label: "BACK", title: "New Rider Pro", desc: "Flat ₹1000 cashback on your first electric bike purchase.", code: "NEWRIDER" },
    { id: 3, val: "FREE", label: "GIFT", title: "Pro Accessory", desc: "Get a premium helmet free on orders above ₹15,000.", code: "SAFETYFIRST" }
  ];

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000); // 2 sec baad button reset
  };

  return (
    <section className="coupon-v2-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6">
            <h2 className="Oswald-font fw-bold" style={{fontSize: '2.5rem'}}>SAVINGS HUB</h2>
            <p className="Montserrat-font text-muted">Copy these exclusive codes at checkout to unlock premium discounts.</p>
          </div>
        </div>

        <div className="row g-4">
          {coupons.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="coupon-v2-card">
                <div className="discount-circle Oswald-font">
                  <span style={{fontSize: '1.2rem'}}>{item.val}</span>
                  <span style={{fontSize: '0.6rem'}}>{item.label}</span>
                </div>
                
                <h4 className="Oswald-font">{item.title}</h4>
                <p className="Montserrat-font">{item.desc}</p>
                
                <div className="coupon-footer">
                  <span className="coupon-v2-code">{item.code}</span>
                  <button 
                    className="btn-copy-v2 Montserrat-font"
                    onClick={() => handleCopy(item.code, item.id)}
                  >
                    {copiedId === item.id ? "COPIED!" : "COPY"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouponV2;