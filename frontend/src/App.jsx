// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatrimonialNavbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Help from "./pages/Help";
import SuccessStories from "./pages/SuccessStories";
import Membership from "./pages/Membership";
import ShareStory from "./pages/ShareStory";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import FraudAlert from "./pages/FraudAlert";
import TermsOfUse from "./pages/TermsOfUse";
import ThirdPartyTerms from "./pages/ThirdPartyTerms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyFeatures from "./pages/PrivacyFeatures";
import SummonsNotices from "./pages/SummonsNotices";
import Grievances from "./pages/Grievances";
import HomePage from "./pages/HomePage";
import BrowseProfiles from "./pages/BrowseProfiles";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <Router>
      <MatrimonialNavbar />

      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/membership" element={<Membership />} />
       <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Registration />} />
       <Route path="/share-story" element={<ShareStory />} />
       <Route path="/careers" element={<Careers />} />
       <Route path="/services" element={<Services />} />
       <Route path="/contact" element={<ContactUs />} />
       <Route path="/about" element={<AboutUs />} />
       <Route path="/fraud-alert" element={<FraudAlert />} />
       <Route path="/terms-of-use" element={<TermsOfUse />} />
       <Route path="/third-party-terms" element={<ThirdPartyTerms />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
       <Route path="/cookie-policy" element={<CookiePolicy />} />
       <Route path="/privacy-features" element={<PrivacyFeatures />} />
       <Route path="/summons-notices" element={<SummonsNotices />} />
       <Route path="/grievances" element={<Grievances />} />
       <Route path="/browse-profiles" element={<BrowseProfiles />} />
       <Route path="/dashboard" element={<UserDashboard />} />


      </Routes>
    </Router>
  );
};

export default App;
