import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function HomeHero() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    religion: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
    // You can add form reset or navigation here
  };

  return (
    <section
      className="text-white py-5"
      style={{
        background: "linear-gradient(135deg, #ffebf0, #fefeff)",
        borderBottom: "4px solid #ffb3c1",
      }}
    >
      <div className="container py-4">
        <div className="row align-items-center">
          {/* LEFT TEXT SIDE */}
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="fw-bold display-5 text-dark mb-3">
               Find Your Perfect Life Partner
            </h1>
            <p className="lead text-muted mb-4">
              Join thousands of happy couples who found love through <strong>ShaadiMatch</strong>.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <button
                className="btn btn-danger btn-lg px-4"
                onClick={() => navigate("/browse-profiles")}
              >
                Browse Profiles
              </button>
              <button
                className="btn btn-outline-danger btn-lg px-4"
                onClick={() => navigate("/register")}
              >
                Join Now
              </button>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="col-lg-6">
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "20px",
              }}
            >
              <div className="card-body p-4">
                <h4 className="text-center mb-4 text-dark fw-bold">` Quick Registration</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <select
                        className="form-select rounded-pill"
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        required
                      >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control rounded-pill"
                        placeholder="Age"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <select
                      className="form-select rounded-pill"
                      value={formData.religion}
                      onChange={(e) =>
                        setFormData({ ...formData, religion: e.target.value })
                      }
                      required
                    >
                      <option value="">Religion</option>
                      <option value="hindu">Hindu</option>
                      <option value="muslim">Muslim</option>
                      <option value="christian">Christian</option>
                      <option value="sikh">Sikh</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-danger w-100 rounded-pill fw-semibold"
                  >
                    Get Started 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
