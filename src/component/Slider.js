import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import download1 from '../images/download1.jpg';
import download2 from '../images/download2.jpg';
import donload3 from '../images/donload3.jpg';
import download4 from '../images/download4.jpg';
import './header.css';

export const Slider = () => {
  return (
    <div>
  <Carousel data-bs-theme="dark">
  <Carousel.Item style={{ height: "70vh" }}>
    <img
      className="d-block w-100"
      src={download1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 style={{ color: "purple" }}>First slide label</h2>
      <p style={{ color: "purple" }}>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: "70vh" }}>
    <img
      className="d-block w-100"
      src={download2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2 style={{ color: "purple" }}>Second slide label</h2>
      <p style={{ color: "purple" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: "70vh" }}>
    <img
      className="d-block w-100"
      src={donload3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2 style={{ color: "purple" }}>Third slide label</h2>
      <p style={{ color: "purple" }}>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: "70vh" }}>
    <img
      className="d-block w-100"
      src={download4}
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h2 style={{ color: "purple" }}>Fourth slide label</h2>
      <p style={{ color: "purple" }}>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};
