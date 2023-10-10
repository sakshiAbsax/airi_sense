import React,{useState} from "react";
import product_bnr from "../images/product_bnr.png";
import { ListGroup, } from "react-bootstrap";
import productDiscription from "../images/productDis.png";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import p1 from "../images/product/p-1.jpg";
import p2 from "../images/product/p-2.png";
import p3 from "../images/product/p-3.png";
import p4 from "../images/product/p-4.jpg";
import p5 from "../images/product/p-5.png";
import p6 from "../images/product/p-6.webp";

import "./product.css";

export const Product = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={product_bnr} width="100%" height="auto" />
        </div>
      </section>

      <section
        className="section_padding partnerSec1"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col col-md-8 col-sm-12 col-lg-7 mb-5">
              <div className="whatWeDo">
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#128c7e",
                    letterSpacing: "3px",
                  }}
                  className="text-start list-group-item"
                >
                  About Products
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi-Sense offers you a wide range of traditional and out of
                  the box technologies for automated warehousing that provide
                  quality, flexibility and efficiency.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Modular, flexible and software-driven material handling
                  technologies
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Every customer has different requirements. Our customised
                  solutions with our inhouse products are perfectly harmonized
                  to your needs and guarantee the optimal flow of goods at a
                  minimal operational cost.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  It doesn’t matter what you are looking for, we offer the
                  materials handling technology that perfectly meets your needs
                  from receiving to shipping.
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
                <img src={productDiscription} className="image-fluid ms-2" width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-lg-5 py-5">
        <div className="row justify-content-center  mx-lg-5 mx-3">
            <h1
              className=" fw-bold text-center pb-3"
              style={{ color: "#128c7e", letterSpacing: "6px" }}
            >
              Our Products
            </h1>
         
              <div className="col-lg-3 mx-2">
                <Card 
                   className={`me-2 cardhover ${isHovered ? 'hovered' : ''}`}
                   onMouseEnter={handleHover}
                   onMouseLeave={handleMouseLeave}
                    style={{ height: 'au' }}>
                  <Card.Img variant="top" src={p1} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">
                      ​​​​​​​ ​​​​​​​Smart Robotic solutons
                    </Card.Title>
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item">
                        ​Palletizing & De-palletizing
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Packing Solutions
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Material Handling
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Pick & Place
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Multi-level feeder
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={p2} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">​​Material Transfer Solutions</Card.Title>
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        ​Silos
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        Fillers
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Charging Systems
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Discharging System
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2 ">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={p3} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">Truck Loading & Unloading Solutions</Card.Title>
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item">
                        ​Telescopic Conveyors
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Expandable Conveyors
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Expandable Conveyors
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={p4} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">
                      ​​​​​​​ ​​​​​​​Smart Conveying Solutions
                    </Card.Title>
                    ​
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        ​Case & Tote Handling Lifts
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        Case Conveyor’s – Belt, Modular, PVC, MDR, Roller,
                        Gravity
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        Smart Conveying Solutions
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        Pallet Lift
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        Turn table - Case, Tote, Pallet
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        Cross Transfer System – Case, Tote, Pallet
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        Spiral Conveyor’s – Belt, Gravity Roller
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={p5} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">
                      Cross Transfer System – Case, Tote, Pallet
                    </Card.Title>
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        ​Maintenance Management System
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Maintenance Management System
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Energy Management System
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={p6} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">
                      Cloud based - IIoT & Data management
                    </Card.Title>
                    <ListGroup style={{ border: "none !important" }}>
                      <ListGroup.Item className="text-start list-group-item">
                        ​Production Data MIS
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        OEE Information system
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            </div>
            </div>
          </div>
  );
};
