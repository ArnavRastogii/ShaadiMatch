import React from "react";

const FraudAlert = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Fraud Alert & Safety Tips</h2>
      <p className="text-center text-muted mb-5">
        Your safety is our top priority. Please stay aware and report any suspicious activity.
      </p>

      <div className="mb-5">
        <h4>Recognize Common Scams</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Financial Scams:</strong> Be cautious if someone asks for money, regardless of the reason.
          </li>
          <li className="list-group-item">
            <strong>Fake Profiles:</strong> Avoid people who provide inconsistent or suspicious details.
          </li>
          <li className="list-group-item">
            <strong>Too Good to Be True:</strong> Profiles that appear too perfect might be fake.
          </li>
          <li className="list-group-item">
            <strong>Requests to Chat Offsite:</strong> Stay on ShaadiMatch until you're confident.
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <h4>Tips to Stay Safe</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <h6>Verify Details</h6>
              <p className="text-muted">
                Ask questions and validate information before sharing anything personal.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <h6>Do Not Share OTPs</h6>
              <p className="text-muted">
                Never share your OTPs, passwords, or bank info with anyone.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <h6>Meet Safely</h6>
              <p className="text-muted">
                If meeting offline, choose public places and inform your family.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-warning text-center">
        <strong>If you encounter any fraud:</strong> Please report it immediately via our <a href="/contact">Contact Page</a>.
      </div>
    </div>
  );
};

export default FraudAlert;
