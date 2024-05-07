
import React,{useState} from 'react';
import './Navbar.css';
import { RxChevronRight } from "react-icons/rx";



const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo-title">
        <img src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673822808512" alt="EMT Logo" className="navbar__logo" />
        <div className="navbar__title-container">
          <h1 className="navbar__title">Evolution Medical Technologies</h1>
          <h4 className="navbar__motto">Medical Technology. Delivered.</h4>
        </div>
      </div>
      <nav className="navbar__menu">
        <ul className="navbar__menu-list">
          <li className="navbar__menu-item"><a href="/" className="navbar__menu-link">Home</a></li>
          <li className="navbar__menu-item"><a href="/Products" className="navbar__menu-link">Products</a></li>
          <li className="navbar__menu-item"><a href="/About_Us" className="navbar__menu-link">About Us</a></li>
          <li className="navbar__menu-item"><a href="/Contact_Us" className="navbar__menu-link">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;