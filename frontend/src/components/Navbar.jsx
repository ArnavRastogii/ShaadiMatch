// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const MatrimonialNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0">
      <div className="container" style={{ margin: "1px auto" }}>
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.png"
            alt="ShaadiMatch Logo"
            style={{ height: "50px", objectFit: "contain", margin: "0", padding: "0" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
              <Link className="nav-link" to="/browse-profiles">Browse Profiles</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/membership">Membership</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/success-stories">Success Stories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Help</Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link className="nav-link my-auto" to="/login">Login</Link>
            <Link to="/register" className="btn btn-outline-success ms-2 my-auto">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MatrimonialNavbar;
