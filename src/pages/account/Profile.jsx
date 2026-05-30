import React, { useState } from 'react';
import { User, ShoppingBag, MapPin, Settings, LogOut, ChevronRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const navigate = useNavigate();

  // Loom & Knot Mock Orders Data
  const orderHistory = [
    { id: "#LK-8892", item: "Royal Tabriz Silk Rug", date: "May 28, 2026", amount: "₹85,000", status: "Processing" },
    { id: "#LK-8104", item: "Nomadic Jute Weave", date: "April 12, 2026", amount: "₹28,000", status: "Delivered" }
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="lk-profile-page py-5 mt-5">
      <div className="container py-lg-5">
        <div className="row g-4 lg-g-5">
          
          {/* LEFT: Sidebar Navigation */}
          <div className="col-lg-3">
            <div className="lk-profile-sidebar">
              <div className="lk-user-header text-center p-4 border-bottom">
                <div className="lk-user-avatar mx-auto mb-3">
                  <User size={30} strokeWidth={1.2} color="#1C3B47" />
                </div>
                <h5 className="lk-profile-name m-0">VARUN SHARMA</h5>
                <p className="lk-profile-email m-0 mt-1">varun@example.com</p>
                <span className="lk-vip-badge mt-3">ATELIER PATRON</span>
              </div>

              <div className="lk-profile-nav p-3">
                <button 
                  className={`lk-nav-btn ${activeTab === 'orders' ? 'active' : ''}`}
                  onClick={() => setActiveTab('orders')}
                >
                  <ShoppingBag size={18} strokeWidth={1.5} /> Order History
                </button>
                <button 
                  className={`lk-nav-btn ${activeTab === 'addresses' ? 'active' : ''}`}
                  onClick={() => setActiveTab('addresses')}
                >
                  <MapPin size={18} strokeWidth={1.5} /> Saved Addresses
                </button>
                <button 
                  className={`lk-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings size={18} strokeWidth={1.5} /> Account Settings
                </button>
                
                <div className="lk-nav-divider my-3"></div>
                
                <button className="lk-nav-btn lk-logout-btn" onClick={handleLogout}>
                  <LogOut size={18} strokeWidth={1.5} /> Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Display Area */}
          <div className="col-lg-9">
            <div className="lk-profile-content p-4 p-md-5">
              
              {/* TAB 1: Order History */}
              {activeTab === 'orders' && (
                <div className="lk-tab-fade-in">
                  <span className="lk-tab-subtitle">YOUR ARCHIVE</span>
                  <h4 className="lk-tab-title mb-4">Past & Current Orders</h4>
                  
                  <div className="table-responsive">
                    <table className="table lk-custom-table align-middle">
                      <thead>
                        <tr>
                          <th>ORDER ID</th>
                          <th>MASTERPIECE</th>
                          <th>DATE</th>
                          <th>AMOUNT</th>
                          <th>STATUS</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderHistory.map((order) => (
                          <tr key={order.id}>
                            <td className="fw-bold" style={{color: '#1C3B47'}}>{order.id}</td>
                            <td className="fw-bold" style={{color: '#C09D5B'}}>{order.item}</td>
                            <td className="text-muted small">{order.date}</td>
                            <td className="fw-bold" style={{color: '#1C3B47'}}>{order.amount}</td>
                            <td>
                              <span className={`lk-status-pill ${order.status.toLowerCase()}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="text-end">
                              <button className="lk-btn-view-order">View <ChevronRight size={14} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 2: Saved Addresses */}
              {activeTab === 'addresses' && (
                <div className="lk-tab-fade-in">
                  <span className="lk-tab-subtitle">SHIPPING</span>
                  <h4 className="lk-tab-title mb-4">Saved Destinations</h4>
                  
                  <div className="row g-4">
                    {/* Primary Address Card */}
                    <div className="col-md-6">
                      <div className="lk-address-card primary-address">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <div className="lk-address-tag">Default</div>
                            <h6 className="lk-address-name mt-3 mb-1">VARUN SHARMA</h6>
                            <p className="lk-address-text text-muted m-0">
                              B-45, Sector 3, Salt Lake<br />
                              Noida, Uttar Pradesh 201301<br />
                              India<br />
                              +91 98765 43210
                            </p>
                          </div>
                          <CheckCircle size={20} color="#C09D5B" />
                        </div>
                        <div className="d-flex gap-4 mt-4 pt-3 border-top">
                          <button className="lk-btn-link">Edit</button>
                          <button className="lk-btn-link text-danger">Remove</button>
                        </div>
                      </div>
                    </div>

                    {/* Add New Address Button */}
                    <div className="col-md-6">
                      <button className="lk-btn-add-address">
                        <MapPin size={24} color="#C09D5B" className="mb-2" />
                        <span>ADD NEW DESTINATION</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Account Settings */}
              {activeTab === 'settings' && (
                <div className="lk-tab-fade-in">
                  <span className="lk-tab-subtitle">PREFERENCES</span>
                  <h4 className="lk-tab-title mb-4">Update Profile</h4>
                  
                  <form className="row g-4 lk-form-layout">
                    <div className="col-md-6">
                      <div className="lk-field-wrap">
                        <label>First Name</label>
                        <input type="text" defaultValue="Varun" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="lk-field-wrap">
                        <label>Last Name</label>
                        <input type="text" defaultValue="Sharma" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="lk-field-wrap">
                        <label>Email Address</label>
                        <input type="email" defaultValue="varun@example.com" disabled style={{backgroundColor: '#FAFAFA', color: '#999'}} />
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <button type="button" className="lk-btn-solid-gold">SAVE PREFERENCES</button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;