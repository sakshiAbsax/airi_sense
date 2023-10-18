import React from "react";
import home_side1 from "../images/home_side2.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const HomeAbout = () => {
  return (
    <>
      <section className="section_padding partnerSec1">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col col-md-8 col-sm-12 col-lg-7 mb-5">
              <div className="whatWeDo">
                <h1
                  style={{
                    fontWeight: "600",
                    letterSpacing: "3px",
                  }}
                  className="text-start"
                >
                  About
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi-Sense, a dynamic and emerging company hailing from the
                  heart of India, to revolutionize the future of the material
                  handling including material management, material transfer &
                  intra-logistics domain.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Our unwavering commitment is to develop innovative solutions
                  which seamlessly adapt to the ever-evolving dynamics of the
                  supply chain industry.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi-Sense delivers data-driven & robotic solutions for your
                  current and future requirements alongside reliable, modular
                  service concepts. Collaborating with forward-thinking
                  companies, we are committed in setting new standards material
                  handling automation domain to provide future-proof products
                  and solutions.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                 We're not just reimagining the future of intra-logistics; we're actively shaping it.
                </p>
         
                <Link to="/about">
                  {" "}
                  <div className="btn btn-lg btn-borderd button-1 my-3">
                    What We Do
                  </div>{" "}
                </Link>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
              <div className="about_us_img">
                <img src={home_side1} width="100%" className="ps-5" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
