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
                  Airi sense delivers data-driven & robotic solutions for your
                  logistics automation alongside reliable, modular service
                  concepts. divlaborating with forward-thinking companies, we
                  are committed to setting new standards in warehouse automation
                  to provide future-proof products and solutions. As part of the
                  KUKA Group, our customers trust the competence of our
                  passionate employees – more than 14,000 people working across
                  the globe.
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
