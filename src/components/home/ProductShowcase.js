import React, { useState, useEffect } from "react";
import products from "../../images_description.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductShowcase = () => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Show first 10 products for the carousel
    const showcaseProducts = products.slice(0, 10);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrent((prev) => (prev + 1) % showcaseProducts.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [current, isHovered, showcaseProducts.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % showcaseProducts.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? showcaseProducts.length - 1 : prev - 1));
    };

    return (
        <section className="bg-white py-16">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Featured Products
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our selection of high-quality medical equipment from world-leading manufacturers
                    </p>
                </div>

                {/* Product Carousel */}
                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Product Display */}
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col items-center">
                                {/* Product Image */}
                                <div className="w-full max-w-md h-80 mb-8 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
                                    <img
                                        src={showcaseProducts[current].productlink}
                                        alt={showcaseProducts[current].name}
                                        className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="text-center space-y-4 mb-6">
                                    <h3 className="text-2xl font-bold text-gray-800 px-4">
                                        {showcaseProducts[current].name}
                                    </h3>
                                    <p className="text-lg text-gray-600 max-w-2xl px-4">
                                        {showcaseProducts[current].description}
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="/Products"
                                    className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Learn More About Our Products
                                </a>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                            aria-label="Previous product"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                            aria-label="Next product"
                        >
                            <FaChevronRight />
                        </button>

                        {/* Dots Indicator */}
                        <div className="pb-6 flex justify-center space-x-2">
                            {showcaseProducts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === current
                                            ? 'bg-primary-600 w-8 h-2'
                                            : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                                    }`}
                                    aria-label={`Go to product ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Counter */}
                    <div className="text-center mt-6 text-gray-600">
            <span className="text-lg font-medium">
              Product {current + 1} of {showcaseProducts.length}
            </span>
                    </div>
                </div>

                {/* View All Products Link */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        See our complete catalog of medical equipment
                    </p>
                    <a
                        href="/Products"
                        className="inline-block text-primary-600 hover:text-primary-700 font-semibold text-lg border-b-2 border-primary-600 hover:border-primary-700 transition-colors duration-200"
                    >
                        View All {products.length}+ Products →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;