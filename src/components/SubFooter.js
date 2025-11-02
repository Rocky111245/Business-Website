import React from 'react';
import { FaAward, FaHandshake, FaHeadset, FaShippingFast } from 'react-icons/fa';

const SubFooter = () => {
    const features = [
        {
            icon: <FaAward className="text-3xl" />,
            title: "Quality Assurance",
            description: "Certified products from world-leading manufacturers"
        },
        {
            icon: <FaHandshake className="text-3xl" />,
            title: "Trusted Partner",
            description: "Serving healthcare institutions nationwide"
        },
        {
            icon: <FaHeadset className="text-3xl" />,
            title: "24/7 Support",
            description: "Responsive after-sales service and maintenance"
        },
        {
            icon: <FaShippingFast className="text-3xl" />,
            title: "Fast Delivery",
            description: "Efficient logistics and timely equipment delivery"
        }
    ];

    return (
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white transform transition-all duration-300 hover:bg-white/20 hover:scale-105"
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                            <p className="text-sm text-blue-100">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubFooter;