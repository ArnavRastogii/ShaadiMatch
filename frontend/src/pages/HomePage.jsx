import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaSearch, FaHeart } from "react-icons/fa";
import HomeHero from "../components/HomeHero";
import HomeWork from "../components/HomeWork";
import Stories from "../components/Stories";
import FeaturedProfiles from "../components/FeaturedProfiles";
import UserReviews from "../components/Reviews";
import AppDownload from "../components/AppDownload";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

const HomePage = () => {
  



  return (
    <div>
      {/* Hero Section */}
      <HomeHero />

      {/* How It Works Section */}
      <HomeWork/>

      {/* stories */}
      <Stories/>

      {/* FeaturedProfiles */}
      <FeaturedProfiles/>

      {/* Reviews */}
      <UserReviews/>

      {/* AppDownlaod */}
      <AppDownload/>

      {/* ContactCTA */}
      <ContactCTA/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default HomePage;
