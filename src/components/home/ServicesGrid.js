import React from 'react';
import {
    MdLocalHospital,
    MdEngineering,
    MdVerifiedUser,
    MdBuild,
    MdPublic,
    MdLocalShipping,
    MdForum,
    MdLightbulbOutline
} from 'react-icons/md';

const ServicesGrid = () => {
    const services = [
        {
            icon: <MdLocalHospital className="text-5xl" />,
            title: "Responsive Support",
            description: "Our skilled engineers are ready to provide prompt answers to your queries during business hours.",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: <MdEngineering className="text-5xl" />,
            title: "Expertise and Experience",
            description: "Our team, with over 20 years of medical equipment expertise, swiftly addresses any challenge with precision.",
            color: "from-purple-500 to-violet-600"
        },
        {
            icon: <MdVerifiedUser className="text-5xl" />,
            title: "Extended Warranty",
            description: "We offer over 10 years of warranty for many of our products, ensuring long-term reliability.",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: <MdBuild className="text-5xl" />,
            title: "Comprehensive After-Sales Service",
            description: "Receive thorough support and servicing post-purchase to maintain optimal performance.",
            color: "from-orange-500 to-amber-600"
        },
        {
            icon: <MdPublic className="text-5xl" />,
            title: "Global Quality Standards",
            description: "Medical equipment procured only from globally renowned manufacturers.",
            color: "from-indigo-500 to-purple-600"
        },
        {
            icon: <MdLocalShipping className="text-5xl" />,
            title: "Nationwide Delivery",
            description: "We provide fast and reliable delivery services across the nation, ensuring your products arrive safely and on time.",
            color: "from-red-500 to-pink-600"
        },
        {
            icon: <MdForum className="text-5xl" />,
            title: "Expert Communication",
            description: "Our engineers work closely with healthcare professionals to ensure that equipment setup and functionality meets clinical needs.",
            color: "from-cyan-500 to-blue-600"
        },
        {
            icon: <MdLightbulbOutline className="text-5xl" />,
            title: "Innovative Solutions",
            description: "We deliver innovative technologies that transform healthcare and enhance patient outcomes.",
            color: "from-teal-500 to-green-600"
        }
    ];

    return (
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        What We Offer
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive medical equipment solutions with unmatched support and service excellence
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Icon with Gradient Background */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Border Effect */}
                            <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${service.color} rounded-full transition-all duration-300 group-hover:w-full`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Ready to Experience Excellence?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Partner with EMT for world-class medical equipment and unparalleled service support
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/Contact_Us"
                            className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            Contact Us Today
                        </a>
                        <a
                            href="/Products"
                            className="inline-block bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                        >
                            Browse Products
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;