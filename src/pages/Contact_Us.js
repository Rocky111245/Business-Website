import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import FormspreeContactForm from "../components/FormspreeContactForm";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function Contact_Us() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Navbar />
            <WhatsAppIcon />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
                <div className="section-container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Have questions about our medical equipment? We're here to help. Reach out to us and we'll respond within one business day.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="section-container">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 -mt-8">

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h2>
                            <p className="text-gray-600">Fill out the form below and our team will get back to you shortly.</p>
                        </div>
                        <FormspreeContactForm />
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Office Details Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Office</h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                                            <FaMapMarkerAlt className="text-primary-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            House # 12, Road # 17, Sector # 11<br />
                                            Uttara Model Town, Dhaka-1230<br />
                                            Bangladesh
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center group-hover:bg-secondary-200 transition-colors">
                                            <FaPhone className="text-secondary-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                                        <a href="tel:+8801713141783" className="text-gray-600 hover:text-primary-600 transition-colors">
                                            +880 1713-141783
                                        </a>
                                        <br />
                                        <a href="tel:+8801713141781" className="text-gray-600 hover:text-primary-600 transition-colors">
                                            +880 1713-141781
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                            <FaEnvelope className="text-green-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                        <a href="mailto:info@emtbd.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                                            info@emtbd.com
                                        </a>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                            <FaClock className="text-purple-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                                        <p className="text-gray-600">
                                            Saturday - Thursday: 9:00 AM - 6:00 PM<br />
                                            Friday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us On Map</h3>
                            </div>
                            <div className="w-full h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2891234567!2d90.3912345!3d23.8756789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMyLjQiTiA5MMKwMjMnMjguNCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="EMT Office Location"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h3>
                    <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                        Join leading healthcare institutions across Bangladesh in providing world-class medical technology.
                    </p>
                    <a
                        href="tel:+8801713141783"
                        className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                    >
                        Call Us Now
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact_Us;