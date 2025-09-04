import React from "react";

const PrivacyFeatures = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Privacy Features</h2>
      <p className="text-center text-muted mb-5">
        At ShaadiMatch, your privacy is our top priority. We provide powerful features to help you stay in control of your personal information.
      </p>

      <div className="mb-4">
        <h4>🔒 Profile Visibility Control</h4>
        <p>
          Choose who can view your profile. You can make your profile visible to all members, only premium members, or only specific matches.
        </p>
      </div>

      <div className="mb-4">
        <h4>📸 Photo Privacy</h4>
        <p>
          Control who can view your photos. You can keep your pictures hidden or allow selected members to request access.
        </p>
      </div>

      <div className="mb-4">
        <h4>📞 Phone Number Protection</h4>
        <p>
          Your contact number is never shared publicly. It is only visible to verified users when you choose to share it.
        </p>
      </div>

      <div className="mb-4">
        <h4>📍 Hide Location</h4>
        <p>
          You can choose whether or not to show your city or state information on your profile.
        </p>
      </div>

      <div className="mb-4">
        <h4>🛡️ Block/Report Users</h4>
        <p>
          If you receive any inappropriate messages or feel uncomfortable, you can block or report a member instantly.
        </p>
      </div>

      <div className="mb-4">
        <h4>🕓 Activity Logs</h4>
        <p>
          You can view your login history and activity log to ensure your account is being accessed only by you.
        </p>
      </div>

      <div className="mb-4">
        <h4>⚙️ Data Control & Deletion</h4>
        <p>
          You have full control to update, download, or permanently delete your account and data at any time.
        </p>
      </div>

      <div className="text-center mt-5 text-muted">
        <small>ShaadiMatch is committed to protecting your information and building trust every step of the way.</small>
      </div>
    </div>
  );
};

export default PrivacyFeatures;
