import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/breadcrumb.css"

const CHEVRON_SVG = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function BreadcrumbBanner({ title, links = [], bgImage }) {
  // Arpanam Style: Fallback title
  const displayTitle = title || "Our Collection"; 
  
  const titleParts = displayTitle.split(' ');
  const firstWord = titleParts[0] || "";
  const remainingTitle = titleParts.slice(1).join(' ');

  // Arpanam Style: Default premium background
  const defaultBg = "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=1600";

  return (
    <section 
      className="arp-bc-banner" 
      style={{ backgroundImage: `url(${bgImage || defaultBg})` }}
    >
      {/* Background Watermark: Thoda opacity kam aur classy font */}
      <div className="arp-bc-watermark" aria-hidden="true">
        {firstWord}
      </div>
      
      <div className="arp-bc-container container">
        <nav className="arp-bc-nav mb-3">
          <Link to="/" className="arp-bc-link">Home</Link>
          
          {links && links.map((link, index) => (
            <React.Fragment key={index}>
              <span className="arp-bc-separator">{CHEVRON_SVG}</span>
              <Link to={link.href || "#"} className="arp-bc-link">
                {link.label}
              </Link>
            </React.Fragment>
          ))}

          <span className="arp-bc-separator">{CHEVRON_SVG}</span>
          <span className="arp-bc-current">{displayTitle}</span>
        </nav>

        <h1 className="arp-bc-title">
          {remainingTitle ? (
            <>
              <span className="first-word">{firstWord}</span> 
              <em className="remaining-text">{remainingTitle}</em>
            </>
          ) : (
            <em className="remaining-text">{displayTitle}</em>
          )}
        </h1>
        
        {/* Arpanam Signature: Ek choti si line title ke niche */}
        <div className="arp-bc-line"></div>
      </div>
      
      <div className="arp-bc-overlay"></div>
    </section>
  );
}