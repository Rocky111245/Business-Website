import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { FaPhone, FaFax, FaBuilding, FaClock, FaEnvelope } from 'react-icons/fa';
import FormspreeContactForm from "../components/FormspreeContactForm";
import './Contact_Us.css';
import '../utilities/fonts/style.css';

function Contact_Us() {
    return (
        <div className="Contact_Us">
            <Navbar />
            <div className="Contact_Us-container">
                <div className="contact-us__form-container">
                    <FormspreeContactForm />
                </div>
                <div className="contact-us__reach-out">
                    <div className="contact-us__reach-out-section">
                        <FaBuilding className="ContactUs__icon" size={30} />
                        <div className="office_elements">
                            <h4>Office:</h4>
                            <p>41/1 (Zenat Tower), 2nd Floor, Kazi Nazrul Islam Avenue, Dhaka – 1215, Bangladesh</p>
                            <p>9:00-17:00 for physical visit (Online responses are much faster)</p>
                        </div>
                    </div>
                    <div className="office_elements"><FaPhone className="ContactUs__icon" size={30} />
                        <h4>Telephone</h4>
                        <p>+880 2 111 111 111</p>
                    </div>
                    <div className="office_elements"><FaEnvelope className="ContactUs__icon" size={30} />
                        <h4>Email</h4>
                        <p>hasan@emtbd.com</p>
                    </div>
                    <div className="office_elements"><FaClock className="ContactUs__icon" size={30} />
                        <h4>Working Hours </h4>
                        <p>9am-5pm Sun-Fri</p>
                    </div>
                </div>
            </div>
            <iframe className="contact-us__google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.48144077872865!2d90.39166643038673!3d23.752673446011496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a2e62f394f%3A0x15345e4a4305209b!2sZeenat%20Bhaban!5e0!3m2!1sen!2smy!4v1663590876120" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </div>
    );
}

export default Contact_Us;
