import React from 'react';
import './Home1stSection.css';



const Home1stSection = ()=>{
    return(
    
    <div className='home-section'>
                <img className='home-section_image' src='https://ik.imagekit.io/emtbd/emt_images/images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673968937853'></img>
    
                <div className='home-section__container-section1_background-text'>
                    <h3 className='home-section__title1'> Our Values</h3>
                    <h5 className='home-section__subtitle1'>Excellence,Integrity,Quality,Affordability,Responsibility, and Reliability are our core values</h5>
                </div>
                <img className='home-section_image2'  src='https://ik.imagekit.io/emtbd/emt_images/images/analysis-2030265.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673883338760'></img>
                   
                <div className='home-section__container-section2_background-text'>
                    <h3 className='home-section__title2'>Mission & Vision</h3>
                    <h4 className='home-section__subtitle2'><p>Our Mission is to be the most reliable and committed business partner in the sale of quality medical equipment, providing responsive after sales service, and solutions to the needs of healthcare providers. </p>
                    <p>Our Vision is to be the leading bio- medical equipment distributor and seller in Bangladesh.</p></h4>
                    
                    </div>
    </div>
    )
}













export default Home1stSection;