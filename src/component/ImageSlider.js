import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
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
    <div className="container py-5">
      <div className="image-slider">
        <div className="slider-content d-flex justify-content-center">
          {displayedImages.map((image, index) => (
            <img
              key={index}
              src={image}
               // Adjust the width as needed
              alt={`Image ${currentImageIndices[index]}`}
             className='me-5 w-25 h-25 p-4'/>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default ImageSlider;
