import React,{useState,useEffect} from "react";
// import Container from "react-bootstrap/Container";
// import { Hamburger } from "./Hamburger";
import { Link, NavLink } from "react-router-dom";
import logoLarge from "../images/logoLarge.png";
import logoSmall from "../images/logoSmall.png"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import './header.css';

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top" style={{boxShadow: "6px 2px 15px 1px rgba(0,0,0,0.8)"}}>
        <Container>
          <NavLink to="/">
          <div className="logo ms-lg-5">
              {windowWidth > 395 ? (
                <img src={logoLarge} className="w-lg-50" alt="Large Logo" />
              ) : (
                <img src={logoSmall} className="w-lg-50" alt="Small Logo" />
              )}
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <NavLink to="/product" className="mx-4 nav-link-products">Products</NavLink>
              <NavLink to="/solutions" className="mx-4 nav-link-products">Solutions</NavLink>
              <NavLink to="/industries" className="mx-4 nav-link-products">Industries</NavLink>
              <NavLink to="/carrers" className="mx-4 nav-link-products">Careers</NavLink>
            </Nav>
            <Form className="d-flex ms-auto  d-flex justify-content-center">
              <Link to="/contact">

            
              <Button  className="btn btn-lg btn-borderd" style={{border:"none"}}> Contact Us</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
