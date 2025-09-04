// src/pages/ShareStory.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShareStory = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate=useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
        navigate("/success-stories")
    }, 5000);
    // You can later send the form data to backend/API here
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Share Your Love Story</h2>
      <p className="text-center text-muted mb-5">
        Found your soulmate on ShaadiMatch? We'd love to celebrate your journey!
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <label htmlFor="coupleName" className="form-label">Couple's Name</label>
            <input type="text" className="form-control" id="coupleName" required />
          </div>

          <div className="mb-3">
            <label htmlFor="photo" className="form-label">Upload Your Photo</label>
            <input type="file" className="form-control" id="photo" accept="image/*" required />
          </div>

          <div className="mb-3">
            <label htmlFor="story" className="form-label">Your Story</label>
            <textarea className="form-control" id="story" rows="5" required />
          </div>

          <div className="mb-3">
            <label htmlFor="weddingDate" className="form-label">Wedding Date</label>
            <input type="date" className="form-control" id="weddingDate" required />
          </div>

          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Email / Contact (Optional)</label>
            <input type="email" className="form-control" id="contact" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit Story</button>
        </form>
      ) : (
        <div className="text-center">
          <h4 className="text-success mt-5">Thank you for sharing your story! </h4>
          <p className="text-muted">Our team will review and feature it soon.</p>
        </div>
      )}
    </div>
  );
};

export default ShareStory;
