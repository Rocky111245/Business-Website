import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './About_Us.css';
import SubFooter from "../components/SubFooter";





function About_Us() {
    return (<div className="about-us">
     <Navbar></Navbar>
<div className="about-us__main-content-container">
        <div className="about-us__history-container">
          <div><h3 className="about-us__history-header">Our History</h3>
        <p className="about-us__history-text">Evolution Medical Technologies Ltd. was born out 
                      of the need to participate in the evolution of the 
                      medical equipment industry and offer latest 
                      medical technologies as they are invented, to the 
                      people of Bangladesh. The founding member of 
                      Evolution Medical Technologies has served the 
                      medical equipment industry of Bangladesh since 
                      the 90’s and also the Managing Director of the 
                      oldest medical equipment and specialized 
                      medicine distributors in the country</p></div>
                      <button  className="about-us__company-button" type="button">Download Our Company Profile</button>
      </div>
    <div className="about-us__manufacturer-container">
        <div className="about-us__manufacturer-header">
        <h3 className="about-us__manufacturer-header-title">Manufacturers we’re experienced with</h3>
        </div>
        <div className="about-us__manufacturer-card">
        <img className="about-us__manufacturer-card-image" src="https://ik.imagekit.io/emtbd/emt_images/images/Baxter_logo_blue.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673881487679" width="280px"></img>
        <h5 className="about-us__manufacturer-card-title">Baxter International, USA</h5>
        <div className="about-us__manufacturer-card-description">The company primarily focuses on products to treat hemophilia, kidney disease, immune disorders and other chronic and acute medical conditions</div>
        </div>

        <div className="about-us__manufacturer-card">
        <img className="about-us__manufacturer-card-image" src="https://ik.imagekit.io/emtbd/emt_images/images/Topcon-Logo.wine.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673881480122" width="280px"></img>
        <h5 className="about-us__manufacturer-card-title">Topcon Corporation, Japan</h5>
        <h6 className="about-us__manufacturer-card-subtitle">Opthalmic Division</h6>
        <div className="about-us__manufacturer-card-description">Topcon Corporation is a Japanese manufacturer of optical equipment for ophthalmology and surveying</div>
        </div>
    </div>
       
</div>
    <SubFooter></SubFooter>
     <Footer></Footer>



</div>)
  }

export default About_Us;