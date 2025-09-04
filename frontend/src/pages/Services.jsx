import React from "react";

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center text-muted fs-5 mb-5">
        Discover how ShaadiMatch helps you find your life partner with trusted tools and expert support.
      </p>

      <div className="row g-4">
        {/* Service 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <i className="bi bi-search fs-1 text-primary mb-3"></i>
              <h5 className="card-title">Advanced Search</h5>
              <p className="card-text text-muted">
                Use multiple filters including location, profession, and religion to find your perfect match.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
              <h5 className="card-title">Profile Verification</h5>
              <p className="card-text text-muted">
                All profiles are manually screened and verified for safety and authenticity.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <i className="bi bi-chat-dots fs-1 text-warning mb-3"></i>
              <h5 className="card-title">Private Messaging</h5>
              <p className="card-text text-muted">
                Connect securely through our private chat system to know your match better.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <i className="bi bi-person-plus fs-1 text-danger mb-3"></i>
              <h5 className="card-title">Personal Matchmaking</h5>
              <p className="card-text text-muted">
                Get guidance from expert matchmakers who help you through every step of the process.
              </p>
            </div>
          </div>
        </div>

        {/* Service 5 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <i className="bi bi-heart-pulse fs-1 text-info mb-3"></i>
              <h5 className="card-title">Horoscope Matching</h5>
              <p className="card-text text-muted">
                Match kundlis for better compatibility before making a decision.
              </p>
            </div>
          </div>
        </div>

        {/* Service 6 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <i className="bi bi-star fs-1 text-secondary mb-3"></i>
              <h5 className="card-title">Premium Memberships</h5>
              <p className="card-text text-muted">
                Get priority access, profile highlights, and visibility with our premium plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <h4>Ready to get started?</h4>
        <p className="text-muted">Register now and begin your journey to finding the perfect partner.</p>
        <a href="/register" className="btn btn-primary btn-lg">Register Free</a>
      </div>
    </div>
  );
};

export default Services;
