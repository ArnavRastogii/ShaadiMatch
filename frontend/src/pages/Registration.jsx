import React, { useState } from "react";

const Registration = () => {
  const [profileFor, setProfileFor] = useState("");
  const [showGender, setShowGender] = useState(false);
  const [gender, setGender] = useState("");

  // const handleProfileChange = (e) => {
  //   const value = e.target.value;
  //   setProfileFor(value);
  //   if (value === "Self" || value === "Relative/Friend" || value === "Other") {
  //     setShowGender(true);
  //   } else {
  //     setShowGender(false);
  //     setGender("");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted!");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg rounded-4 p-4">
            <h3 className="text-center mb-4">Create Your Matrimonial Profile</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="mobile" placeholder="Enter mobile number" required />
              </div>

              <div className="mb-3">
                <label htmlFor="privacy" className="form-label">Privacy Settings</label>
                <select className="form-select" id="privacy" required>
                  <option value="">Select an option</option>
                  <option>Show to All</option>
                  <option>Show to Your Interest</option>
                  <option>Hide from All</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Create Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required />
              </div>

              {/*
              <div className="mb-3">
                <label htmlFor="profileFor" className="form-label">Create Profile For</label>
                <select
                  className="form-select"
                  id="profileFor"
                  value={profileFor}
                  onChange={handleProfileChange}
                  required
                >
                  <option value="">Select</option>
                  <option>Self</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Sister</option>
                  <option>Relative/Friend</option>
                  <option>Other</option>
                </select>
              </div>

              {showGender && (
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender-male"
                      value="Male"
                      onChange={(e) => setGender(e.target.value)}
                      required
                    />
                    <label className="form-check-label" htmlFor="gender-male">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender-female"
                      value="Female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gender-female">Female</label>
                  </div>
                </div>
              )}
              */}

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-success btn-lg rounded-pill">
                  Register Me
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
