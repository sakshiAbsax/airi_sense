import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {ReviewCradDetails3} from '../../src/component/ReviewCradDetails3.json'; // Import the JSON file

const ReviewCard3 = () => {

  const [pictures, setPictures] = useState([]);
  const stagePadding = {
    paddingLeft: 50,
    paddingRight: 100
  };

  useEffect(() => {
    // Load data from the imported JSON file
    fetch(ReviewCradDetails3) 
      .then((response) => response.json())
      .then((data) => {
        const images = renderImages(data);
        setPictures(images);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);

  const handleOnDragStart = (e) => {
    e.preventDefault();
  };

  const renderImages = (data = []) => {
    return data.map((item, index) => (
      <div key={index}>
        <a href="/" onDragStart={handleOnDragStart}>
          <img alt="" src={item.image} style={{ width: "100%", borderRadius: "350px" }} />
          <h1>{item.heading}</h1>
          <p>{item.text}</p>
        </a>
      </div>
    ));
  };

  return (
    <AliceCarousel
      mouseTrackingEnabled
      stagePadding={stagePadding}
      responsive={{ "0": { items: 6 } }}
      items={pictures}
    />
  );
};

export default ReviewCard3; // Export the component
