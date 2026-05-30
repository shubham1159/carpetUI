import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Welcome to Loom & Knot Atelier!");
    
    navigate('/profile'); 
  };

  return (
    <div className="lk-auth-page">
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          
          {/* LEFT SIDE: Luxury Heritage Visual */}
          <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center lk-bg-auth-visual">
            <div className="lk-auth-overlay"></div>
            <div className="lk-auth-content-left text-center text-white p-5 position-relative z-2">
              <span className="lk-overline-gold mb-3">LOOM & KNOT ATELIER</span>
              <h2 className="display-4 fw-light text-white mb-4 lk-serif-title">ENTER THE ARCHIVE</h2>
              <p className="lk-auth-tagline mb-5 text-white-50 mx-auto" style={{maxWidth: '450px'}}>
                Join our inner circle. Gain exclusive access to private sales, bespoke commissioning services, and archival masterpiece collections.
              </p>
              
              <div className="lk-auth-benefits text-start d-inline-block">
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle2 className="me-3 text-gold" size={18} />
                  <span>Early Access to New Curation</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <CheckCircle2 className="me-3 text-gold" size={18} />
                  <span>Complimentary Design Consultations</span>
                </div>
                <div className="d-flex align-items-center">
                  <CheckCircle2 className="me-3 text-gold" size={18} />
                  <span>Track Bespoke Orders Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Crisp Editorial Auth Sheet */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center bg-white">
            <div className="lk-auth-form-container w-100 p-4 p-md-5" style={{maxWidth: '500px'}}>
              <div className="text-center mb-5">
                <h3 className="lk-auth-main-title mb-2">{isLogin ? 'WELCOME BACK' : 'CREATE ACCOUNT'}</h3>
                <p className="lk-auth-subtitle text-muted">
                  {isLogin ? 'Sign in to access your curated selections and orders.' : 'Register to unlock exclusive atelier privileges.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="lk-form-layout">
                {!isLogin && (
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="lk-field-wrap">
                        <label>First Name</label>
                        <input type="text" placeholder="John" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="lk-field-wrap">
                        <label>Last Name</label>
                        <input type="text" placeholder="Doe" required />
                      </div>
                    </div>
                  </div>
                )}

                <div className="lk-field-wrap mb-4">
                  <label>Email Address</label>
                  <input type="email" placeholder="name@example.com" required />
                </div>

                <div className="lk-field-wrap mb-2">
                  <label>Password</label>
                  <input type="password" placeholder="••••••••" required />
                </div>

                {isLogin && (
                  <div className="text-end mb-4">
                    <button type="button" className="lk-forgot-link">Forgot Password?</button>
                  </div>
                )}

                <button type="submit" className="lk-btn-auth-submit w-100 mt-4">
                  {isLogin ? 'SIGN IN' : 'REGISTER NOW'} <ArrowRight size={16} className="ms-2" />
                </button>
              </form>

              <div className="text-center mt-5">
                <p className="lk-toggle-info text-dark">
                  {isLogin ? "New to Loom & Knot?" : "Already have an account?"}
                  <button 
                    className="lk-toggle-link ms-2 fw-bold" 
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'Create Account' : 'Sign In Here'}
                  </button>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;