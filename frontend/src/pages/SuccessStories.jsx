// src/pages/SuccessStories.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


const sampleStories = [
  {
    name: "Amit & Neha",
    img: "https://via.placeholder.com/150",
    story:
      "We met on ShaadiMatch in Jan 2024 and instantly connected. After endless conversations, we tied the knot in May. Thank you ShaadiMatch!",
  },
  {
    name: "Ravi & Priya",
    img: "https://via.placeholder.com/150",
    story:
      "I never believed online platforms worked—until I met Priya here. 6 months later, we are happily married and grateful.",
  },
  {
    name: "Sahil & Anjali",
    img: "https://via.placeholder.com/150",
    story:
      "From casual chats to soulmates — ShaadiMatch gave me more than I ever expected. We're now planning our honeymoon!",
  },
];

const SuccessStories = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Real Stories. Real Love.</h2>
        <p className="text-center mb-5 text-muted fs-5">
          Every match has a beautiful beginning. Read how couples found their forever on ShaadiMatch.
        </p>

        <div className="row g-4">
          {sampleStories.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card shadow rounded-4 h-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <h4 className="fw-semibold">Got your own love story?</h4>
          <p className="text-muted mb-3">We'd love to hear how you found your match!</p>
          <button className="btn btn-outline-primary btn-lg" onClick={
            () => navigate("/share-story")
          }>Share Your Story</button>
        </div>

        <div className="mt-5 text-center text-secondary fs-6">
          “Love always finds a way — and sometimes, that way is ShaadiMatch.”
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuccessStories;
