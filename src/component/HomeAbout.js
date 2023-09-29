import React from "react";
import home_side1 from "../images/home_side2.png"
import {Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeAbout =()=>{
    return(
        <>
       <Container>
        <Row className="d-flex">
            <Col lg={7} xs={12} md={7}>
                <div className="mt-5 pt-5 whatWeDo">
                <h2> About </h2>
                  <p className="mt-4">Airi sense delivers data-driven & robotic solutions for your logistics automation alongside reliable, modular service concepts. Collaborating with forward-thinking companies, we are committed to setting new standards in warehouse automation to provide future-proof products and solutions. As part of the KUKA Group, our customers trust the competence of our passionate employees – more than 14,000 people working across the globe.</p>
                 <Link to="/aboutpage"> <div className="btn btn-lg btn-borderd button-1 my-3">What We Do</div> </Link>
                </div>
            </Col>
            <Col lg={5} xs={12} md={5}>
                <div className="ps-5">
             <img src={home_side1} width="auto" height="500px"/>
                </div>
            </Col>
        </Row>
        </Container>
        </>
    )
}