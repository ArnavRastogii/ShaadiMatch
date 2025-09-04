import React from "react";
import Footer from "../components/Footer";

const plans = [
  {
    title: "Monthly Plan",
    price: "₹499 / month",
    color: "primary",
    features: [
      "Send up to 30 messages",
      "View full contact details",
      "Priority customer support",
    ],
  },
  {
    title: "6 Month Plan",
    price: "₹2399 / 6 months",
    color: "success",
    features: [
      "Send unlimited messages",
      "See who viewed your profile",
      "Profile boost weekly",
    ],
  },
  {
    title: "Annual Plan",
    price: "₹3999 / year",
    color: "warning",
    features: [
      "Unlimited messaging",
      "Free horoscope match",
      "Top search ranking",
      "Personal matchmaker",
    ],
  },
];

const Membership = () => {
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Choose Your Membership Plan</h2>
        <p className="text-center text-muted mb-5 fs-5">
          Unlock premium features to boost your chances of finding the right match faster. Whether you're just starting or committed for the long haul, we have a plan for you.
        </p>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, idx) => (
            <div className="col-md-4" key={idx}>
              <div className={`card border-${plan.color} shadow-lg rounded-4 h-100`}>
                <div className={`card-header bg-${plan.color} text-white text-center fs-4`}>
                  {plan.title}
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title mb-4 fs-3">{plan.price}</h4>
                  <ul className="list-group list-group-flush mb-4 text-start">
                    {plan.features.map((feat, i) => (
                      <li className="list-group-item" key={i}>✔️ {feat}</li>
                    ))}
                  </ul>
                  <button className={`btn btn-${plan.color} rounded-pill`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="fs-5 text-secondary">
            Our membership plans are designed to help you get more visibility and connect with serious matches. We believe in transparency — no hidden costs, just pure compatibility.
          </p>
          <p className="text-muted fst-italic">Join thousands of happy couples who found love on ShaadiMatch.</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Membership;
