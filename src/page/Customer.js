import React, { useState, useEffect, useRef } from "react";
import coustomer from "../images/coustomer.png";
import { Col, Container, Row } from "react-bootstrap";
import ourpride from "../images/pride.webp";
import ImageSlider from "../component/ImageSlider";
import ReviewSlider from "../component/ReviewSlider";

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
          <img src={coustomer} width="100%" height="auto" />
        </div>

        <div className="mb-2 pt-5 container aboutOverview">
          <div className="row  justify-content-center ">
            <div className="col-lg-10 whatWeDo">
              <h1
                className="text-center py-2 fw-bold"
                style={{ color: "#128c7e", letterSpacing: "3px" }}
              >
                Customer
              </h1>
              <p className="text-center" style={{ textAlign: "justify" }}>
                Airi-Sense is a global company with Swiss roots and one of the
                world's leading logistics automation companies. We are
                headquartered in Buchs/Aarau, Switzerland and stand for
                innovation, quality, industry-leading software and robotics
                technologies developed in-house.{" "}
              </p>
            </div>
          </div>
        </div>

        <section className="section_padding partnerSec1">
          <div className="container py-5">
            <div className="row justify-content-between align-items-center">
              <div className="col col-md-8 col-sm-12 col-lg-6 mb-5">
                <div className="whatWeDo">
                  <h1
                    style={{
                      fontWeight: "600",
                      color: "#128c7e",
                      letterSpacing: "3px",
                    }}
                    className="text-start"
                  >
                    Our Pride
                  </h1>
                  <p
                    className="card-paragraph mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    We have been industrial solution business since 2003, and
                    had seen many up's and down, we at every juncture of
                    business remembers how our customer's have supported us,
                    guided us and helped us to be what we are today.
                  </p>
                  <p
                    className="card-paragraph mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    We have been proudly associated with +233 customer's along
                    different industrial vertical's, geographies, for different
                    application's.
                  </p>
                  <p
                    className="card-paragraph mt-4"
                    style={{ textAlign: "justify" }}
                  >
                    We represents our reach and market trust & as we showcase
                    some of them but that's not the end, we still thanks to all
                    our customer's who has invested their thrust & time in us to
                    ensure we grow together.
                  </p>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 mb-5">
                <div className="about_us_img">
                  <img src={ourpride} width="100%" alt="" className="ps-5 mt-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container d-flex justify-content-center my-5">
          <ImageSlider images={images} />
        </div>


        <div className="container d-flex justify-content-center my-5">
          <ReviewSlider images={images} />
        </div>
      </section>
    </div>
  );
};
