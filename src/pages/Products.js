import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './Products.css';
import products from '../images_description.json';
import ProductCard from "../components/ProductCard";
import WhatsAppIcon from "../components/WhatsAppIcon";


function Products() {
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const [activeFilter, setActiveFilter] = useState("");

    const handleFilter = (filter) => {
        setActiveFilter(filter); // Set the current active filter
        if (filter === "all") {
            setDisplayedProducts(products);
        } else {
            const filters = {
                "Eye Care": product => /Eye Care|Topcon/.test(product.description),
                "Intensive Care Units": product => /ICU|Intensive Care Unit/.test(product.description) || product.name.includes("ICU"),
                "Dental Instruments": product => product.description.includes("Dental") || product.name.includes("Dental"),
                "Baby Equipments": product => /Incubator|Intensive Care Unit/.test(product.description) || product.name.includes("Incubator"),
                "Kidney Health": product => /Nephrology|Haemodialysis/.test(product.description) || product.description.includes("Kidney,Renal,Nephrology")
            };
            setDisplayedProducts(products.filter(filters[filter]));
        }
    };

    const handleSearch = (searchValue) => {
        setDisplayedProducts(
            products.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    };

    return (
        <div className="Products">
            <Navbar />
            <WhatsAppIcon></WhatsAppIcon>
            <div className="products_container">
                <div className="sidebar">
                    <div className="FilterBox">
                        <div className="FilterHead"><h5>Filters</h5></div>
                        {["Eye Care", "Intensive Care Units", "Dental Instruments", "Baby Equipments", "Kidney Health"].map(filter => (
                            <div key={filter}>
                                <input
                                    className="FilterElement"
                                    type="checkbox"
                                    checked={activeFilter === filter}
                                    maxLength={7}
                                    onChange={(event) => handleFilter(event.target.checked ? filter : "all")}
                                /><span className="filtertext">{filter}</span>
                            </div>
                        ))}
                        <div className="search-container">
                            <form className="product_form">
                                <input
                                    className="product_input"
                                    type="text"
                                    placeholder="Search..."
                                    name="search"
                                    onChange={(event) => handleSearch(event.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                    <h4 className="sidebar__text-title">Partners we have represented</h4>
                    <img className="sidebar_image" src="https://ik.imagekit.io/emtbd/emt_images/images/Capture.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1673991441312" alt="Partners"/>
                </div>
              
                    <div className="products_main_all">
                        {displayedProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                productImage={product.productlink}
                                productTitle={product.name}
                                productDescription={product.description}
                                productBrochure={product.Brochure}
                            />
                        ))}
                    </div>
               
            </div>
            <Footer />
        </div>
    );
}

export default Products;
