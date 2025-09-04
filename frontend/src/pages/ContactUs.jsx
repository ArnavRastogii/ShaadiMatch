import React from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center text-muted fs-5 mb-5">
        We'd love to hear from you. Whether you have a question, feedback, or support request — we’re here to help!
      </p>

      <div className="row g-4">
        {/* Contact Info Section */}
        <div className="col-md-5">
          <div className="bg-light p-4 rounded shadow-sm">
            <h5 className="mb-3">ShaadiMatch Office</h5>
            <p className="mb-2">
              <strong>Address:</strong><br />
              123, Wedding Street, Love City, India - 560001
            </p>
            <p className="mb-2">
              <strong>Email:</strong> support@shaadimatch.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Working Hours:</strong><br />
              Mon - Fri, 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <form className="bg-light p-4 rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Reason for contacting" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5">
        <h5 className="text-center mb-3">Find Us on Map</h5>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
            title="ShaadiMatch Location"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    
  );
};

export default ContactUs;
