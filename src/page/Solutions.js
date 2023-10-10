import React,{useState} from "react";
import solutions from "../images/solutions.png";
import product_bnr from "../images/product_bnr.png";
import { ListGroup, } from "react-bootstrap";
import productDiscription from "../images/productDis.webp";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import download1 from "../images/download1.jpg";
import download2 from "../images/download2.jpg";
import donload3 from "../images/donload3.jpg";
import './product.css'

export const Solutions = () => {
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
          <img src={solutions} width="100%" height="700px" />
        </div>
      </section>
      <div className="mb-2 pt-5 mt-3 container aboutOverview">
        <div className="row  justify-content-center ">
          <div className="col-lg-10">
            <h1
              className="text-center py-2"
              style={{ fontWeight: "600", color: "#6f309e" }}
            >
              Modularity solution’s…
            </h1>
            <p className="text-center" style={{ textAlign: "justify" }}>
              Modularity is a key in all our solution’s…​ We build modular
              solutions for most of your needs for faster delivery & easy
              integration in your production environment.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-lg-5 py-5">
        <div className="row justify-content-center pt-5  mx-lg-5 mx-3">
        <div className="col-lg-3 mx-2">
                <Card 
                   className={`me-2 cardhover ${isHovered ? 'hovered' : ''}`}
                   onMouseEnter={handleHover}
                   onMouseLeave={handleMouseLeave}
                    style={{ height: 'au' }}>
                  <Card.Img variant="top" src={download1} style={{ height: '250px' }} />
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
                  <Card.Img variant="top" src={download2} style={{ height: '250px' }} />
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
                  <Card.Img variant="top" src={donload3} style={{ height: '250px' }} />
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
                  <Card.Img variant="top" src={download1} style={{ height: '250px' }} />
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
                  <Card.Img variant="top" src={download2} style={{ height: '250px' }} />
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
                  <Card.Img variant="top" src={donload3} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">
                      Cloud based - IIoT & Data management Solutions​
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
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={donload3} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">
                      Cloud based - IIoT & Data management Solutions​
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
      <div className="row ">
        <div className="container justify-content-center">
          <div className="col-lg-10 col-md-12">
          <h1
              className="text-center py-3"
              style={{ fontWeight: "600", color: "#6f309e" }}
            >
             Customized Solutions
            </h1>
            <div className="featuredPropBox">
              <ul>
                <li className="solution-cutomized">
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li  className="solution-cutomized">
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
