import React, { useState, useEffect, useRef } from "react";
import coustomer from "../images/coustomer.png";
import { Col, Container, Row } from "react-bootstrap";
import ourpride from "../images/ourpride.png";
import ImageSlider from "../component/ImageSlider";

export const Customer = () => {
  const images = [
    "../Assests/img/Adani.png",
    "../Assests/img/cipla.png",
    "../Assests/img/ITC.png",
    "../Assests/img/luping.png",
    "../Assests/img/Parle.png",
    "../Assests/img/sunpharma.png",
    "../Assests/img/Adani.png",
    // Add more image URLs here
  ];
  return (
    <div>
      <section id="customer">
        <div className="bnrImg">
          <img src={coustomer} width="100%" height="700px" />
        </div>

        <div className="mb-2 pt-5 container aboutOverview">
        <div className="row  justify-content-center ">
          <div className="col-lg-10">
            <h1 className="text-center py-2 fw-bold" style={{ color:"#6f309e" , letterSpacing:"3px"}}>Customer</h1>
            <p className="text-center" style={{textAlign:"justify"}}>
              Airi-Sense is a global company with Swiss roots and one of the
              world's leading logistics automation companies. We are
              headquartered in Buchs/Aarau, Switzerland and stand for
              innovation, quality, industry-leading software and robotics
              technologies developed in-house.{" "}
            </p>
          </div>
        </div>

      </div>
        <div className="">
          <Container>
            <Row>
              <Col lg={7} xs={12} md={12}>
                <div className="mt-5 pt-5 whatWeDo">
                  <h2 className="text-start"> Our Pride </h2>
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

              <Col lg={5} xs={12} md={12}>
                <div className="ps-5 pt-5">
                  <img src={ourpride} width="auto" height="500px" />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="container d-flex justify-content-center my-5">
            <ImageSlider images={images} />
          </div>
        </div>
      </section>
    </div>
  );
};
