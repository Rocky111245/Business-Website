import React from 'react';
import ReactDOM from 'react-dom/client';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Home1stSection from '../components/Home1stSection';
import PhotoSection from '../components/Photo_Section';
import Homesection2 from '../components/Homesection2';
import SubFooter from '../components/SubFooter';
import products from '../images_description.json';
import Carousel from '../components/Carousel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import HomePage_1stSection from '../components/HomePage_1stSection';
import HomePage_2ndSection from '../components/HomePage_2ndSection';
library.add(faArrowAltCircleRight, faArrowAltCircleLeft)





function Home() {
  const slides = products.slice(0,5);
  return (<div className='container'>
  <Navbar></Navbar>
  <HomePage_1stSection></HomePage_1stSection>
  <PhotoSection></PhotoSection>
  <HomePage_2ndSection></HomePage_2ndSection>
  <Homesection2></Homesection2>
  <Carousel></Carousel>
  <Home1stSection></Home1stSection>
  <SubFooter></SubFooter>
 

  
  <Footer></Footer>
  </div>
  

  )
}

export default Home;