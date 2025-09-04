import React from "react";

const Careers = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Join Our Team</h2>
      <p className="text-muted text-center fs-5 mb-5">
        At ShaadiMatch, we believe in empowering people to find their perfect life partner. Be part of something meaningful.
      </p>

      <div className="row g-4">
        {/* Job 1 */}
        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Frontend Developer</h5>
              <p className="card-text text-muted">
                Work with React, Bootstrap, and modern JS to build elegant UI.
              </p>
              <ul className="text-muted small">
                <li>Experience: 1-3 years</li>
                <li>Location: Remote</li>
              </ul>
              <a href="#" className="btn btn-primary mt-2">Apply Now</a>
            </div>
          </div>
        </div>

        {/* Job 2 */}
        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">UI/UX Designer</h5>
              <p className="card-text text-muted">
                Design intuitive experiences for millions of users.
              </p>
              <ul className="text-muted small">
                <li>Experience: 2+ years</li>
                <li>Location: Mumbai / Remote</li>
              </ul>
              <a href="#" className="btn btn-primary mt-2">Apply Now</a>
            </div>
          </div>
        </div>

        {/* Job 3 */}
        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Customer Success Executive</h5>
              <p className="card-text text-muted">
                Help our users with onboarding and profile support.
              </p>
              <ul className="text-muted small">
                <li>Experience: 0-2 years</li>
                <li>Location: Delhi NCR</li>
              </ul>
              <a href="#" className="btn btn-primary mt-2">Apply Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <h4 className="fw-semibold">Don’t see a role for you?</h4>
        <p className="text-muted">We’re always looking for passionate people. Email us at <strong>careers@shaadimatch.com</strong></p>
        <a href="mailto:careers@shaadimatch.com" className="btn btn-outline-dark mt-2">Send Resume</a>
      </div>
    </div>
    
  );
};

export default Careers;
