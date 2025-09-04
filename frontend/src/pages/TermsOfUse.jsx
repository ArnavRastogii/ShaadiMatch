import React from "react";

const TermsOfUse = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Terms of Use</h2>
      <p className="text-muted text-center mb-5">
        Please read these terms carefully before using our services.
      </p>

      <div className="mb-4">
        <h4>1. Acceptance of Terms</h4>
        <p>
          By accessing or using ShaadiMatch, you agree to be bound by these Terms of Use. If you do not agree, please do not use the platform.
        </p>
      </div>

      <div className="mb-4">
        <h4>2. Eligibility</h4>
        <p>
          You must be 18 years or older and legally eligible to marry as per the laws of your country of residence to register on this website.
        </p>
      </div>

      <div className="mb-4">
        <h4>3. Member Conduct</h4>
        <ul>
          <li>Do not post false, misleading, or offensive content.</li>
          <li>Respect other users' privacy and boundaries.</li>
          <li>Refrain from commercial or promotional use of the site.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>4. Account Responsibility</h4>
        <p>
          You are responsible for maintaining the confidentiality of your login credentials. Notify us immediately of any unauthorized access.
        </p>
      </div>

      <div className="mb-4">
        <h4>5. Content Ownership</h4>
        <p>
          You retain ownership of the content you share, but grant ShaadiMatch a license to use, display, and distribute it within the platform.
        </p>
      </div>

      <div className="mb-4">
        <h4>6. Termination</h4>
        <p>
          ShaadiMatch reserves the right to suspend or terminate your account if these terms are violated or misuse is detected.
        </p>
      </div>

      <div className="mb-4">
        <h4>7. Limitation of Liability</h4>
        <p>
          ShaadiMatch is not liable for any damages resulting from use of the site or any relationship formed through it.
        </p>
      </div>

      <div className="mb-4">
        <h4>8. Modifications</h4>
        <p>
          These terms may be updated from time to time. Continued use of the site constitutes your acceptance of the revised terms.
        </p>
      </div>

      <div className="alert alert-info mt-5 text-center">
        If you have any questions regarding these terms, please contact us via the <a href="/contact">Contact Page</a>.
      </div>
    </div>
  );
};

export default TermsOfUse;
