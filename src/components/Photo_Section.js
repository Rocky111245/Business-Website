import React, { useState, useEffect } from 'react';
import './Photo_Section.css';

const images = [
  {
    url: 'https://ik.imagekit.io/emtbd/emt_images/images/IMG_9768.HEIC?updatedAt=1709968888244',
    caption: 'Ophthalmological Society of Bangladesh (OSB) - 2024'
  },
  {
    url: 'https://ik.imagekit.io/emtbd/emt_images/images/IMG_9949.HEIC?updatedAt=1709969701613',
    caption: 'Ophthalmological Society of Bangladesh (OSB) - 2024'
  },
  {
    url:"https://ik.imagekit.io/emtbd/emt_images/images/422315621_910507494414250_9126567905570027216_n.jpg?updatedAt=1714435799234",
    caption: 'Grameen GC Eye Hospital-Bogra Intallation and Training - 2024'
  },
  {
    url:"https://ik.imagekit.io/emtbd/emt_images/images/422263657_910507617747571_556902053030439337_n.jpg?updatedAt=1714435799124",
    caption: 'Grameen GC Eye Hospital-Bogra Intallation and Training - 2024'
  },
  {
    url: "https://ik.imagekit.io/emtbd/emt_images/images/IMG_9783.HEIC?updatedAt=1709969838863",
    caption: 'Ophthalmological Society of Bangladesh (OSB) - 2024'

  },
  {
    url:"https://ik.imagekit.io/emtbd/emt_images/images/IMG_9938.HEIC?updatedAt=1709969838562",
    caption: 'Ophthalmological Society of Bangladesh (OSB) - 2024'

  },
  {
    url:"https://ik.imagekit.io/emtbd/emt_images/images/IMG_9846.heic?updatedAt=1709969838655",
    caption: 'Ophthalmological Society of Bangladesh (OSB) - 2024'
  },
  
  
];

const PhotoSection = () => {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current => (current + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [current]);
  
    return (
      <div className="photo-section-container">
        <h2 className="photo-section__heading">Over 40 years of Experience in the Medical Industry</h2>
        <div className="photo-section">
          {images.map((image, index) => (
            <div className={`photo-section__frame ${index === current ? 'active' : ''}`} key={index}>
              <img
                src={image.url}
                alt={`Gallery ${index}`}
                className="photo-section__image"
              />
              <figcaption className="photo-section__caption">{image.caption}</figcaption>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PhotoSection;
