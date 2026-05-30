import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRegCalendar, FaRegUser, FaRegClock, FaRegCopy } from 'react-icons/fa6';
import '../../styles/blogDetails.css';

const BlogDetail = () => {
  return (
    <div className="lk-blog-detail py-5 mt-5">
      <div className="container">
        
        {/* Navigation Back */}
        <div className="mb-5 pt-3">
          <Link to="/" className="lk-back-link">
            <FaArrowLeft size={12} className="me-2" /> RETURN TO JOURNAL
          </Link>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            
            {/* Blog Header */}
            <header className="lk-blog-header text-center mb-5">
              <span className="lk-category-label">Craftsmanship & Heritage</span>
              <h1 className="lk-blog-hero-title my-3">THE TIMELESS ART OF HAND-KNOTTED SILK CARPETS</h1>
              
              <div className="lk-blog-meta d-flex justify-content-center gap-4 mt-4">
                <span className="meta-item"><FaRegUser size={13} className="me-1"/> Loom & Knot Atelier</span>
                <span className="meta-item"><FaRegCalendar size={13} className="me-1"/> May 18, 2026</span>
                <span className="meta-item"><FaRegClock size={13} className="me-1"/> 5 Min Read</span>
              </div>
            </header>

            {/* Featured Image - Editorial Landscape/Portrait */}
            <div className="lk-blog-img-container mb-5">
              <img 
                src="https://i.pinimg.com/1200x/77/60/62/776062c6b65c82c7e8b722782f0c911c.jpg" 
                alt="Hand-knotted silk carpet weaving" 
                className="img-fluid lk-featured-img"
              />
            </div>

            {/* Main Content Area */}
            <article className="lk-blog-body">
              <p className="lk-drop-cap">
                Carpet weaving is more than just intertwining threads; it is an absolute devotion to precision, 
                heritage, and storytelling. In the realm of luxury interiors, a hand-knotted silk rug represents 
                the pinnacle of bespoke craftsmanship, requiring a perfect harmony between tension, dye, and the weaver's soul.
              </p>

              <h2 className="lk-content-title">1. THE FOUNDATION OF KNOT DENSITY</h2>
              <p>
                Before one can appreciate the visual allure, one must understand the architecture of the weave. 
                Fluidity in design originates from the knot density. By packing hundreds of knots into a single square inch, 
                artisans can create transitions in patterns that feel seamless rather than forced and abrupt. It is this 
                density that gives silk carpets their signature opulent drape.
              </p>

              <blockquote className="lk-editorial-quote">
                "A hand-knotted rug is not merely woven; it is painted with threads, carrying the soul and 
                dedication of its artisan."
              </blockquote>

              <h2 className="lk-content-title">2. THE ALCHEMY OF NATURAL DYES</h2>
              <p>
                One of the most overlooked elements of heritage carpets is the pigmentation process. 
                Authentic masterpieces rely on botanical extracts—indigo, madder root, and saffron. 
                These natural dyes age gracefully, developing a coveted patina over decades that synthetic 
                colors simply cannot replicate. It creates that faded, effortless aesthetic that separates 
                mass-produced rugs from generational heirlooms.
              </p>

              <p className="mt-5">
                By integrating these authentic pieces into your modern architectural spaces, you elevate your 
                interior dynamics significantly, allowing the floor to speak volumes of your appreciation for true art.
              </p>

              {/* Social Share Section */}
              <div className="lk-share-section mt-5 pt-5 text-center">
                <p className="lk-share-text mb-3">SHARE THIS MASTERPIECE</p>
                <div className="d-flex justify-content-center gap-3">
                   <button className="lk-btn-share" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                     <FaRegCopy size={14} className="me-2" /> COPY LINK
                   </button>
                </div>
              </div>

            </article>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;