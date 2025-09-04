import React from "react";
import Footer from "../components/Footer";

const helpCategories = [
  "Getting Started",
  "Privacy Settings",
  "Search Profile",
  "Initiate Contact",
  "Membership",
  "Login/Password",
  "Fraud Alert",
  "Help Center/Customer Support",
  "Common Issues",
  "Changing Basic details",
  "Getting responses",
  "Add On Services",
  "Managing your Profile",
  "JSExclusive",
  "Video Profiles",
  "Match Hour",
  "Introducing Free Chat on ShaadiMatch",
  "Profile Verification",
  "30-Day Full Refund Guarantee",
];

const Help = () => {
  const leftCategories = helpCategories.slice(0, Math.ceil(helpCategories.length / 2));
  const rightCategories = helpCategories.slice(Math.ceil(helpCategories.length / 2));

  return (
    <div>
      {/* Header */}
      <div className="container my-5">
        <h2 className="text-center mb-4">How can we help you?</h2>
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What we can help with?"
              />
              <button className="btn btn-primary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4">
        <h3 className="mb-4">Categories</h3>
        <div className="row">
          <div className="col-md-6">
            {leftCategories.map((item, idx) => (
              <div key={idx} className="card mb-3 shadow-sm border-0">
                <div className="card-body">
                  <div className="fw-bold">{item}</div>
                  <div className="text-pink mt-1" style={{ color: "deeppink" }}>
                    View all questions
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {rightCategories.map((item, idx) => (
              <div key={idx} className="card mb-3 shadow-sm border-0">
                <div className="card-body">
                  <div className="fw-bold">{item}</div>
                  <div className="text-pink mt-1" style={{ color: "deeppink" }}>
                    View all questions
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Footer */}
      <Footer />
    </div>
  );
};

export default Help;
