import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import "../../styles/contact.css"; 

const CHANNELS = [
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    label: "Atelier Desk",
    value: "inquiries@loomandknot.com",
    href: "mailto:inquiries@loomandknot.com",
    sub: "Response within 24 hours",
  },
  {
    icon: <Phone size={20} strokeWidth={1.5} />,
    label: "Private Concierge",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    sub: "Mon–Sat, 10 AM – 7 PM",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.5} />,
    label: "Flagship Gallery",
    value: "New Delhi, India",
    href: null,
    sub: "By private appointment only",
  },
];

const CHIPS = ["Bespoke Commission", "Interior Trade", "Care & Restoration", "Press & Media"];

export default function Contact() {
  const [activeChips, setActiveChips] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleChip = (chip) => {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  return (
    <section className="lk-contact-root py-5 mt-5">
      {/* Header Section */}
      <div className="container text-center mb-5 pb-3">
        <span className="lk-subtitle-gold">CONNECT WITH US</span>
        <h2 className="lk-title-serif display-5 mt-2">THE ATELIER DESK</h2>
        <div className="lk-divider-gold mx-auto mt-4"></div>
        <p className="lk-sub-intro mt-4 mx-auto text-muted" style={{ maxWidth: '600px' }}>
          Whether you are seeking to commission a bespoke masterpiece, exploring trade partnerships, or requiring restoration services, our curators are at your disposal.
        </p>
      </div>

      <div className="container">
        <div className="row g-0 lk-contact-box-shadow">
          
          {/* LEFT: Information Panel (Deep Teal Background) */}
          <div className="col-lg-5">
            <div className="lk-info-panel h-100 p-4 p-md-5">
              <h4 className="lk-info-title mb-5">Direct Channels</h4>
              
              <div className="lk-channels-list">
                {CHANNELS.map(({ icon, label, value, href, sub }) => (
                  <div className="lk-channel-card mb-5" key={label}>
                    <div className="lk-icon-box">{icon}</div>
                    <div className="lk-details">
                      <span className="lk-label">{label}</span>
                      {href ? <a href={href} className="lk-value">{value}</a> : <span className="lk-value">{value}</span>}
                      <span className="lk-sub-text">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Training Hours Card */}
              <div className="lk-hours-card mt-5 pt-4 border-top-gold">
                <div className="d-flex align-items-center mb-4">
                  <Clock size={20} className="me-2 text-gold" />
                  <h5 className="m-0 lk-hours-title">Gallery Hours</h5>
                </div>
                <div className="lk-hour-row"><span>Monday – Friday</span> <strong>10:00 AM – 19:00 PM</strong></div>
                <div className="lk-hour-row"><span>Saturday</span> <strong>11:00 AM – 17:00 PM</strong></div>
                <div className="lk-hour-row text-muted-gold"><span>Sunday</span> <strong>Closed for weaving</strong></div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (Crisp White Container) */}
          <div className="col-lg-7">
            <div className="lk-form-wrapper p-4 p-md-5 h-100 bg-white">
              {!submitted ? (
                <>
                  <h3 className="lk-form-title mb-4">Submit an Inquiry</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="lk-field">
                        <label>First Name</label>
                        <input type="text" placeholder="John" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="lk-field">
                        <label>Last Name</label>
                        <input type="text" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="lk-field">
                        <label>Email Address</label>
                        <input type="email" placeholder="john.doe@example.com" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="lk-field">
                        <label>Nature of Inquiry</label>
                        <select className="lk-select">
                          <option>Select an option</option>
                          <option>Bespoke Commissioning</option>
                          <option>Interior Designer / Trade</option>
                          <option>Order Status & Shipping</option>
                          <option>Carpet Care & Restoration</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="col-12 mt-4">
                      <label className="lk-label-sm mb-3 d-block">AREAS OF INTEREST</label>
                      <div className="lk-chips-container">
                        {CHIPS.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            className={`lk-chip ${activeChips.includes(chip) ? "active" : ""}`}
                            onClick={() => toggleChip(chip)}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-12 mt-4">
                      <div className="lk-field">
                        <label>Your Message</label>
                        <textarea rows="4" placeholder="Detail your requirements or questions here..." />
                      </div>
                    </div>
                    
                    <div className="col-12 mt-2">
                      <button className="lk-submit-btn w-100" onClick={() => setSubmitted(true)}>
                        SEND INQUIRY <Send size={16} className="ms-2" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="lk-success-view text-center py-5 d-flex flex-column align-items-center justify-content-center h-100">
                  <CheckCircle2 size={70} className="lk-success-icon mb-4" strokeWidth={1} />
                  <h2 className="lk-success-title mb-3">INQUIRY RECEIVED</h2>
                  <p className="lk-success-desc text-muted mb-5" style={{ maxWidth: '400px' }}>
                    Thank you for reaching out to Loom & Knot. Our concierge team will review your request and contact you shortly.
                  </p>
                  <button className="lk-btn-outline-gold" onClick={() => setSubmitted(false)}>
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}