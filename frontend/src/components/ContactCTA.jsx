// src/pages/ContactCTA.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactCTA = () => {
  const styles = {
    section: {
      background: "linear-gradient(135deg, #fff6f6, #fefeff)",
      padding: "60px 20px",
      borderRadius: "20px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    subtext: {
      color: "#6c757d",
    },
    button: {
      backgroundColor: "#dc3545",
      border: "none",
    },
  };

  return (
    <section className="container my-5" style={styles.section} id="contact-support">
      <div className="row align-items-center">
        {/* Left Text Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 style={styles.heading}> Need Help or Have Questions?</h2>
          <p style={styles.subtext}>
            Our support team is here 24/7 to assist you. Whether you have questions about your account, profile, or matches — we're just a message away.
          </p>

          <ul className="list-unstyled mb-4">
            <li>
              <i className="bi bi-envelope-fill text-danger me-2"></i>
              support@shaadimatch.in
            </li>
            <li className="mt-2">
              <i className="bi bi-telephone-fill text-danger me-2"></i>
              +91 98765 43210
            </li>
            <li className="mt-2">
              <i className="bi bi-clock-fill text-danger me-2"></i>
              24/7 Customer Support
            </li>
          </ul>

          <a href="#contact-form" className="btn btn-danger px-4 py-2 rounded-pill" style={styles.button}>
             Message Us
          </a>
        </div>

        {/* Right Contact Form */}
        <div className="col-md-6">
          <form id="contact-form">
            <div className="mb-3">
              <label className="form-label fw-semibold">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea className="form-control" rows="4" placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" className="btn btn-outline-danger px-4 rounded-pill">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
