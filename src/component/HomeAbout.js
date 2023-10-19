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
                  About Us
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi-Sense is a dynamic and emerging company based in the
                  heart of India, dedicated to revolutionizing the future of
                  material handling, including material management, material
                  transfer, and intra-logistics.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Our unwavering commitment is to develop innovative solutions
                  that seamlessly adapt to the ever-evolving dynamics of the
                  supply chain industry.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi-Sense provides data-driven and robotic solutions for your
                  current and future requirements, complemented by dependable,
                  modular service concepts. Through collaborations with
                  forward-thinking companies, we are committed to setting new
                  standards in the domain of material handling automation to
                  offer future-proof products and solutions.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  We're not merely envisioning the future of intra-logistics;
                  we're actively shaping it.
                </p>

                {/* <Link to="/about">
                  {" "}
                  <div className="btn btn-lg btn-borderd button-1 my-3">
                    What We Do
                  </div>{" "}
                </Link> */}
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
