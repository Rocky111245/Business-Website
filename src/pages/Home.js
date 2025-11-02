import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import SubFooter from '../components/SubFooter';
import WhatsAppIcon from '../components/WhatsAppIcon';
import HeroSection from '../components/home/HeroSection';
import GallerySection from '../components/home/GallerySection';
import TrustedBrandsSection from '../components/home/TrustedBrandsSection';
import CategorySection from '../components/home/CategorySection';
import ServicesGrid from '../components/home/ServicesGrid';
import ProductShowcase from '../components/home/ProductShowcase';
import MissionVisionSection from '../components/home/MissionVisionSection';

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <WhatsAppIcon />
            <HeroSection />
            <GallerySection />
            <TrustedBrandsSection />
            <CategorySection />
            <ServicesGrid />
            <ProductShowcase />
            <MissionVisionSection />
            <SubFooter />
            <Footer />
        </div>
    );
}

export default Home;