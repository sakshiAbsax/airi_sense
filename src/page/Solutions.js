



import React,{useState} from "react"
import { ListGroup, } from "react-bootstrap";
import solutions from "../images/solutions.jpg";
import Card from "react-bootstrap/Card";
import './product.css'
import { solutionCard } from "./SolutionCard";

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
      <div className="mb-2 pt-5 mt-3 container ">
        <div className="row  justify-content-center  ">
          <div className="col-lg-10 whatWeDo">
          <h1
                  style={{
                    fontWeight: "600",
                    letterSpacing: "3px",
                  }}
                  className="text-center"
                >
                 Modularity Solutions... 
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
      { solutionCard.map((card, index) => (
        <div className="col-lg-3 mx-2">
                <Card 
                   className={`me-2 cardhover ${isHovered ? 'hovered' : ''}`}
                   onMouseEnter={handleHover}
                   onMouseLeave={handleMouseLeave}
                    style={{ height: 'au' }}>
                  <Card.Img variant="top" src={card.img} style={{ height: '250px' }} />
                  <Card.Body>
                    <Card.Title className="py-2">
                 {card.title}
                    </Card.Title>
                    <ListGroup>
                    {card.list.map((item, itemIndex) => (
                      <ListGroup.Item className="text-start list-group-item">
                      {item}
                      </ListGroup.Item>
                    ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
))}
              
          
        </div>
      </div>
      {/* <div className="row ">
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
      </div> */}
    </div>
  );
};
