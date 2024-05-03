import React, { useEffect, useRef } from "react";
import "./HomePage_2ndSection.css";

const HomePage_2ndSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const windowHeight = window.innerHeight;
        const imageTop = imageRef.current.getBoundingClientRect().top;
        const isImageVisible = imageTop < windowHeight;

        if (isImageVisible) {
          imageRef.current.classList.add("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="HomePage_2ndSection__container">
    
      <img
        className="HomePage_2ndSection-image"
        src="https://ik.imagekit.io/emtbd/emt_images/images/Screenshot_2023-02-07_044037.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675773664532"
        ref={imageRef}
      />
    </div>
  );
};

export default HomePage_2ndSection;
