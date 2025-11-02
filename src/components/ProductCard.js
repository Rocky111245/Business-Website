import React from "react";
import { FaDownload } from "react-icons/fa";

function ProductCard({ productImage, productTitle, productDescription, productBrochure }) {
    return (
        <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-100 h-64">
                <img
                    src={productImage}
                    alt={productTitle}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {productTitle}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {productDescription}
                </p>

                {/* Download Button */}
                {productBrochure && (
                    <a
                        href={productBrochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
                            <FaDownload className="text-sm" />
                            <span>Download Brochure</span>
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProductCard;