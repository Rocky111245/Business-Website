import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './Products.css';
import products from '../images_description.json';
import ProductCard from "../components/ProductCard";
import WhatsAppIcon from "../components/WhatsAppIcon";
import CardSection from "../components/card_products";
import Pagination from "../components/Pagination";

function Products() {
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const [activeCard, setActiveCard] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // Handle card clicks to filter products
    const handleCardClick = (cardId) => {
        setActiveCard(cardId);
        setCurrentPage(1); // Reset to the first page whenever the filter changes
        handleFilter(cardId);
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
    };

    return (
        <div className="Products">
            <Navbar />
            <WhatsAppIcon />
            <div className="products_container">
                <div className="sidebar">
                    <h4 className="sidebar__text-title">Partners we have represented</h4>
                    <img className="sidebar_image" src="https://ik.imagekit.io/emtbd/emt_images/images/Capture.JPG" alt="Partners"/>
                </div>
                <div className="products_main_all">
                    <CardSection activeCard={activeCard} onCardClick={handleCardClick} />
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                productImage={product.productlink}
                                productTitle={product.name}
                                productDescription={product.description}
                                productBrochure={product.Brochure}
                            />
                        ))
                    ) : (
                        <p>No products found for the selected category.</p>
                    )}
                    <Pagination 
                        totalCount={displayedProducts.length} 
                        productsPerPage={productsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;
