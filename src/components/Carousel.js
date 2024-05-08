import React, { useState, useEffect } from "react";
import carouselImages from "../images_description.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";



function Carousel() {
  const [current, setCurrent] = useState(1);  // Start from the first actual image, not the "fake" last
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imagesToShow = [carouselImages[carouselImages.length - 1], ...carouselImages, carouselImages[0]];
  const length = imagesToShow.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrent(current => (current + 1) % length);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      // Handle the seamless transition logic
      if (current === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrent(1); // Move directly to the first actual image without transition
        }, 50); // Short delay to skip rendering the "fake" last
      } else if (current === length - 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrent(1); // Reset to the first actual image to keep loop seamless
        }, 50); // Short delay to skip rendering the "fake" first
      } else {
        setIsTransitioning(false);
      }
    }
  }, [current, length]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrent(current => (current + 1) % length);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrent(current => (current === 0 ? length - 1 : current - 1));
  };

  return (
    <div className="slider">
      <FontAwesomeIcon icon={faChevronCircleLeft} className="left-arrow" onClick={prevSlide} />
      <div className="slider-wrapper" style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
        {imagesToShow.map((info, index) => (
          <div className="slide" key={index}>
            <div className="carousel__container">
              <img src={info.productlink} alt={info.title} className="carousel__image" />
              <div className="carousel__text">
                <p className="carousel__title">{info.name}</p>
                <p className="carousel__description">{info.description}</p>
              </div>
              <button className="carousel__learn-more-button" onClick={() => window.open("/Products", '_blank')}>Learn More About Our Products</button>
            </div>
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronCircleRight} className="right-arrow" onClick={nextSlide} />
    </div>
  );
}

export default Carousel;
