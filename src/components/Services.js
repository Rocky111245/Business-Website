import React from 'react';
import './Services.css';
import { MdLocalHospital, MdVerifiedUser, MdBuild, MdPublic } from 'react-icons/md';

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
                        <p>We source the highest-grade medical equipment from renowned manufacturers worldwide, ensuring international standards.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
