// src/pages/Stories.jsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Stories.css"; // for extra styling (optional but recommended)

const storiesData = [
  {
    name: "Aditya & Priya",
    image: "https://via.placeholder.com/600x400",
    story:
      "We met on ShaadiMatch and instantly clicked. Just three months later, we tied the knot. Grateful for this wonderful platform!",
  },
  {
    name: "Rahul & Anjali",
    image: "https://via.placeholder.com/600x400",
    story:
      "Thanks to ShaadiMatch, we found love despite the odds. Our story is proof that true love finds a way!",
  },
  {
    name: "Kabir & Meera",
    image: "https://via.placeholder.com/600x400",
    story:
      "We were from different cities but this platform brought us together. Now we’re writing our own fairytale.",
  },
];

const Stories = () => {
  return (
    <div className="container my-5" id="success-stories">
      <h2 className="text-center mb-4 fw-bold"> Real Success Stories</h2>
      <div id="storiesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {storiesData.map((story, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <img
                    src={story.image}
                    className="d-block w-100 rounded shadow"
                    alt={`Story of ${story.name}`}
                  />
                </div>
                <div className="col-md-6">
                  <div className="p-4">
                    <h4 className="fw-bold">{story.name}</h4>
                    <p className="fst-italic">"{story.story}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#storiesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#storiesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Stories;
