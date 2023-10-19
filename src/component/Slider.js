import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/slider1.png';
import slider2 from '../images/slider2.png';
import slider3 from '../images/slider3.png';
import './header.css';

export const Slider = () => {

  return (
    <div>
  <Carousel data-bs-theme="dark">
  <Carousel.Item style={{ height: "70vh",position: "relative" }}>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className=' text-center fw-bold' style={{fontSize:"65px"}} >Tailored Solutions for Ever-Changing Needs</h2>
      {/* <p className=' text-center fs-4' >
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: "70vh"}}>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    
    />
    <Carousel.Caption>
      <h2 className='text-center fw-bold' style={{fontSize:"65px"}}>Data-Driven Excellence for Goal-Oriented Success</h2>
      {/* <p className='text-center fs-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: "70vh" }}>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    
    />
    
    <Carousel.Caption>
      <h2 className='text-center fw-bold'style={{fontSize:"65px"}}>Future-Proofing Through Green Energy Innovation</h2>
      {/* <p className='text-center fs-4'>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: "70vh" }}>
    <img
      className="d-block w-100"
      src={slider1}
      alt="Fourth slide"
 
    />

    <Carousel.Caption>
      <h2 className='text-center  fw-bold' style={{fontSize:"65px"}}>Leading the Way in Sustainable Energy</h2>
      {/* <p className="text-center fs-4">
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
    </div>
  );
};
