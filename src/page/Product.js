import React from "react";
import product_bnr from "../images/product_bnr.png";
import { Col, Row } from "react-bootstrap";
import productDiscription from "../images/productDis.webp";

export const Product = () => {
  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={product_bnr} width="100%" height="700px" alt="Solutions" />
        </div>
      </section>

      <div className="py-5" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="container">
          <Row className="d-flex">
            <Col lg={7} xs={12} md={7} className="pt-4">
              <h1
                className=" fw-bold text-start"
                style={{ color: "#6f309d", letterSpacing: "6px" }}
              >
                About Products
              </h1>
              <div className=" pt-2 whatWeDo">
                <p className="mt-3">
                  Airi-Sense offers you a wide range of traditional and out of
                  the box technologies for automated warehousing that provide
                  quality, flexibility and efficiency.
                </p>
                <p className="mt-2">
                  Modular, flexible and software-driven material handling
                  technologies
                </p>
                <p className="mt-2">
                  Every customer has different requirements. Our customised
                  solutions with our inhouse products are perfectly harmonized
                  to your needs and guarantee the optimal flow of goods at a
                  minimal operational cost. 
                </p>
                <p className="mt-2">
                  It doesn’t matter what you are looking for, we offer the
                  materials handling technology that perfectly meets your needs
                  from receiving to shipping.
                </p>
              </div>
            </Col>
            <Col lg={5} xs={12} md={5} className=" pt-5">
              <div className="ps-lg-5 ms-3">
                <img
                  src={productDiscription}
                  width="500px"
                  height="400px"
                  className="rounded"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="row justify-content-center pt-5 ">
        <div className="col-lg-8">
          <h1
            className=" fw-bold text-center"
            style={{ color: "#6f309d", letterSpacing: "6px" }}
          >
            Our Products
          </h1>
        </div>
      </div>



    </div>
  );
};
