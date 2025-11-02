import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import products from '../images_description.json';
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { GoEye } from "react-icons/go";
import { TbDental } from "react-icons/tb";
import { BsLungs } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";

function Products() {
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const [activeCard, setActiveCard] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    const categories = [
        {
            id: "Ophthalmology",
            name: "Ophthalmology",
            icon: <GoEye className="text-3xl" />,
            color: "from-blue-500 to-cyan-600",
            description: "Eye Care Equipment"
        },
        {
            id: "ICU",
            name: "ICU Equipment",
            icon: <BsLungs className="text-3xl" />,
            color: "from-red-500 to-pink-600",
            description: "Intensive Care Units"
        },
        {
            id: "Dental Instruments",
            name: "Dental Instruments",
            icon: <TbDental className="text-3xl" />,
            color: "from-green-500 to-emerald-600",
            description: "Dental Treatment Systems"
        },
        {
            id: "Neonatal/Pediatric",
            name: "Neonatal/Pediatric",
            icon: <FaBaby className="text-3xl" />,
            color: "from-purple-500 to-violet-600",
            description: "Child & Infant Care"
        },
        {
            id: "Nephrology",
            name: "Nephrology",
            icon: <GiKidneys className="text-3xl" />,
            color: "from-orange-500 to-amber-600",
            description: "Kidney Care Equipment"
        }
    ];

    // Handle card clicks to filter products
    const handleCardClick = (cardId) => {
        if (activeCard === cardId) {
            // If clicking the same card, show all products
            setActiveCard("");
            setDisplayedProducts(products);
        } else {
            setActiveCard(cardId);
            handleFilter(cardId);
        }
        setCurrentPage(1);
    };

    // Filter products based on category
    const handleFilter = (filter) => {
        const filters = {
            "Ophthalmology": product => /eye care|topcon/i.test(product.name) || /eye care|topcon/i.test(product.description),
            "ICU": product => /intensive care unit|icu/i.test(product.name) || /intensive care unit|icu/i.test(product.description),
            "Dental Instruments": product => /dental/i.test(product.name) || /dental/i.test(product.description),
            "Neonatal/Pediatric": product => /incubator|intensive care unit/i.test(product.name) || /incubator|intensive care unit/i.test(product.description),
            "Nephrology": product => /nephrology|haemodialysis|kidney|renal/i.test(product.name) || /nephrology|haemodialysis|kidney|renal/i.test(product.description)
        };

        const filteredProducts = filter === "" ? products : products.filter(filters[filter] || (() => false));
        setDisplayedProducts(filteredProducts);
    };

    // Get current products for the active page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = displayedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <WhatsAppIcon />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
                <div className="section-container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Explore our comprehensive range of world-class medical equipment from leading global manufacturers.
                    </p>
                </div>
            </div>

            <div className="section-container">
                {/* Category Filters */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCardClick(category.id)}
                                className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                                    activeCard === category.id
                                        ? 'shadow-2xl ring-4 ring-primary-500'
                                        : 'shadow-lg hover:shadow-xl'
                                }`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="relative z-10 text-white flex flex-col items-center text-center space-y-3">
                                    <div className="transform group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-bold text-lg">{category.name}</h3>
                                    <p className="text-sm opacity-90">{category.description}</p>
                                </div>
                                {activeCard === category.id && (
                                    <div className="absolute top-2 right-2 z-20">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Clear Filter Button */}
                    {activeCard && (
                        <div className="text-center mt-6">
                            <button
                                onClick={() => {
                                    setActiveCard("");
                                    setDisplayedProducts(products);
                                    setCurrentPage(1);
                                }}
                                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                            >
                                Show All Products
                            </button>
                        </div>
                    )}
                </div>

                {/* Products Grid */}
                {currentProducts.length > 0 ? (
                    <>
                        <div className="mb-8">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-600">
                                    Showing <span className="font-semibold text-gray-800">{indexOfFirstProduct + 1}</span> to{' '}
                                    <span className="font-semibold text-gray-800">
                                        {Math.min(indexOfLastProduct, displayedProducts.length)}
                                    </span>{' '}
                                    of <span className="font-semibold text-gray-800">{displayedProducts.length}</span> products
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                            {currentProducts.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    productImage={product.productlink}
                                    productTitle={product.name}
                                    productDescription={product.description}
                                    productBrochure={product.Brochure}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        {displayedProducts.length > productsPerPage && (
                            <Pagination
                                productsPerPage={productsPerPage}
                                totalProducts={displayedProducts.length}
                                currentPage={currentPage}
                                paginate={handlePageChange}
                            />
                        )}
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-4">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
                        <p className="text-gray-600 mb-6">No products match your current filter selection.</p>
                        <button
                            onClick={() => {
                                setActiveCard("");
                                setDisplayedProducts(products);
                                setCurrentPage(1);
                            }}
                            className="btn-primary"
                        >
                            View All Products
                        </button>
                    </div>
                )}

                {/* Partner Sidebar - Now as a bottom section */}
                <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Manufacturing Partners</h3>
                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/emtbd/emt_images/images/Capture.JPG"
                            alt="Manufacturing Partners"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Products;