// src/pages/Login.jsx

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5">
          <div className="card shadow-lg rounded-4 p-4 border-0">
            <div className="text-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User Login"
                width="70"
              />
              <h3 className="mt-3 fw-bold text-primary">Login to Continue</h3>
              <p className="text-muted">Welcome back to ShaadiMatch!</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="identifier" className="form-label">
                  Mobile Number or Email
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="text"
                    id="identifier"
                    className="form-control"
                    placeholder="Enter Mobile Number or Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    required
                  />
                </div>
              </div>

              <div className="text-end mb-3">
                <Link to="#" className="text-decoration-none text-danger fw-semibold">
                  Forgot Password?
                </Link>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill fw-bold shadow-sm">
                   Login
                </button>
              </div>
            </form>

            <hr className="my-4" />

            <div className="text-center">
              <p className="mb-2 fw-bold">New on ShaadiMatch?</p>
              <Link to="/register" className="btn btn-outline-success rounded-pill fw-semibold">
                 Register Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
