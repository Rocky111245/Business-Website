import React from 'react';
import './Services.css';
import { MdLocalHospital, MdEngineering,MdVerifiedUser, MdBuild, MdPublic, MdLocalShipping, MdForum, MdLightbulbOutline } from 'react-icons/md'; // Updated import
const Services = () => {
    return (
        <div className="services__container">
            <div className="services__heading-container">
                <h1 className="services__heading">What We Offer</h1>
            </div>
            <div className="services__features-container">
                <section className="services__feature">
                    <MdLocalHospital className="services__icon" size={50} color="#4caf50" />
                    <div className="services__content">
                        <h2>Responsive Support</h2>
                        <p>Our skilled engineers are ready to provide prompt answers to your queries during business hours.</p>
                    </div>
                </section>
                <section className="services__feature">
    <MdEngineering className="services__icon" size={50} color="#673ab7" />
    <div className="services__content">
        <h2>Expertise and Experience</h2>
        <p>Our team, with over 20 years of medical equipment expertise, swiftly addresses any challenge with precision.</p>
    </div>
</section>

                <section className="services__feature">
                    <MdVerifiedUser className="services__icon" size={50} color="#2196f3" />
                    <div className="services__content">
                        <h2>Extended Warranty</h2>
                        <p>We offer over 10 years of warranty for many of our products, ensuring long-term reliability.</p>
                    </div>
                </section>
                <section className="services__feature">
                    <MdBuild className="services__icon" size={50} color="#ff9800" />
                    <div className="services__content">
                        <h2>Comprehensive After-Sales Service</h2>
                        <p>Receive thorough support and servicing post-purchase to maintain optimal performance.</p>
                    </div>
                </section>
                <section className="services__feature">
                    <MdPublic className="services__icon" size={50} color="#9c27b0" />
                    <div className="services__content">
                        <h2>Global Quality Standards</h2>
                        <p>Medical equipment procured only from globally renowned manufacturers</p>
                    </div>
                </section>
                {/* New Sections */}
                <section className="services__feature">
                    <MdLocalShipping className="services__icon" size={50} color="#795548" />
                    <div className="services__content">
                        <h2>Nationwide Delivery</h2>
                        <p>We provide fast and reliable delivery services across the nation, ensuring your products arrive safely and on time.</p>
                    </div>
                </section>
                <section className="services__feature">
                    <MdForum className="services__icon" size={50} color="#03a9f4" />
                    <div className="services__content">
                        <h2>Expert Communication</h2>
                        <p>Our engineers work closely with healthcare professionals to ensure that equipment setup and functionality meets clinical needs.</p>
                    </div>
                </section>
                <section className="services__feature">
                    <MdLightbulbOutline className="services__icon" size={50} color="#4caf50" />
                    <div className="services__content">
                        <h2>Innovative Solutions</h2>
                        <p>We deliver innovative technologies that transform healthcare and enhance patient outcomes.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
