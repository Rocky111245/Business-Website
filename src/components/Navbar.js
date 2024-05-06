
import React,{useState} from 'react';
import './Navbar.css';
import { RxChevronRight } from "react-icons/rx";
import '../utilities/fonts/fonts.css';



const Navbar = () => {
 
  return (
    <nav className="navbar">
  <div className="navbar__logo-title-container">
    <img src="https://ik.imagekit.io/emtbd/emt_images/emt_logo/EMT-green.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673822808512" className="navbar__logo" />
    <h1 className="navbar__title">Evolution Medical Technologies</h1>
    <h4 class="moto__text">Medical Technology.Delivered.</h4>
  </div>
  <ul className="navbar__menu">
    <li className="navbar__menu-item">
      <a href="/" className="navbar__menu-link" >Home</a>
    </li>
  <li className="navbar__menu-item">
      <a href="/Products" className="navbar__menu-link navbar__menu-link-product">
    Products 
  </a>
</li>

    <li className="navbar__menu-item">
      <a href="/About_Us" className="navbar__menu-link">About Us</a>
    </li>
    <li className="navbar__menu-item">
      <a href="/Contact_Us" className="navbar__menu-link">Contact Us</a>
    </li>
  </ul>
</nav>

  )
}

export default Navbar;
