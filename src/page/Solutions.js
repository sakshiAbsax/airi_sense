



import React,{useState} from "react"
import product_bnr from "../images/product_bnr.png";
import { ListGroup, } from "react-bootstrap";
import solutions from "../images/solutions.jpg";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import download1 from "../images/download1.jpg";
import download2 from "../images/download2.jpg";
import donload3 from "../images/donload3.jpg";
import tracktrace from "../images/tracktrace.png";
import pakeging from "../images/pakeging.png";
import checkWeight from "../images/checkWeight.png";
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
          <img src={solutions} width="100%" height="auto" />
        </div>
      </section>
      <div className="mb-2 pt-5 mt-3 container aboutOverview">
        <div className="row  justify-content-center  ">
          <div className="col-lg-10 whatWeDo">
            <h1
              className="text-center py-2"
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
                    <Card.Title className="py-4">
                    Palletizing Cell
                    </Card.Title>
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item">
                      Gantry Based
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                      Robot Based
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={download2} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-4">​​Pick & Place</Card.Title>
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                      Machine tending
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                      Material Handling
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2 ">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={pakeging} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-4">Packing Solution</Card.Title>
                    <ListGroup>
                      <ListGroup.Item className="text-start list-group-item">
                      Secondary
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                      Tertiary
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
              <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={tracktrace} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-4">Track & Trace</Card.Title>
                    {/* <ListGroup>
                      <ListGroup.Item className="text-start list-group-item">
                      Secondary
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                      Tertiary
                      </ListGroup.Item>
                    </ListGroup> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={checkWeight} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-4">
                    Check-weighing & Rejection
                    </Card.Title>
                    {/* <ListGroup>
                      <ListGroup.Item className="text-start list-group-item list-group-item">
                        ​Maintenance Management System
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Maintenance Management System
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        Energy Management System
                      </ListGroup.Item>
                    </ListGroup> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={donload3} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-4">
                    Printing & Packing
                    </Card.Title>
                    {/* <ListGroup style={{ border: "none !important" }}>
                      <ListGroup.Item className="text-start list-group-item">
                        ​Production Data MIS
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        OEE Information system
                      </ListGroup.Item>
                    </ListGroup> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-3 mx-2">
                <Card className="me-2 cardhover" style={{ height: 'auto' }}>
                  <Card.Img variant="top" src={donload3} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-4">
                    Vertical Solutions
                    </Card.Title>
                    {/* <ListGroup style={{ border: "none !important" }}>
                      <ListGroup.Item className="text-start list-group-item">
                        ​Production Data MIS
                      </ListGroup.Item>
                      <ListGroup.Item className="text-start list-group-item">
                        OEE Information system
                      </ListGroup.Item>
                    </ListGroup> */}
                  </Card.Body>
                </Card>
              </div>
          
        </div>
      </div>
      <div className="row ">
        <div className="container justify-content-center">
          <div className="col-lg-10 col-md-12 whatWeDo">
          <h1
              className="text-center py-3"
            >
             Customized Solutions
            </h1>
            <div className="featuredPropBox">
              <ul>
                <li className="solution-cutomized">
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <h3 className="text-white">TECHNO-1</h3>
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
                      <h3 className="text-white">TECHNO-1</h3>
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
