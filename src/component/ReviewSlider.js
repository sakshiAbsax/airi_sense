import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import _ from "lodash";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import reviews from "../page/ReviewSliderCard";

const ReviewSlider = ({ starData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkNumber = (number) => {
    if (number >= reviews.length) {
      return 0;
    } else if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const changePerson = (step) => {
    setCurrentIndex((currentIndex) => checkNumber(currentIndex + step));
  };

  const minIndex = 0;
  const maxIndex = reviews.length - 1;

  const getRandomPerson = () => {
    let randomIndex;
    do {
      randomIndex = _.random(minIndex, maxIndex);
    } while (randomIndex === currentIndex);

    setCurrentIndex(randomIndex);
  };

  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true} // Enable auto-sliding
  autoPlayInterval={3000}
      responsive={{
        0: { items: 1 },
        700: { items: 2},
        1000: { items: 3 },
      }}
      startIndex={currentIndex}
    >
      {reviews.map((review, index) => (
        <div key={index} className="review justify-content-center px-2">
          <div className="img-container">
            <img src={review.image} alt={review.name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{review.name}</h4>
          <p className="job">
            {_.times(5, (i) =>
              i < review.star ? (
                <FaStar key={i} className="text-dark fs-5 pe-1" />
              ) : (
                <FaStar key={i} className="text-white fs-5 pe-1" />
              )
            )}
          </p>
          <p className="info">{review.text}</p>
        </div>
      ))}
    </AliceCarousel>
  );
};

export default ReviewSlider;
