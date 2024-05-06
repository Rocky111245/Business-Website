import React, { useEffect, useRef } from "react";
import "./HomePage_2ndSection.css";

const HomePage_2ndSection = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (ref) => {
        if (ref.current) {
          const windowHeight = window.innerHeight;
          const imageTop = ref.current.getBoundingClientRect().top;
          const isImageVisible = imageTop < windowHeight;
          if (isImageVisible) {
            ref.current.classList.add("show");
          }
        }
      };

      checkVisibility(imageRef1);
      checkVisibility(imageRef2);
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
        ref={imageRef1}
      />
      <img
        className="HomePage_2ndSection-image delay"
        src="https://ik.imagekit.io/emtbd/emt_images/images/topcon.png?updatedAt=1678505026033"
        ref={imageRef2}
      />
    </div>
  );
};

export default HomePage_2ndSection;
