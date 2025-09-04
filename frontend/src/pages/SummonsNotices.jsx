import React from "react";

const SummonsNotices = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Summons & Legal Notices</h2>
      <p className="text-muted text-center mb-5">
        This section outlines how ShaadiMatch handles legal summons, official notices, and related documentation.
      </p>

      <div className="mb-4">
        <h5>1. Legal Communication Channel</h5>
        <p>
          All legal notices, including court summons and legal correspondence, must be addressed to our official legal team. Kindly use the designated email or postal address for communication.
        </p>
      </div>

      <div className="mb-4">
        <h5>2. Mailing Address</h5>
        <p>
          <strong>Legal Department, ShaadiMatch</strong><br />
          3rd Floor, Matrimonial Towers,<br />
          Sector 21, New Delhi - 110001<br />
          India
        </p>
      </div>

      <div className="mb-4">
        <h5>3. Email for Legal Notices</h5>
        <p>
          <strong>Email:</strong> legal@shaadimatch.in<br />
          Please ensure that all legal communication is properly documented and submitted with verifiable sender details.
        </p>
      </div>

      <div className="mb-4">
        <h5>4. Response Timeline</h5>
        <p>
          Our legal team strives to acknowledge all valid notices within <strong>7 working days</strong>. If urgent, please clearly mark the subject line and include all necessary details.
        </p>
      </div>

      <div className="mb-4">
        <h5>5. Jurisdiction</h5>
        <p>
          Any disputes or legal proceedings shall be subject to the jurisdiction of the courts in New Delhi, India.
        </p>
      </div>

      <div className="alert alert-info mt-5" role="alert">
        <strong>Note:</strong> This page is for legal notices only. For general queries or grievances, please visit the <a href="/grievances">Grievances</a> page.
      </div>
    </div>
  );
};

export default SummonsNotices;
