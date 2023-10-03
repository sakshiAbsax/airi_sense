import React, { useState, useEffect, useRef } from "react";
import customer from "../images/customer.jpg";
import { Col, Container, Row } from "react-bootstrap";
import ourpride from "../images/ourpride.png";
import ReactCardSlider from "react-card-slider-component";

const slides = [
  { image: "./Assests/img/Adani.png",  },
  { image: "./Assests/img/cipla.png", },
  { image: "./Assests/img/ITC.png", },
  { image: "./Assests/img/luping.png",  },
  { image: "./Assests/img/Parle.png"},
  { image: "./Assests/img/sunpharma.png"},
 
];

export const Customer = () => {

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
      const sliderInterval = setInterval(() => {
        // Increment the current slide index to move right
        const nextSlide = (currentSlide - 1) % slides.length;
        setCurrentSlide(nextSlide);
    
        // Check if the sliderRef has been assigned before calling slideTo
        if (sliderRef.current) {
          sliderRef.current.slideTo(nextSlide);
        }
      }, 1000); // 1-second interval
    
      return () => clearInterval(sliderInterval); // Clear the interval on unmount
    }, [currentSlide]);

  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={customer} width="100%" height="700px" />
        </div>
        <div className="">
          <Container>
            <Row className="d-flex">
              <Col lg={7} xs={12} md={7}>
                <div className="mt-5 pt-5 whatWeDo">
                  <h2> Our Pride </h2>
                  <p className="mt-4">
                    We have been industrial solution business since 2003, and
                    had seen many up's and down, we at every juncture of
                    business remembers how our customer's have supported us,
                    guided us and helped us to be what we are today.
                  </p>
                  <p className="mt-4">
                    We have been proudly associated with +233 customer's along
                    different industrial vertical's, geographies, for different
                    application's.{" "}
                  </p>
                  <p className="mt-4">
                    We represents our reach and market trust & as we showcase
                    some of them but that's not the end, we still thanks to all
                    our customer's who has invested their thrust & time in us to
                    ensure we grow together{" "}
                  </p>
                </div>
              </Col>
             
              <Col lg={5} xs={12} md={5}>
                <div className="ps-5 pt-5">
                  <img src={ourpride} width="auto" height="500px" />
                </div>
              </Col>
            </Row>

            
          </Container>
         </div>
      <div className="container owncrousal my-5">
          <Row>
            <Col lg={12}>
              <div className="slider-container">
                <ReactCardSlider
                  slides={slides}
                  numberOfCards={4} // Number of cards to show at a time
                  gutter={20} // Space between cards
                  ref={sliderRef}
                />
              </div>
            </Col>
          </Row>
          </div>
        
        </section>
    </div>
  );
};
