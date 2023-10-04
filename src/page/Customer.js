import React, { useState, useEffect, useRef } from "react";
import customer from "../images/customer.jpg";
import { Col, Container, Row } from "react-bootstrap";
import ourpride from "../images/ourpride.png";



export const Customer = () => {
  return (
    <div>
      <section id="customer">
        <div className="bnrImg">
          <img src={customer} width="100%" height="700px" />
        </div>
        <div className="">
          <Container>
            <Row className="d-flex">
              <Col lg={7} xs={12} md={7}>
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

              <Col lg={5} xs={12} md={5}>
                <div className="ps-5 pt-5">
                  <img src={ourpride} width="auto" height="500px" />
                </div>
              </Col>
            </Row>

          </Container>
        
        </div>
      </section>
    </div>
  );
};
