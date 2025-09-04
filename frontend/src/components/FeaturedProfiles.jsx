// src/pages/FeaturedProfiles.jsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedProfiles.css"; // custom styles

const profiles = [
  {
    name: "Aisha Verma",
    age: 27,
    city: "Delhi",
    image: "https://via.placeholder.com/300x300",
    profession: "Software Engineer",
  },
  {
    name: "Rohit Singh",
    age: 30,
    city: "Mumbai",
    image: "https://via.placeholder.com/300x300",
    profession: "Entrepreneur",
  },
  {
    name: "Sneha Kapoor",
    age: 26,
    city: "Bangalore",
    image: "https://via.placeholder.com/300x300",
    profession: "Fashion Designer",
  },
  {
    name: "Arjun Mehra",
    age: 29,
    city: "Pune",
    image: "https://via.placeholder.com/300x300",
    profession: "Doctor",
  },
];

const FeaturedProfiles = () => {
  return (
    <div className="container my-5" id="featured-profiles">
      <h2 className="text-center fw-bold mb-4"> Featured Profiles</h2>
      <p className="text-center text-muted mb-5">
        Handpicked members you might want to connect with
      </p>
      <div className="row g-4">

        {profiles.map((profile, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="card profile-card h-100 shadow-lg">
              <img src={profile.image} className="card-img-top" alt={profile.name} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{profile.name}</h5>
                <p className="card-text mb-1">{profile.profession}</p>
                <p className="text-muted">
                  {profile.age} yrs, {profile.city}
                </p>
                <button className="btn btn-outline-danger btn-sm">View Profile</button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturedProfiles;
