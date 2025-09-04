import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaSearch, FaUserPlus } from 'react-icons/fa';

function HomeWork() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #fff0f5, #fefeff)",
        borderRadius: "20px",
        margin: "40px auto",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-4">🔍 How It Works</h2>
        <p className="text-muted mb-5">
          Simple 3-step process to find your perfect match on ShaadiMatch
        </p>
        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-4">
            <div
              className="p-4 bg-white shadow-sm h-100 rounded-4"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaUserPlus className="mb-3 text-primary" size={40} />
              <h5 className="fw-semibold">Step 1: Sign Up</h5>
              <p className="text-muted">
                Create your profile in a few easy steps and join our trusted community.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div
              className="p-4 bg-white shadow-sm h-100 rounded-4"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaSearch className="mb-3 text-success" size={40} />
              <h5 className="fw-semibold">Step 2: Browse</h5>
              <p className="text-muted">
                Explore thousands of verified profiles tailored to your preferences.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <div
              className="p-4 bg-white shadow-sm h-100 rounded-4"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaHeart className="mb-3 text-danger" size={40} />
              <h5 className="fw-semibold">Step 3: Connect</h5>
              <p className="text-muted">
                Send interest, chat, and take the next step toward your future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWork;
