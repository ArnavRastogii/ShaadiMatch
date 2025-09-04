import React from "react";

const Grievances = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Grievance Redressal</h2>
      <p className="text-muted text-center mb-5">
        Your satisfaction matters to us. If you have any complaints, feedback, or unresolved issues, please reach out through the details below.
      </p>

      <div className="row mb-5">
        <div className="col-md-6">
          <h5>📧 Email Us</h5>
          <p>
            You can share your grievances at:
            <br />
            <strong>grievance@shaadimatch.in</strong>
          </p>
        </div>
        <div className="col-md-6">
          <h5>🏢 Write to Us</h5>
          <p>
            <strong>Grievance Cell – ShaadiMatch</strong><br />
            4th Floor, Customer Relations Wing<br />
            ShaadiMatch Pvt. Ltd., Sector 21, New Delhi – 110001<br />
            India
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h5>⏱ Response Time</h5>
        <p>
          Our team aims to respond to all grievances within <strong>5-7 business days</strong>. In case of delay, please follow up via email with your complaint reference number.
        </p>
      </div>

      <div className="mb-4">
        <h5>✅ What to Include</h5>
        <ul>
          <li>Full name and registered email or mobile number</li>
          <li>Issue details with date/time</li>
          <li>Any screenshots or references (if applicable)</li>
        </ul>
      </div>

      <div className="alert alert-warning mt-4">
        Please note: Misuse of this service for spam, unrelated queries, or abusive messages will lead to account suspension.
      </div>
    </div>
  );
};

export default Grievances;
