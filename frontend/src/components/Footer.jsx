import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid mt-3 mx-0 p-0'>
        <footer className="bg-dark text-light pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="mb-3">Explore</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className='nav-link'>Home</Link></li>
                 <li><Link to="/success-stories" className='nav-link'>Success Stories</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3"><Link to="/services" className='nav-link'>Services</Link></h5>
              <ul className="list-unstyled">
                <li><Link to="/membership" className='nav-link'>Membership Options</Link></li>
                <li><Link to="/careers" className='nav-link'>Careers</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3"><Link to="/help" className='nav-link'>Help</Link></h5>
              <ul className="list-unstyled">
                <li><Link to="/contact" className='nav-link'>Contact Us</Link></li>
                <li>Shaadi Match Centers</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className='nav-link'>About Us</Link></li>
                <li><Link to="/fraud-alert" className='nav-link'>Fraud Alert</Link></li>
                <li><Link to="/terms-of-use" className='nav-link'>Terms of Use</Link></li>
                <li><Link to="/third-party-terms" className='nav-link'>3rd Party Terms of Use</Link></li>
                <li><Link to="/privacy-policy" className='nav-link'>Privacy Policy</Link></li>
                <li><Link to="/cookie-policy" className='nav-link'>Cookie Policy</Link></li>
                <li><Link to="/privacy-features" className='nav-link'>Privacy Features</Link></li>
                <li><Link to="/summons-notices" className='nav-link'>Summons/Notices</Link></li>
                <li><Link to="/grievances" className='nav-link'>Grievances</Link></li>
              </ul>
            </div>
          </div>

          <hr className="border-light" />

           <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} ShaadiMatch. All rights reserved.</p>
        <p className="mt-3 text-white" style={{ fontSize: "14px" }}>
          Made By <strong>Team TUF</strong>
        </p>
      </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer