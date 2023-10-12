import React, { useState, useEffect } from "react";
import { reviewslider } from "../ReviewSliderCard";

const ReviewSlider = ({ images }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 1, 2, 3]);

  const prevImages = () => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = prevIndices.map((index) =>
        index === 0 ? images.length - 1 : index - 1
      );
      return newIndices;
    });
  };

  const nextImages = () => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = prevIndices.map((index) =>
        index === images.length - 1 ? 0 : index + 1
      );
      return newIndices;
    });
  };

  // Update the displayed images whenever the current indices change
  const displayedImages = currentImageIndices.map((index) => images[index]);

  // Automatically update the displayed images when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      nextImages();
    }, 5000); // Change images every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider my-5">
      <div className="row slider-content justify-content-center">
        
            {reviewslider.map((image, index) => (
            <div className="col-md-3 pe-5">
                <img
                key={index}
                src={image.img}
                // Adjust the width as needed
                alt={`Image ${currentImageIndices[index]}`}
                className="w-100 px-3"
              />
              <h1>{image.name}</h1>
              <p>{image.comment}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
