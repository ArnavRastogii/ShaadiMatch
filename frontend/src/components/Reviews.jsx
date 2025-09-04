// src/pages/Reviews.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Reviews.jsx
 * - Uses inline styles (no external CSS file)
 * - Uses Bootstrap classes for layout / components
 * - Requires Bootstrap JS bundle for carousel & modal (include in index.html)
 */

const reviewsData = [
  {
    id: 1,
    name: "Aarav & Priya",
    rating: 5,
    short: "Found each other in 3 months — thank you!",
    long: "We connected, met our families, and were married in 6 months. The platform's match filters and clear profiles made everything simple.",
    avatar: "https://via.placeholder.com/120",
    date: "Jan 12, 2025",
  },
  {
    id: 2,
    name: "Rohit K.",
    rating: 4,
    short: "Great profiles and responsive support.",
    long: "Customer support helped with verification and guidance. Profiles are clear and the filters helped find relevant matches quickly.",
    avatar: "https://via.placeholder.com/120",
    date: "Mar 02, 2025",
  },
  {
    id: 3,
    name: "Meera S.",
    rating: 5,
    short: "Safe, trustworthy, and reliable.",
    long: "Verified badges gave me the confidence to reach out. We are now engaged — extremely grateful!",
    avatar: "https://via.placeholder.com/120",
    date: "Feb 18, 2025",
  },
  {
    id: 4,
    name: "Kabir & Nisha",
    rating: 4,
    short: "Solid platform with many options.",
    long: "Lots of high-quality profiles. The UI is clean and filters are powerful. Found someone after a few weeks.",
    avatar: "https://via.placeholder.com/120",
    date: "May 11, 2025",
  },
];

const trustBadges = [
  { id: 1, label: "Verified Profiles" },
  { id: 2, label: "Secure Payments"},
  { id: 3, label: "24/7 Support" },
  { id: 4, label: "Success Rate 89%"},
];

const star = (filled) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#ffc107" : "none"}
    stroke="#ffc107"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: 2 }}
  >
    <path d="M12 .587l3.668 7.431L23.6 9.75l-5.667 5.524L19.336 24 12 19.771 4.664 24l1.403-8.726L.4 9.75l7.932-1.732z" />
  </svg>
);

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(reviewsData[0]);
  const [filter, setFilter] = useState(0); // 0 => all, else rating
  const [filteredReviews, setFilteredReviews] = useState(reviewsData);

  useEffect(() => {
    if (filter === 0) setFilteredReviews(reviewsData);
    else setFilteredReviews(reviewsData.filter((r) => r.rating === filter));
  }, [filter]);

  // small inline styles object
  const styles = {
    container: {
      background: "linear-gradient(180deg, #ffffff 0%, #fff7fb 100%)",
      padding: "48px 20px",
      borderRadius: 16,
      boxShadow: "0 10px 30px rgba(120, 60, 100, 0.06)",
    },
    headerRow: { marginBottom: 18, alignItems: "center" },
    title: { fontSize: 26, fontWeight: 700, margin: 0 },
    subtitle: { color: "#6b6b6b", marginTop: 6, marginBottom: 0 },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      borderRadius: 12,
      background: "#fff",
      boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
      marginRight: 10,
      cursor: "default",
      fontWeight: 600,
    },
    reviewCard: {
      borderRadius: 12,
      background: "#fff",
      padding: 16,
      boxShadow: "0 6px 22px rgba(0,0,0,0.05)",
      height: "100%",
      transition: "transform 0.22s ease",
    },
    avatar: { width: 72, height: 72, borderRadius: "50%", objectFit: "cover" },
    trustRow: { marginTop: 24 },
    trustBadge: {
      borderRadius: 12,
      padding: "14px 10px",
      textAlign: "center",
      background: "#fff",
      boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
    },
    progressWrap: { marginTop: 12 },
    logosRow: { marginTop: 18 },
    logoBox: {
      background: "#fff",
      padding: 14,
      borderRadius: 10,
      boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
    },
    ctaBtn: { padding: "10px 16px", borderRadius: 10 },
  };

  return (
    <section className="container my-5" style={styles.container} id="user-reviews">
      {/* Header */}
      <div className="row" style={styles.headerRow}>
        <div className="col-md-8">
          <h3 style={styles.title}> User Reviews & Trust</h3>
          <p className="mb-0" style={styles.subtitle}>
            Real experiences from people who found love — verified & curated.
          </p>
        </div>

        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <div style={styles.badge}>
              <strong style={{ color: "#d63384", fontWeight: 800 }}>4.6</strong>
              <span style={{ color: "#6b6b6b" }}>/5</span>
              <span aria-hidden="true" style={{ marginLeft: 8 }}>
                {Array.from({ length: 5 }).map((_, i) => star(i < 4))}
              </span>
            </div>

            <button
              className="btn btn-outline-danger"
              style={styles.ctaBtn}
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <div className="row gx-4 gy-4">
        {/* Left: Carousel / Cards */}
        <div className="col-lg-7">
          {/* Filter Buttons */}
          <div className="d-flex align-items-center mb-3" role="tablist" aria-label="Filter reviews">
            <button
              className={`btn btn-sm ${filter === 0 ? "btn-danger" : "btn-outline-secondary"} me-2`}
              onClick={() => setFilter(0)}
            >
              All
            </button>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`btn btn-sm ${filter === r ? "btn-danger" : "btn-outline-secondary"} me-2`}
                onClick={() => setFilter(r)}
                aria-pressed={filter === r}
              >
                {r} {r === 5 ? "Stars" : "Stars"}
              </button>
            ))}

            <div className="ms-auto text-muted small">
              Showing <strong>{filteredReviews.length}</strong> review(s)
            </div>
          </div>

          {/* Bootstrap Carousel */}
          <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
              {filteredReviews.map((r, idx) => (
                <div
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  key={r.id}
                >
                  <div
                    className="d-flex"
                    style={{ gap: 16 }}
                    // hover lift
                  >
                    <div style={{ minWidth: 96 }}>
                      <img src={r.avatar} alt={`${r.name} avatar`} style={styles.avatar} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={styles.reviewCard} className="h-100">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h5 style={{ margin: 0 }}>{r.name}</h5>
                            <div className="text-muted small">{r.date}</div>
                          </div>
                          <div className="d-flex align-items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>{star(i < r.rating)}</span>
                            ))}
                          </div>
                        </div>

                        <p style={{ marginTop: 12, marginBottom: 12, fontStyle: "italic" }}>
                          “{r.short}”
                        </p>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="text-muted small">Verified profile</div>

                          <div>
                            <button
                              className="btn btn-sm btn-outline-danger me-2"
                              onClick={() => {
                                setActiveReview(r);
                                // open bootstrap modal
                                const modalEl = document.getElementById("reviewDetailModal");
                                const modal = window.bootstrap ? new window.bootstrap.Modal(modalEl) : null;
                                if (modal) modal.show();
                              }}
                            >
                              Read More
                            </button>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() =>
                                alert("Feature: View full profile (link to profile page / modal)")
                              }
                            >
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right: Trust badges, progress trust score, logos */}
        <div className="col-lg-5">
          <div className="row g-3">
            <div className="col-12">
              <div style={styles.trustRow} className="p-3">
                <h6 className="mb-2">Why users trust us</h6>
                <div className="d-flex flex-wrap gap-2">
                  {trustBadges.map((b) => (
                    <div key={b.id} style={{ ...styles.trustBadge, minWidth: 130 }}>
                      <div style={{ fontSize: 20, marginBottom: 6 }}>{b.icon}</div>
                      <div style={{ fontWeight: 700 }}>{b.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust score with progress */}
                <div style={styles.progressWrap}>
                  <div className="d-flex justify-content-between small mt-3">
                    <div>Trust Score</div>
                    <div><strong>89%</strong></div>
                  </div>

                  <div className="progress" style={{ height: 12, borderRadius: 8 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "89%" }}
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <div className="small text-muted mt-2">
                    Verified IDs, manual moderation & secure payments.
                  </div>
                </div>
              </div>
            </div>

            {/* Partner logos / media mentions */}
            <div className="col-12">
              <h6>Featured In</h6>
              <div className="d-flex gap-2 flex-wrap" style={styles.logosRow}>
                {["Times", "Hindustan", "India Today", "Zee"].map((name, idx) => (
                  <div key={idx} className="p-2" style={styles.logoBox}>
                    <div style={{ fontWeight: 800 }}>{name}</div>
                    <div className="small text-muted">Trusted partner</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ratings breakdown */}
            <div className="col-12">
              <h6>Ratings breakdown</h6>
              {[5, 4, 3].map((r) => {
                const count = reviewsData.filter((x) => x.rating === r).length;
                const pct = Math.round((count / reviewsData.length) * 100);
                return (
                  <div key={r} className="mb-2">
                    <div className="d-flex justify-content-between small">
                      <div>
                        {r} stars
                      </div>
                      <div>
                        {count}
                      </div>
                    </div>
                    <div className="progress" style={{ height: 8, borderRadius: 6 }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: `${pct}%` }}
                        aria-valuenow={pct}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="col-12 text-center">
              <p className="mb-2">Want to share your story?</p>
              <button
                className="btn btn-danger me-2"
                onClick={() => {
                  // navigate to share story page or open modal
                  window.location.href = "/share-story";
                }}
              >
                Share Your Story
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  // open help/contact
                  window.location.href = "/contact";
                }}
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full review (Bootstrap modal markup) */}
      <div
        className="modal fade"
        id="reviewDetailModal"
        tabIndex="-1"
        aria-labelledby="reviewDetailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ borderRadius: 12 }}>
            <div className="modal-header">
              <h5 className="modal-title" id="reviewDetailModalLabel">
                {activeReview.name}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="d-flex gap-3">
                <img src={activeReview.avatar} alt="avatar" style={{ width: 96, height: 96, borderRadius: "50%" }} />
                <div>
                  <div className="d-flex align-items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{star(i < activeReview.rating)}</span>
                    ))}
                    <div className="small text-muted ms-2">{activeReview.date}</div>
                  </div>
                  <p style={{ fontStyle: "italic" }}>{activeReview.short}</p>
                </div>
              </div>

              <hr />

              <p>{activeReview.long}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  window.location.href = "/profile/" + (activeReview.id || "");
                }}
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
