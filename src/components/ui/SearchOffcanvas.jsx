import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import "../../styles/search.css"
const SearchOffcanvas = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Redesigned Quick Links for Loom & Knot (Carpets)
  const quickLinks = [
    "Hand-Knotted Silk", 
    "Vintage Persian", 
    "Modern Abstract", 
    "Tribal Rugs", 
    "Bespoke Services"
  ];

  return (
    <div 
      className="offcanvas offcanvas-top lk-search-offcanvas" 
      tabIndex="-1" 
      id="searchOffcanvas" 
      aria-labelledby="searchOffcanvasLabel"
    >
      {/* Header with Close Action */}
      <div className="offcanvas-header container py-4">
        <button 
          type="button" 
          className="lk-btn-close ms-auto" 
          data-bs-dismiss="offcanvas" 
          aria-label="Close"
        >
          <X size={36} strokeWidth={1} />
        </button>
      </div>

      <div className="offcanvas-body">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              
              {/* Search Input Area */}
              <div className="lk-search-input-box mb-5">
                <input 
                  type="text" 
                  className="lk-search-field" 
                  placeholder="SEARCH COLLECTIONS, MATERIALS, OR STYLES..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="lk-search-submit-btn">
                   <Search size={28} strokeWidth={1} />
                </button>
              </div>

              {/* Suggestions / Trending Section */}
              <div className="lk-search-suggestions">
                <h6 className="lk-suggestion-label mb-4">POPULAR SEARCHES</h6>
                <div className="d-flex flex-wrap gap-3">
                  {quickLinks.map((item, index) => (
                    <button key={index} className="lk-trending-link">
                      {item} <ArrowRight size={14} className="lk-tag-arrow" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Preview */}
              {searchQuery && (
                <div className="lk-search-results-overlay mt-5 pt-4 border-top">
                  <p className="lk-results-text m-0">
                     EXPLORING ARCHIVES FOR "<span className="lk-highlight-text">{searchQuery}</span>"
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOffcanvas;