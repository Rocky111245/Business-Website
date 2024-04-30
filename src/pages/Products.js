import React,{useState} from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import './Products.css';
import products from '../images_description.json';
import ProductCard from "../components/ProductCard";

function Products(){
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const [searchValue, setSearchValue] = useState("");
    const handleFilter = (selectedFilter) => {
        switch(selectedFilter){
            case "Eye Care":
                setDisplayedProducts(products.filter(product => /Eye Care|Topcon/.test(product.description)));
                break;
            case "Intensive Care Units":
                setDisplayedProducts(products.filter(product => /ICU|Intensive Care Unit/.test(product.description) || product.name.includes("ICU")));
                break;
            case "Dental Instruments":
                setDisplayedProducts(products.filter(product => product.description.includes("Dental") || product.name.includes("Dental")));
                break;
            case "Baby Equipments":
                setDisplayedProducts(products.filter(product => /Incubator|Intensive Care Unit/.test(product.description) || product.name.includes("Incubator")));
                break;
            case "Kidney Health":
                setDisplayedProducts(products.filter(product => product.description.includes ("Kidney,Renal")));
                break;
            default:
                setDisplayedProducts(products);
                break;
        }
    }
    const handleSearch = (searchValue) => {
        setSearchValue(searchValue);
        setDisplayedProducts(
            products.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    };

    return(
        <div className="Products">
            <Navbar></Navbar>
            <div className="products_container">
                <div className="sidebar">
                    <div className="FilterBox">
                        <div className="FilterHead"><h5>Filters</h5></div>
                        <div><input className="FilterElement" type="checkbox" onChange={(event) => handleFilter(event.target.checked ? "Eye Care" : "all")}></input ><span className="filtertext">Eye Care</span></div>
                        <div><input className="FilterElement" type="checkbox" onChange={(event) => handleFilter(event.target.checked ? "Intensive Care Units" : "all")}></input><span className="filtertext">Intensive Care Units</span></div>
                        <div><input className="FilterElement" type="checkbox" onChange={(event) => handleFilter(event.target.checked ? "Dental Instruments" : "all")}></input><span className="filtertext">Dental Instruments</span></div>
                        <div><input className="FilterElement" type="checkbox" onChange={(event) => handleFilter(event.target.checked ? "Baby Equipments" : "all")}></input><span className="filtertext">Baby Equipments</span></div>
                        <div><input className="FilterElement" type="checkbox" onChange={(event) => handleFilter(event.target.checked ? "Kidney Health" : "all")}></input><span className="filtertext">Kidney Health</span></div>
                        <div className="search-container">
                            <form className="product_form">
                                <input className="product_input" type="text" placeholder="Search..." name="search" onChange={(event) => handleSearch(event.target.value)}></input>
                            </form>
                        </div>
                    </div>
            <h4 className="sidebar__text-title">Partners we have represented</h4>
            <img className="sidebar_image" src="https://ik.imagekit.io/emtbd/emt_images/images/Capture.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1673991441312"></img>

        </div>

        <div className="products__main">
            <h2 className="products__main-text">Our Products</h2>
            <div className="products_main_all">
            {displayedProducts.map(product => (
                <ProductCard 
                    productImage={product.productlink}
                    productTitle={product.name}
                    productDescription={product.description}
                    productBrochure={product.Brochure}
                    
                />
            ))}
        </div>

        </div>

    

    </div>


    <Footer></Footer>




    </div>





    )
}

export default Products;