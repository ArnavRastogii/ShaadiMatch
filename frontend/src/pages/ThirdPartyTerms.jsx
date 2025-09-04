import React from "react";

const ThirdPartyTerms = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Third-Party Terms of Use</h2>
      <p className="text-muted text-center mb-5">
        Learn how third-party services interact with your usage on ShaadiMatch.
      </p>

      <div className="mb-4">
        <h4>1. Integration with External Services</h4>
        <p>
          ShaadiMatch uses third-party platforms such as payment gateways, analytics providers, and login services (e.g., Google/Facebook).
          These services are governed by their own terms and privacy policies.
        </p>
      </div>

      <div className="mb-4">
        <h4>2. Your Agreement with Third-Parties</h4>
        <p>
          By using features powered by third-party platforms, you also agree to comply with their respective terms of use.
          ShaadiMatch is not responsible for content or services provided by these entities.
        </p>
      </div>

      <div className="mb-4">
        <h4>3. Data Sharing</h4>
        <p>
          Basic personal data may be shared with third parties as required to deliver services (e.g., process payments). This sharing is always
          done securely and in accordance with our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>

      <div className="mb-4">
        <h4>4. Liability Disclaimer</h4>
        <p>
          ShaadiMatch is not liable for any issues or losses that may occur from use of third-party services. Users are encouraged to read their
          terms and reach out to those providers directly for concerns.
        </p>
      </div>

      <div className="mb-4">
        <h4>5. List of Common Third-Party Services Used</h4>
        <ul>
          <li><strong>Google Analytics</strong> – Usage tracking</li>
          <li><strong>Razorpay / PayPal</strong> – Secure payments</li>
          <li><strong>Facebook/Google Login</strong> – Social authentication</li>
          <li><strong>Email Services (e.g., SendGrid)</strong> – Email verification and notifications</li>
        </ul>
      </div>

      <div className="alert alert-info text-center mt-5">
        For any concerns related to third-party integrations, contact us via our <a href="/contact">Contact Us</a> page.
      </div>
    </div>
  );
};

export default ThirdPartyTerms;
