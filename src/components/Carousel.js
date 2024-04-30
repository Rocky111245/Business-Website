import React, { useState, useEffect } from "react";
import carouselimages from "../images_description.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const imagesToShow = carouselimages.slice(6, 20);
  const length = imagesToShow.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % length);
    }, 2500);
    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => setCurrent(current => (current + 1) % length);
  const prevSlide = () => setCurrent(current => (current === 0 ? length - 1 : current - 1));

  return (
    <div className="slider">
      <FontAwesomeIcon icon={faChevronCircleLeft} className="left_arrow" onClick={prevSlide} />
      {imagesToShow.map((carouselinfo, index) => (
        <div className={index === current ? "slide active" : "slide"} key={index}>
          {index === current && (
            <>
              <div className="carousel__container">
                <img className="carousel__image" src={carouselinfo.productlink} alt={carouselinfo.title} />
                <p className="carousel__title">{carouselinfo.name}</p>
                <p className="carousel__description">{carouselinfo.description}</p>
              </div>
              <button className="carousel__learn-more-button">Learn More About Our Products</button>
            </>
          )}
        </div>
      ))}
      <FontAwesomeIcon icon={faChevronCircleRight} className="right_arrow" onClick={nextSlide} />
    </div>
  );
}

export default Carousel;
