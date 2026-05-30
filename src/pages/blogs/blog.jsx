import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import "../../styles/blog.css";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "The Timeless Art of Hand-Knotted Silk Carpets",
      date: "May 15, 2026",
      category: "Craftsmanship",
      image: "https://i.pinimg.com/1200x/3b/38/0f/3b380fb0cfc61aa29f08ea66dc9e9524.jpg",
      // link: "/blog/hand-knotted-silk"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Rug for Minimalist Spaces",
      date: "May 10, 2026",
      category: "Interior Design",
      image: "https://i.pinimg.com/1200x/62/43/21/624321b4b69ea79d67a8c4f49a971078.jpg",
      // link: "/blog/minimalist-rugs"
    },
    {
      id: 3,
      title: "Preserving Heritage: A Journey to Persian Looms",
      date: "May 02, 2026",
      category: "Heritage",
      image: "https://plus.unsplash.com/premium_photo-1725295198378-d286934e2735?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // link: "/blog/persian-looms"
    }
  ];

  const navigate = useNavigate();

  return (
    <section className="blog-section py-5">
      <div className="container py-lg-5">
        
        {/* Section Header */}
        <div className="row mb-5 align-items-end">
          <div className="col-md-8 text-center text-md-start">
            <span className="section-subtitle">THE JOURNAL</span>
            <h2 className="section-main-title">Stories From The Loom</h2>
          </div>
          <div className="col-md-4 text-center text-md-end d-none d-md-block">
            <button className="btn-view-all-blogs" onClick={() => navigate("/blog")}>
              VIEW ALL ARTICLES <FaArrowRight size={12} className="ms-2" />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="row g-4">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <article className="blog-card">
                
                {/* Blog Image Wrapper */}
                <div className="blog-img-wrapper">
                  <img src={blog.image} alt={blog.title} className="blog-img" />
                  <span className="blog-category-tag">{blog.category}</span>
                </div>

                {/* Blog Content */}
                <div className="blog-content mt-4">
                  <span className="blog-date">{blog.date}</span>
                  <h3 className="blog-title mt-2">
                    <Link to={blog.link || "#"}>{blog.title}</Link>
                  </h3>
                  
                  <div className="blog-read-more d-inline-flex align-items-center mt-3" onClick={() => navigate("/blogDetails")}>
                    READ ARTICLE <FaArrowRight size={12} className="arrow-icon ms-2" />
                  </div>
                </div>

              </article>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center d-block d-md-none mt-5">
          <button className="btn-view-all-blogs" onClick={() => navigate("/blog")}>
            VIEW ALL ARTICLES <FaArrowRight size={12} className="ms-2" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;