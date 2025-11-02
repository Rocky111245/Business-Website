import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { FaAward, FaHandshake, FaHeart, FaShieldAlt } from "react-icons/fa";

function About_Us() {
    const manufacturers = [
        {
            name: "Topcon Corporation, Japan",
            subtitle: "Ophthalmic Division",
            description: "Topcon Corporation is a Japanese manufacturer of optical equipment for ophthalmology and surveying",
            logo: "https://ik.imagekit.io/emtbd/emt_images/images/Topcon-Logo.wine.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673881480122"
        },
        {
            name: "Seiler Instrument, USA",
            subtitle: "",
            description: "Seiler specializes in precision optical instruments including surgical microscopes and colposcopes for medical applications",
            logo: "https://ik.imagekit.io/emtbd/emt_images/images/seiler.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673881479997"
        },
        {
            name: "Dia Life S.A., Switzerland",
            subtitle: "",
            description: "Leading manufacturer of high-quality dialysis equipment and nephrology solutions",
            logo: "https://ik.imagekit.io/emtbd/emt_images/images/DIA%20LIFE%20SA%20(SWITZERLAND).png?ik-sdk-version=javascript-1.4.3&updatedAt=1673881480191"
        },
        {
            name: "Baxter International, USA",
            subtitle: "",
            description: "The company primarily focuses on products to treat hemophilia, kidney disease, immune disorders and other chronic and acute medical conditions",
            logo: "https://ik.imagekit.io/emtbd/emt_images/images/baxter.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673881480039"
        }
    ];

    const values = [
        {
            icon: <FaAward className="text-4xl" />,
            title: "Excellence",
            description: "We strive for the highest standards in every product and service we deliver",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: <FaHandshake className="text-4xl" />,
            title: "Integrity",
            description: "Honesty and transparency guide all our business relationships",
            color: "from-green-500 to-teal-600"
        },
        {
            icon: <FaHeart className="text-4xl" />,
            title: "Quality",
            description: "Premium medical equipment that healthcare professionals can trust",
            color: "from-red-500 to-pink-600"
        },
        {
            icon: <FaShieldAlt className="text-4xl" />,
            title: "Reliability",
            description: "Consistent support and service you can count on, always",
            color: "from-purple-500 to-violet-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <WhatsAppIcon />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="section-container relative z-10 py-20">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About Evolution Medical Technologies</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                        Your trusted partner in delivering world-class medical technology to healthcare institutions across Bangladesh.
                    </p>
                </div>
            </div>

            {/* Company Overview */}
            <div className="section-container">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-16 relative z-20">
                    <div className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
                        <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
                            <p>
                                <strong className="text-primary-600">Evolution Medical Technologies (EMT)</strong> is a leading distributor and seller of high-quality medical equipment in Bangladesh. Since our establishment, we have been committed to providing healthcare institutions with reliable, cutting-edge medical technology that enhances patient care and improves clinical outcomes.
                            </p>
                            <p>
                                We specialize in importing and distributing advanced medical equipment across multiple specialties including <span className="font-semibold text-secondary-600">Ophthalmology</span>, <span className="font-semibold text-secondary-600">Nephrology</span>, <span className="font-semibold text-secondary-600">Dental Treatment</span>, <span className="font-semibold text-secondary-600">ICU Equipment</span>, and <span className="font-semibold text-secondary-600">Neonatal/Pediatric</span> care.
                            </p>
                            <p>
                                Our partnerships with globally renowned manufacturers ensure that healthcare providers in Bangladesh have access to the same world-class equipment used in leading medical facilities worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To be the most reliable and committed business partner in the sale of quality medical equipment, providing responsive after-sales service, and solutions to the needs of healthcare providers.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To be the leading biomedical equipment distributor and seller in Bangladesh, setting the standard for excellence in medical technology solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        These principles guide everything we do and every decision we make
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl shadow-lg p-6 h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Manufacturers Section */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
                <div className="section-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Manufacturing Partners</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We proudly represent world-leading manufacturers who share our commitment to quality and innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {manufacturers.map((manufacturer, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <div className="bg-gradient-to-r from-gray-50 to-white p-8 flex items-center justify-center border-b-4 border-primary-500">
                                    <img
                                        src={manufacturer.logo}
                                        alt={manufacturer.name}
                                        className="max-h-32 w-auto object-contain"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{manufacturer.name}</h3>
                                    {manufacturer.subtitle && (
                                        <p className="text-primary-600 font-semibold mb-3">{manufacturer.subtitle}</p>
                                    )}
                                    <p className="text-gray-600 leading-relaxed">{manufacturer.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="section-container">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Partner with EMT and discover why leading healthcare institutions trust us for their medical equipment needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/Contact_Us"
                            className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/Products"
                            className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
                        >
                            View Products
                        </a>
                    </div>
                </div>
            </div>

            <SubFooter />
            <Footer />
        </div>
    );
}

export default About_Us;