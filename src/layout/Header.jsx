import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User, Heart } from 'lucide-react';
import "../styles/header.css";
import SearchOffcanvas from '../components/ui/SearchOffcanvas';
import CartOffcanvas from '../components/ui/CartOffcanvas';
import WishlistOffcanvas from '../components/ui/WishlistOffcanvas';
import logoImg from "../assets/icons/logo.png"

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`indo-western-header fixed-top ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="container-fluid px-4 px-lg-5 position-relative h-100">
          <div className="d-flex justify-content-between align-items-center h-100">
            
            {/* LEFT: Navigation (Desktop) & Hamburger (Mobile) */}
            <div className="left-section d-flex align-items-center">
              {/* Desktop Links */}
              <div className="d-none d-lg-flex align-items-center gap-4">
                <Link className="nav-link-global" to="/">HOME</Link>
                <div className="dropdown-global">
                  <Link className="nav-link-global" to="/shop">CATEGORY</Link>
                  <div className="dropdown-content">
                    <Link to="/shop">Modern Abstract</Link>
                    <Link to="/shop">Indo-Persian</Link>
                    <Link to="/shop">Natural Jute</Link>
                  </div>
                </div>
                <Link className="nav-link-global" to="/about">ABOUT</Link>
              </div>

              {/* Mobile Hamburger */}
              <button className="mobile-toggle d-lg-none" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* CENTER: Logo (Now Perfectly Centered) */}
            <div className="brand-center">
              <Link className="brand-logo" to="/"><img src={logoImg}alt="" /></Link>
            </div>

            {/* RIGHT: Actions */}
            <div className="right-section d-flex gap-4 align-items-center justify-content-end">
               
               {/* Search Trigger */}
               <div data-bs-toggle="offcanvas" data-bs-target="#searchOffcanvas" style={{cursor: 'pointer'}}>
                 <Search size={20} strokeWidth={1.5} className="global-icon d-none d-md-block" />
               </div>
               
               {/* Login Page Link */}
               <Link to="/auth" style={{color: 'inherit'}}>
                 <User size={20} strokeWidth={1.5} className="global-icon d-none d-md-block" />
               </Link>
               
               {/* Wishlist Trigger */}
               <div data-bs-toggle="offcanvas" data-bs-target="#wishlistOffcanvas" style={{cursor: 'pointer'}}>
                 <Heart size={20} strokeWidth={1.5} className="global-icon" />
               </div>
               
               {/* Cart Trigger */}
               <div className="cart-wrapper" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" style={{cursor: 'pointer'}}>
                  <ShoppingBag size={20} strokeWidth={1.5} className="global-icon" />
                  <span className="cart-dot"></span>
               </div>
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu-global ${isMobileOpen ? 'open' : ''} d-lg-none`}>
         <div className="mobile-links">
            <Link to="/" onClick={() => setIsMobileOpen(false)}>HOME</Link>
            <Link to="/shop" onClick={() => setIsMobileOpen(false)}>SHOP</Link>
            <Link to="/about" onClick={() => setIsMobileOpen(false)}>ATELIER</Link>
            {/* Added Login link to mobile menu */}
            <Link to="/auth" onClick={() => setIsMobileOpen(false)}>LOGIN / ACCOUNT</Link> 
         </div>
      </div>

      {/* OFFCANVAS COMPONENTS RENDERED HERE */}
      <SearchOffcanvas />
      <CartOffcanvas />
      <WishlistOffcanvas />
    </>
  );
};

export default Header;