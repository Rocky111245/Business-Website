import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { FaPhone,FaFax,FaBuilding,FaClock, FaEnvelope } from 'react-icons/fa';
import './Contact_Us.css';


function Contact_Us(){
    return(
<div className="Contact_Us">
    <Navbar></Navbar>
    <div className="Contact_Us-container">
    <div className="contact-us__form-container">
        <form name="email" className="form contact-us__form" action="https://formsubmit.co/el/mabewo" method="POST">
            <div className="contact-us__form-group">
                <div className="contact-us__label">Your Name/Company Name</div>
                <div className="contact-us__input-container">
                    <input maxlength="30" className="contact-us__input contact-us__input--name" name="CompanyName" type="text" required></input>
                </div>
            </div>
            <div className="contact-us__form-group">
                <div className="contact-us__label">Email</div>
                <div className="contact-us__input-container">
                    <input maxlength="30" className="contact-us__input contact-us__input--email" name="Company Email" type="email" required></input>
                </div>
            </div>
            <div className="contact-us__form-group">
                <div className="contact-us__label">Subject</div>
                <div className="contact-us__input-container">
                    <select name="Subject" className="contact-us__select">
                        <option>Opthalmology</option>
                        <option>Dental Treatment Delivery System</option>
                        <option>ICU Equipment</option>
                        <option>Neonatal/Pediatric</option>
                        <option>Nephrology</option>
                        <option>Set up a formal meeting</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>
            <div className="contact-us__form-group">
                <div className="contact-us__label">Ask Us</div>
                <div className="contact-us__input-container">
                    <textarea className="contact-us__textarea text" name="Message"></textarea>
                </div>
            </div>
            <button className="contact-us__submit-button" type="submit">Submit Inquiry</button>
        </form>
    </div>
    <div className="contact-us__reach-out">
        <div className="contact-us__reach-out-section"><FaBuilding className="ContactUs__icon" size={30} color="#6495ED"/>
            <p><h4>Office:</h4>41/1 (Zenat Tower), 2nd Floor, Kazi Nazrul Islam Avenue, Dhaka – 1215, Bangladesh</p>
            <p>9:00-17:00 for physical visit(Online responses are much faster)</p>
        </div>
        <div className="office_elements"><FaPhone className="ContactUs__icon" size={30} color="#6495ED"/><h4>Telephone</h4> www.emt.info.com</div>
        <div className="office_elements"><FaFax className="ContactUs__icon" size={30} color="#6495ED"/><h4>Fax</h4> www.emt.info.com</div>
        <div className="office_elements"><FaEnvelope className="ContactUs__icon" size={30} color="#6495ED"/><h4>Email </h4> www.emt.info.com</div>
        <div className="office_elements"><FaClock className="ContactUs__icon" size={30} color="#6495ED"/><h4>Working Hours</h4> www.emt.info.com</div>
    </div>
    </div>
        <iframe className="contact-us__google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.48144077872865!2d90.39166643038673!3d23.752673446011496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a2e62f394f%3A0x15345e4a4305209b!2sZeenat%20Bhaban!5e0!3m2!1sen!2smy!4v1663590876120!5m2!1sen!2smy" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     















    <Footer></Footer>




    


</div>


    )
}

export default Contact_Us;