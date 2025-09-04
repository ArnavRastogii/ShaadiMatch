// src/pages/AppDownload.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AppDownload = () => {
  const styles = {
    section: {
      background: "linear-gradient(to right, #fff0f5, #f9f9ff)",
      borderRadius: "20px",
      padding: "50px 20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    description: {
      color: "#6c757d",
      fontSize: "1rem",
      marginBottom: "30px",
    },
    badge: {
      width: "160px",
      height: "50px",
      objectFit: "contain",
      cursor: "pointer",
    },
    featureIcon: {
      fontSize: "24px",
      marginRight: "10px",
      color: "#dc3545",
    },
    qrCode: {
      width: "120px",
      borderRadius: "10px",
      border: "1px solid #ccc",
    },
  };

  return (
    <section className="container my-5" style={styles.section} id="app-download">
      <div className="row align-items-center">
        {/* Left Side: Text & Features */}
        <div className="col-md-7">
          <h2 style={styles.heading}>📲 Get the ShaadiMatch App</h2>
          <p style={styles.description}>
            Find your perfect match on the go. Instant notifications, verified profiles, and a seamless experience – all in one app.
          </p>

          <div className="d-flex gap-3 mb-4 flex-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              style={styles.badge}
              onClick={() => window.open("https://play.google.com/", "_blank")}
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
              style={styles.badge}
              onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
            />
          </div>

          {/* Feature List */}
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-patch-check-fill" style={styles.featureIcon}></i>
              Verified & Trusted Profiles
            </li>
            <li className="mb-2">
              <i className="bi bi-bell-fill" style={styles.featureIcon}></i>
              Instant Match Notifications
            </li>
            <li className="mb-2">
              <i className="bi bi-lock-fill" style={styles.featureIcon}></i>
              100% Secure & Private
            </li>
            <li className="mb-2">
              <i className="bi bi-lightning-charge-fill" style={styles.featureIcon}></i>
              Faster Matchmaking with Smart Filters
            </li>
          </ul>
        </div>

        {/* Right Side: QR Code or Phone Image */}
        <div className="col-md-5 text-center mt-4 mt-md-0">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://shaadimatch.in/app"
            alt="QR code for download"
            style={styles.qrCode}
          />
          <p className="mt-2 text-muted small">Scan to Download</p>

          <img
            src="https://cdn.dribbble.com/users/1341307/screenshots/5701061/dribbble_mobapp.png"
            alt="Mobile App Preview"
            className="img-fluid mt-3"
            style={{ borderRadius: "20px", maxHeight: "300px", boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
