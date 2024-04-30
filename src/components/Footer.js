import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo-container">
          <img src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/white_logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673822851808" alt="Company Logo" className="footer__logo" />
          <h2 className="footer__title">Evolution Medical Technologies</h2>
        </div>
        <p className="footer__motto">MEDICAL TECHNOLOGY, DELIVERED</p>
        <div className="footer__social-icons">
          <a href="https://www.facebook.com/YourPage" className="footer__social-link">
            <FontAwesomeIcon icon={faFacebook} className="footer__social-icon" />
          </a>
          {/* Additional social icons can be placed here */}
        </div>
      </div>
      <div className="footer__copyright">
        <p>©{new Date().getFullYear()} Evolution Medical Technologies. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
