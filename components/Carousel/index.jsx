import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src="images/carousel1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="images/carousel2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="images/carousel3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Slider;
