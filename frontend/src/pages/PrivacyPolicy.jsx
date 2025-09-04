import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Privacy Policy</h2>
      <p className="text-muted text-center mb-5">
        Your privacy is important to us. Read how we collect, use, and protect your data.
      </p>

      <div className="mb-4">
        <h4>1. Information We Collect</h4>
        <p>
          We collect information you provide when you create an account, complete your profile, upload photos, or use our services. This includes
          your name, contact number, email address, gender, religion, caste, location, and preferences.
        </p>
      </div>

      <div className="mb-4">
        <h4>2. How We Use Your Information</h4>
        <ul>
          <li>To match you with suitable profiles.</li>
          <li>To improve and personalize our services.</li>
          <li>To communicate offers, updates, and support.</li>
          <li>To detect fraud, abuse, or violations of our Terms.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>3. Sharing of Information</h4>
        <p>
          We do not sell your personal data. However, we may share limited details with third-party service providers for operations like payments,
          messaging, analytics, and verification. These partners are bound by confidentiality agreements.
        </p>
      </div>

      <div className="mb-4">
        <h4>4. Security of Your Data</h4>
        <p>
          We use encryption, firewalls, and secure servers to protect your data. While we strive to use commercially acceptable means to safeguard
          information, no method of transmission over the internet is 100% secure.
        </p>
      </div>

      <div className="mb-4">
        <h4>5. Your Choices</h4>
        <ul>
          <li>You can access, update, or delete your profile anytime.</li>
          <li>You may disable email alerts or notifications.</li>
          <li>You can opt-out of data sharing for non-essential services.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>6. Cookies & Tracking</h4>
        <p>
          We use cookies to improve your browsing experience. These help in remembering preferences, tracking visits, and improving performance. You
          can disable cookies from your browser settings.
        </p>
      </div>

      <div className="mb-4">
        <h4>7. Children's Privacy</h4>
        <p>
          Our platform is only for users aged 18 and above. We do not knowingly collect personal information from minors.
        </p>
      </div>

      <div className="mb-4">
        <h4>8. Changes to This Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. All changes will be reflected on this page with the "Last Updated" date.
        </p>
      </div>

      <div className="mb-5">
        <h4>9. Contact Us</h4>
        <p>
          For any questions regarding our privacy practices, reach out through our <a href="/contact">Contact Us</a> page.
        </p>
      </div>

      <div className="text-end text-muted">
        <small>Last Updated: August 4, 2025</small>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
