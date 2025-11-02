import React from 'react';
import { GoEye } from "react-icons/go";
import { TbDental } from "react-icons/tb";
import { BsLungs } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";

const CategorySection = () => {
    const categories = [
        {
            icon: <GoEye className="text-6xl" />,
            title: "Ophthalmology",
            color: "from-blue-500 to-cyan-600",
            link: "/Products"
        },
        {
            icon: <TbDental className="text-6xl" />,
            title: "Dental Treatment Delivery System",
            color: "from-green-500 to-emerald-600",
            link: "/Products"
        },
        {
            icon: <BsLungs className="text-6xl" />,
            title: "ICU Equipment",
            color: "from-red-500 to-pink-600",
            link: "/Products"
        },
        {
            icon: <FaBaby className="text-6xl" />,
            title: "Neonatal/Pediatric",
            color: "from-purple-500 to-violet-600",
            link: "/Products"
        },
        {
            icon: <GiKidneys className="text-6xl" />,
            title: "Nephrology",
            color: "from-orange-500 to-amber-600",
            link: "/Products"
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        We Specialize in 5 Branches
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive medical equipment solutions across multiple specialties
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href={category.link}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                {/* Gradient Background */}
                                <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                                    {/* Icon Container */}
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            {category.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-bold text-lg leading-tight min-h-[60px] flex items-center justify-center">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Shine Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Explore our comprehensive range of medical equipment
                    </p>
                    <a
                        href="/Products"
                        className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        View All Products
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;