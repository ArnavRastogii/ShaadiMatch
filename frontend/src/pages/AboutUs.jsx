import React from "react";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About ShaadiMatch</h2>
      <p className="text-center text-muted fs-5 mb-5">
        We are committed to helping people find love, companionship, and a lifetime of happiness.
      </p>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="\public\logo.png"
            alt="About ShaadiMatch"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4>Our Journey</h4>
          <p>
            Founded in 2023, ShaadiMatch has helped thousands of individuals meet their perfect life partners.
            Our mission is to provide a trusted and inclusive platform that encourages meaningful relationships,
            guided by cultural values and modern preferences.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm bg-light h-100">
            <h5>1M+ Profiles</h5>
            <p className="text-muted">A wide pool of verified and genuine members.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm bg-light h-100">
            <h5>High Success Rate</h5>
            <p className="text-muted">Thousands of successful marriages each year.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded shadow-sm bg-light h-100">
            <h5>Secure & Private</h5>
            <p className="text-muted">Your data is protected with best-in-class security.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4>Why Choose ShaadiMatch?</h4>
        <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
          At ShaadiMatch, we understand that marriage is more than just a match — it’s the beginning of a lifelong partnership.
          That’s why we focus on compatibility, safety, and authenticity.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
